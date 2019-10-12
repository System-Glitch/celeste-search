import { Consumable } from "../interfaces"
import { SearchBuilder } from "../shared/search-helpers"

export async function buildSearchString(consumable: Consumable): Promise<string> {
  const builder = new SearchBuilder()

  builder.add("consumables")

  builder.addStrict(consumable.id)
  builder.add(consumable.name)

  Object.keys(consumable.rarities).forEach(rarity => {
    builder.add(rarity)
    builder.addStrict(consumable.rarities[rarity].description)
  })

  return builder.build()
}
