import { merge } from "lodash"

import { Consumable, ConsumableRarity } from "../interfaces"
import { API, downloadIcon } from '../download'

import { translateEn, convertCivilization } from "../shared/convert-text"
import { includeConsumable } from "./filter"
import { compareConsumables } from "./sort"
import { buildSearchString } from "./search"

export async function buildConsumables(): Promise<Consumable[]> {
  console.log("Build consumables...")

  const mergedByName: { [name: string]: Consumable } = {}
  const consumables = await API.getConsumables()
  for (const consumable of Object.values(consumables)) {
    const name = await translateEn(consumable.displaynameid, consumable.name)
    const description = await translateEn(consumable.rollovertextid, "")

    // Mummy exception
    if (consumable.icon == 'Celeste\\HalloweenEvent\\Mummy\\ConMummyFighter_ua') {
      consumable.icon = 'Celeste\\HalloweenEvent\\Mummy\\Mummy64_ua'
    }
    const icon = await downloadIcon(`Art/${consumable.icon}`, "consumables")
    const civilization = convertCivilization(consumable.civmatchingtype)

    const rarity: Consumable["rarities"][string] = {
      id: consumable.name,
      icon,
      description,
    }

    const rarities: Consumable["rarities"] = {
      [consumable.rarity.replace("cRarity", "").toLowerCase()]: rarity,
    }

    const result: Consumable = {
      id: rarity.id.replace(/_.+/, ""),
      name,
      vendors: undefined,
      rarities,
      civilization,
      search: "",
      marketplace: [],
    }

    if (result.id == 'consumablescouteg' || consumable.name == 'consumablescout') {
      result.civilization = 'Greek or Egyptian'
    }
    const merged = merge(mergedByName[name], result)
    merged.search = await buildSearchString(merged)


    merged.marketplace = Object.keys(merged.rarities).reduce((queries, key) => {
      queries.push({
        id: merged.rarities[key].id,
        rarity: key,
      })
      return queries
    }, [] as typeof result.marketplace)

    mergedByName[name] = merged
  }

  return Object.values(mergedByName)
    .filter(includeConsumable)
    .sort(compareConsumables)
}
