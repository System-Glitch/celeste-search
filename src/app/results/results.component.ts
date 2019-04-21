import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core"

import { distinctUntilChanged, tap } from "rxjs/operators"

import { Entity } from "../../../db/interfaces"
import { SearchService, StateService, TABS } from "../services"
import { SettingsService } from "../services/settings.service"

import { combineLatest } from "rxjs"
import { hiddenRenderData } from "./hidden-render"

const rem = 15
const empty = []

@Component({
  selector: "cis-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit, OnDestroy {

  @ViewChild("sentinal") sentinel: ElementRef

  readonly activeTabChange = this.state.tabChange

  readonly hiddenRenderItem = hiddenRenderData.item
  readonly hiddenRenderAdvisor = hiddenRenderData.advisor
  readonly hiddenRenderBlueprint = hiddenRenderData.blueprint

  numColumns = 3
  tab = 0

  private filtered: Entity[] = []
  private observer: IntersectionObserver
  displayed: Entity[] = []

  constructor(
    private changeRef: ChangeDetectorRef,
    private search: SearchService,
    private settings: SettingsService,
    private state: StateService,
  ) { }

  ngOnInit() {
    this.updateNumColumns()
    this.registerForTabChange()
    this.registerForResults()
    this.registerForSettingsChanges()
    this.setupInfiniteScroll()
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }

  updateNumColumns() {
    const optimalColumns = Math.floor(window.innerWidth / 30 / rem)
    const boundedColumns = Math.max(1, Math.min(optimalColumns, +this.settings.maxColumns.value))

    if (this.numColumns !== boundedColumns) {
      this.numColumns = boundedColumns
      this.render()
    }
  }

  trackResult(index: number, entity: Entity) {
    return entity.name
  }

  private registerForTabChange() {
    this.state.tabChange.subscribe(tab => {
      this.tab = tab
      this.displayed = empty
      this.render()
    })
  }

  private registerForResults() {
    this.search.results.pipe(
      tap(changes => {
        this.filtered = changes
        this.displayed = empty
        this.pushChunk()
      }),
    ).subscribe()
  }

  private registerForSettingsChanges() {
    this.settings.maxColumns.valueChanges.subscribe(() => {
      requestAnimationFrame(() => this.updateNumColumns())
    })
  }

  private setupInfiniteScroll() {
    const { sentinel, pushChunk } = this

    const callback: IntersectionObserverCallback = entries => {
      if (entries[0].isIntersecting) {
        pushChunk()
      }
    }

    this.observer = new IntersectionObserver(callback)
    this.observer.observe(sentinel.nativeElement)
  }

  private pushChunk = () => {
    if (this.displayed.length >= this.filtered.length) {
      this.render()
      return
    }

    if (this.displayed === empty) {
      this.displayed = []
    }

    const chunkSize = Math.round(window.innerHeight * this.numColumns / 150)

    for (let i = 0; i < chunkSize; i++) {
      const next = this.filtered[i]
      if (next) {
        this.displayed.push(next)
      } else {
        break
      }
    }

    this.render()
  }

  private render() {
    console.log(`${TABS[this.tab].id}: ${this.displayed.length}/${this.filtered.length}`)
    requestAnimationFrame(() => {
      this.changeRef.detectChanges()
    })
  }

}
