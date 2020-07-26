import { Blueprint as ApiBlueprint } from "../../api-types"

import { API, downloadIcon } from "../download"
import { Blueprint } from "../interfaces"
import { translateEn } from "../shared/convert-text"
import { findVendors } from "../vendors"

import { convertMaterials } from "./convert-materials"
import { buildSearchString } from "./search"
import { convertLootTable } from './convert-loot-table'
import { convertEvent } from './convert-event'

export async function convertBlueprint(blueprint: ApiBlueprint): Promise<Blueprint> {
  const prototypes = await API.getPrototypes()

  const proto = prototypes[blueprint.protounit]
  const name = await translateEn(proto.DisplayNameID!, blueprint.name)
  const description = await translateEn(blueprint.rollovertextid)
  const icon = await downloadIcon(`Art/${blueprint.icon}`, "blueprints")
  const rarity = blueprint.rarity.replace("cRarity", "").toLowerCase()
  const materials = convertMaterials(blueprint)

  const result: Blueprint = {
    id: blueprint.name,
    name,
    description,
    icon,
    rarity,
    materials,
    vendors: undefined,
    search: "",
    marketplace: [],
    event: convertEvent(blueprint),
    lootTable: convertLootTable(blueprint)
  }

  result.vendors = await findVendors(result.id)
  result.search = await buildSearchString(result, blueprint)
  result.marketplace.push({ id: result.id })

  return result
}
