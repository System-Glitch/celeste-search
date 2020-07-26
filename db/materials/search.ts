import chalk from "chalk"

import { Material as ApiMaterial } from "../../api-types"
import { Material } from "../interfaces"
import { SearchBuilder } from "../shared/search-helpers"
import { isQuestReward, isSummer2019Material, isHalloween2019Material } from './source'

export function buildMaterialSearchString(material: Material, apiMaterial: ApiMaterial): string {
  const builder = new SearchBuilder()

  builder.add(material.name)
  builder.add(material.rarity)

  if (material.rarity == "junk") {
    builder.add("unusable")
  }

  if (material.lootTable) {
    builder.add(material.lootTable)
    builder.add(material.lootTable + "-Exclusive")
  }

  if (material.workshop) {
    builder.add(material.workshop + "'s Workshop")
  }

  if (isQuestReward(apiMaterial)) {
    builder.add("Quest Reward")
  }

  if (isSummer2019Material(apiMaterial)) {
    builder.add("Summer Event 2019 Reward")
  }
  if (isHalloween2019Material(apiMaterial)) {
    builder.add("Halloween Event 2019 Reward")
  }

  return builder.build()
}
