import { merge } from "lodash"

import { Consumable } from "../interfaces"
import { API, downloadIcon } from '../download'

import { translateEn, convertCivilization } from "../shared/convert-text"
import { includeConsumable } from "./filter"
import { compareConsumables } from "./sort"
import { buildSearchString } from "./search"
import { convertEvent } from "./convert-event"
import { findVendors } from "../vendors"

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
      id: rarity.id,
      name,
      vendors: undefined,
      rarities,
      civilization,
      search: "",
      marketplace: [],
      event: convertEvent(consumable)
    }

    if (result.id == 'consumablescouteg' || consumable.name == 'consumablescout') {
      result.civilization = 'Greek or Egyptian'
    }

    
    result.vendors = await findVendors(result.id);

    (result.vendors || []).forEach(vendor => {
      if (consumable.rarity === "cRarityLegendary") {
        vendor.rarity = "legendary"
      }
      if (consumable.rarity === "cRarityEpic") {
        vendor.rarity = "epic"
      }
      if (consumable.rarity === "cRarityRare") {
        vendor.rarity = "rare"
      }
      if (consumable.rarity === "cRarityUncommon") {
        vendor.rarity = "uncommon"
      }
      if (consumable.rarity === "cRarityCommon") {
        vendor.rarity = "common"
      }
    })

    const merged = merge(mergedByName[name], result)
    merged.search = await buildSearchString(merged,consumable)


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
