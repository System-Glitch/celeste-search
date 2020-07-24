import chalk from "chalk"

import { Item, Material } from "../interfaces"
import { SearchBuilder } from "../shared/search-helpers"

export function buildItemSearchString(material: Material): string {
  const builder = new SearchBuilder()

  if (material.id) {
    builder.add(material.id)
  }
  builder.add(material.name)
  builder.add(material.rarity)

  if (material.rarity == "junk") {
    builder.add("unusable")
  }

  return builder.build()
}
