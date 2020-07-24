export interface Material {
  id?: string,
  name: string
  icon: string
  rarity: string,
  search?: string
}

export interface Materials {
  [key: string]: Material
}
