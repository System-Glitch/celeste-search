import { MarketplaceQuery } from "./MarketplaceQuery"
import { Vendor } from "./Vendor"

export interface ConsumableRarity {
  id: string
  description: string
  icon: string,
}

export interface Consumable {
  id: string
  name: string
  rarities: {
    [index: string]: ConsumableRarity,
  }
  civilization: string | undefined
  vendors: Vendor[] | undefined
  search: string
  marketplace: MarketplaceQuery[],
  event?: {
    name: "halloween" | "winter" | "summer"
    year: 0 | 2018 | 2019 | 2020 | 2021,
  } | undefined
}
