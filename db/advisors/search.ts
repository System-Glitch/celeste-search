import { Advisor } from "../interfaces"
import { Advisor as APIAdvisor } from "../../api-types"
import { SearchBuilder } from "../shared/search-helpers"
import { searchByLevels, searchByVendor } from "../shared/search-tags"

export async function buildSearchString(apiAdvisor: APIAdvisor, advisor: Advisor): Promise<string> {
  const builder = new SearchBuilder()

  builder.add("advisors")

  builder.addStrict(advisor.id)
  builder.add(advisor.name)
  for(const rarity of Object.values(advisor.rarities)){
    builder.add(rarity.id)
  }
  
  builder.add(`age${advisor.age}`)
  builder.add(advisor.civilization || "greek egypt celtic persian roman babylonian norse indian")

  if (advisor.lootTable) {
    builder.add(advisor.lootTable)
    if (advisor.lootTable == "skirmish hall") {
      builder.add("Skirmish-Exclusive")
    } else {
      builder.add(advisor.lootTable + "-Exclusive")
    }
  }

  builder.add(apiAdvisor.groupid >= 93 ? "celeste" : "classic")

  await searchByLevels(builder, [advisor.level])
  await searchByVendor(builder, advisor.vendors)

  Object.keys(advisor.rarities).forEach(rarity => {
    builder.add(rarity)
    builder.addStrict(advisor.rarities[rarity].description)
  })

  return builder.build()
}
