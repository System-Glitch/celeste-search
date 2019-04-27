import { API } from "../download"
import { Item, Materials } from "../interfaces"

import { convertItem } from "./convert"
import { includeItem } from "./filter"
import { compareItems } from "./sort"

export async function buildItems(materials: Materials): Promise<Item[]> {
  console.log("Build items...")

  const traits = await API.getTraits()
  const conversions = Object.values(traits)
    .filter(includeItem)
    .map(convertItem)
  const result = await Promise.all(conversions)

  return result.sort(compareItems)
}
