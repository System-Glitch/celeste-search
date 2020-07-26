export interface Material {
  id?: string
  name: string
  description?: string
  icon: string
  rarity: string
  event?: {
    name: "halloween" | "winter" | "summer"
    year: 0 | 2018 | 2019 | 2020,
  } | undefined
  lootTable?: string
  quest?: string
  workshop?: string
  search?: string
}

export interface Materials {
  [key: string]: Material
}
