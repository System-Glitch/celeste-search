import { Vendor } from "./Vendor"

export interface AdvisorRarity {
  id: string
  description: string
  icon: number,
}

export interface Advisor {
  name: string
  age: number
  level: number
  civilization?: string
  vendors?: Vendor[]
  rarities: {
    [index: string]: AdvisorRarity,
  }
  search: string
}
