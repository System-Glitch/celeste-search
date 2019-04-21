import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core"

import { MarketplaceItem } from "celeste-api-types"
import { isEqual } from "lodash"
import { distinctUntilChanged, map, tap } from "rxjs/operators"

import { Item, Materials } from "../../interfaces"
import { DbService, SettingsService } from "../../services"

@Component({
  selector: "cis-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit, OnDestroy {

  @Input() item: Item

  level: number
  materials: Materials
  market: MarketplaceItem[]

  private destroyed = false

  constructor(
    private changeRef: ChangeDetectorRef,
    private db: DbService,
    private settings: SettingsService,
  ) { }

  ngOnInit() {
    this.level = this.item.levels[this.item.levels.length - 1]

    if (this.item.recipe) {
      this.db.shared.subscribe(db => {
        if (!this.destroyed) {
          this.materials = db.materials
          this.changeRef.detectChanges()
        }
      })
    }

    this.settings.controls.precision.valueChanges.subscribe(() => {
      if (!this.destroyed) {
        this.changeRef.detectChanges()
      }
    })

    const byPrice = (a: MarketplaceItem, b: MarketplaceItem) => {
      return a.ItemPrice / a.ItemCount - b.ItemPrice / b.ItemCount
    }

    this.db.marketplace.pipe(
      map(market => market.data.filter(entry => entry.ItemID === this.item.trait)),
      distinctUntilChanged(isEqual),
      map(market => market.sort(byPrice)),
      tap(market => this.market = market),
      tap(() => this.changeRef.detectChanges()),
    ).subscribe()
  }

  ngOnDestroy() {
    this.destroyed = true
  }

  setLevel(level: number) {
    if (!this.destroyed) {
      this.level = level
      this.changeRef.detectChanges()
    }
  }

  marketRange() {
    const lowestInt = this.market[0].ItemPrice
    const highestInt = this.market[this.market.length - 1].ItemPrice

    return [lowestInt, highestInt]
  }

  formatPrice(range: [number, number?]): string {
    const lowestInt = range[0]
    const highestInt = range[1] || lowestInt

    const abbr = this.priceAbbreviation(highestInt)
    const lowestStr = this.convertPrice(lowestInt, abbr)
    const highestStr = this.convertPrice(highestInt, abbr)

    if (lowestStr === highestStr) {
      return `${lowestStr}`
    }

    return `${lowestStr} – ${highestStr}`
  }

  private priceAbbreviation(price: number) {
    if (price >= 10000000) {
      return "M"
    }
    if (price >= 10000) {
      return "k"
    }
    return ""
  }

  private convertPrice(price: number, abbreviation: "M" | "k" | "") {
    if (abbreviation === "M") {
      price = Math.round(price / 1000000)
    }
    if (abbreviation === "k") {
      price = Math.round(price / 1000)
    }
    return price + abbreviation
  }

  marketCount() {
    return this.market.length
  }

}
