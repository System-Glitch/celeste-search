import { Material } from "../interfaces/Material"

const ignored = [
  "!spartantoken"
]

function isSackOfGold(material: Material): boolean {
  if (material.id) {
    return material.id.startsWith("!!lottoticket")
  }
  return false
}

export function includeMaterial(material: Material) {
  return !isSackOfGold(material) && !ignored.includes(material.id!)
}
