import { Material } from "../../api-types"

const crete = [
  "!knossosmarble",
  "!minoantools",
  "!cypresswood"
]

export function convertLootTable(material: Material): string | undefined {
  if (crete.includes(material.name)) {
    return "crete"
  }
}
