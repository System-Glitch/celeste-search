import { Consumable } from "../interfaces"
import { Consumable as ApiConsumable } from "../../api-types"
import { SearchBuilder } from "../shared/search-helpers"
import { isHalloween2019Consumable, isSummer2020Consumable, isWinter2019Consumable } from "./source"
import { searchByVendor } from "../shared/search-tags"

export async function buildSearchString(consumable: Consumable, apiConsumable: ApiConsumable): Promise<string> {
  const builder = new SearchBuilder()

  builder.addStrict(consumable.id)
  builder.add(consumable.name)

  Object.keys(consumable.rarities).forEach(rarity => {
    builder.add(rarity)
    builder.addStrict(`${consumable.rarities[rarity].description.replace(/\s/g, "")}`)
    builder.addStrict(consumable.rarities[rarity].id) 
    /*builder.addStrict(consumable.rarities[rarity].createdUnits)*/
    builder.addStrict(`age${consumable.rarities[rarity].requiredage}`)
  })

  if (isSummer2020Consumable(apiConsumable)) {
    builder.add("Summer Event Reward")
  }
  if (isHalloween2019Consumable(apiConsumable)) {
    builder.add("Halloween Event Reward")
  }
  if (isWinter2019Consumable(apiConsumable)) {
    builder.add("Winter Event Reward")
  }

  
  await searchByVendor(builder, consumable.vendors)

  return builder.build()
}
