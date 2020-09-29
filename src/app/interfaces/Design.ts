import { MarketplaceQuery } from "./MarketplaceQuery"
import { Vendor } from "./Vendor"

export interface Design {
  id: string
  description: string
  icon: string
  rarity: string
  materials: Array<{ id: string, quantity: number }> | undefined
  school: string
  vendors: Vendor[] | undefined
  outputId: string
  outputName: string
  outputIcon: string
  search: string
  civilization: string | undefined
  marketplace: MarketplaceQuery[]
  lootTable: string | undefined
}
