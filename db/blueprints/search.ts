import { Blueprint } from "../interfaces"
import { Blueprint as ApiBlueprint } from "../../api-types"
import { SearchBuilder } from "../shared/search-helpers"
import { searchByMaterial, searchByVendor } from "../shared/search-tags"
import { isSummer2020Blueprint, isHalloween2019Blueprint, isWinter2019Blueprint } from './source'

export async function buildSearchString(blueprint: Blueprint, apiBlueprint: ApiBlueprint): Promise<string> {
  const builder = new SearchBuilder()

  builder.add("blueprints")

  builder.add(blueprint.id)
  builder.add(blueprint.name)
  builder.add(blueprint.description || "")
  builder.add(blueprint.rarity)
  builder.add(apiBlueprint.protounit)

  if (blueprint.lootTable) {
    builder.add(blueprint.lootTable)
    if (blueprint.lootTable == "skirmish hall") {
      builder.add("Skirmish-Exclusive")
    } else {
      builder.add(blueprint.lootTable + "-Exclusive")
    }
  }

  if (isSummer2020Blueprint(apiBlueprint)) {
    builder.add("Summer Event Reward")
  }
  if (isHalloween2019Blueprint(apiBlueprint)) {
    builder.add("Halloween Event Reward")
  }
  if (isWinter2019Blueprint(apiBlueprint)) {
    builder.add("Winter Event Reward")
  }

  await searchByMaterial(builder, blueprint.materials)
  await searchByVendor(builder, blueprint.vendors)

  return builder.build()
}
