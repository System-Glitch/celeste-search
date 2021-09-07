import { ItemEffect } from "./ItemEffect"
import { MarketplaceQuery } from "./MarketplaceQuery"
import { Recipe } from "./Recipe"
import { Vendor } from "./Vendor"

export interface Item {
  id: string
  name: string
  type: string
  levels: number[]
  icon: string
  rarity: string
  effects: ItemEffect[] | undefined
  effectsRange: boolean | undefined
  recipe: Recipe | undefined
  vendors: Vendor[] | undefined
  quest: string | undefined
  event: {
    name: "halloween" | "winter" | "summer"
    year: 0 | 2018 | 2019 | 2020 | 2021,
  } | undefined
  starting: string[] | undefined
  search: string
  marketplace: MarketplaceQuery[],
  lootTable: string | undefined
}
