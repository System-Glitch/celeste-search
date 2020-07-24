import { Material } from "../interfaces/Material"

const ignored = [
  "!spartantoken",
  "!!epticket",
  "!vanityticket",
  "!goldenticket",
]

function is(material: Material, start: string): boolean {
  if (material.id) {
    return material.id.startsWith(start)
  }
  return false
}

function isSackOfGold(material: Material): boolean {
  return is(material, "!!lottoticket")
}

export function includeMaterial(material: Material) {
  return !isSackOfGold(material) &&
    !ignored.includes(material.id!)
}
