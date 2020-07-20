import { Blueprint } from "../../api-types"

const crete = [
  "van_mn_wonder",
  "van_mn_wonder2",
  "van_mn_wonder3"
]

export function convertLootTable(blueprint: Blueprint): string | undefined {
  if (blueprint.name.startsWith("van_mn")) {
    return "crete"
  }
  if (blueprint.name.startsWith("van_sk")) {
    return "skirmish hall"
  }
}
