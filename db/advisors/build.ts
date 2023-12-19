import { merge } from "lodash"

import { API, downloadIcon } from "../download"
import { Advisor } from "../interfaces"
import { translateEn, convertCivilization } from "../shared/convert-text"
import { findVendors } from "../vendors"

import { includeAdvisor } from "./filter"
import { buildSearchString } from "./search"
import { compareAdvisors } from "./sort"
import { convertLootTable } from './convert-loot-table'

export async function buildAdvisors(): Promise<Advisor[]> {
  console.log("Build advisors...")

  const mergedByName: { [name: string]: Advisor } = {}
  const advisors = await API.getAdvisors()

  for (const advisor of Object.values(advisors)) {
    const name = await translateEn(advisor.displaynameid, advisor.name)
    const description = await translateEn(advisor.displaydescriptionid, "")
    const icon = await downloadIcon(`Art/${advisor.icon}`, "advisors")
    const civilization = convertCivilization(advisor.civilization)

    const rarity: Advisor["rarities"][string] = {
      id: advisor.name,
      icon,
      description,
    }

    const rarities: Advisor["rarities"] = {
      [advisor.rarity]: rarity,
    }

    const result: Advisor = {
      id: rarity.id.replace(/_.+/, ""),
      name,
      age: advisor.age + 1,
      level: advisor.minlevel,
      civilization,
      rarities,
      vendors: [],
      search: "",
      marketplace: [],
      lootTable: convertLootTable(advisor)
    }
    
    const vendorData = await findVendors(rarity.id);
    (vendorData || []).forEach(vendor => {
      vendor.rarity = advisor.rarity
    })

    const merged = merge(mergedByName[name], result)

    for (let i=0; i<vendorData.length;i++) {
      merged.vendors.push(vendorData[i])
    }

    merged.search = await buildSearchString(advisor, merged)

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
    .filter(includeAdvisor)
    .sort(compareAdvisors)
}
