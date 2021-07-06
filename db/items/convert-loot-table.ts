import { Trait } from "../../api-types"

export function convertLootTable(trait: Trait): string | undefined {
  if (trait.dbid <= 2258 && trait.name.includes('_')) {
    var splitName = trait.name.split('_');
    switch (splitName[1].charAt(1)) {
      case "a":
        return "crete"
      case "b":
        return "skirmish hall"
    }
  }
  if (trait.name.endsWith("_bahram")) {
    return "bahram's lottery"
  }
  }
  if (trait.name.endsWith("_moes")) {
    return "moe's mystorium"
  }
}
