import { Material as ApiMaterial } from "../../api-types"

import { downloadIcon } from "../download"
import { Material } from "../interfaces"
import { translateEn } from "../shared/convert-text"
import { convertEvent } from './convert-event'
import { convertLootTable } from './convert-loot-table'
import { buildMaterialSearchString } from './search'
import { getQuestName } from './source'

export async function convertMaterial(material: ApiMaterial): Promise<Material> {
  const m: Material = {
    id: material.name,
    name: await translateEn(material.displaynameid, material.name),
    description: await translateEn(material.rollovertextid),
    icon: await downloadIcon(`Art/${material.icon}`, "materials"),
    rarity: material.rarity.substr("cRarity".length).toLowerCase(),
    event: convertEvent(material),
    lootTable: convertLootTable(material),
    quest: getQuestName(material)
  }
  m.search = await buildMaterialSearchString(m, material)

  return m
}

export async function convertMaterialForBlueprint(material: ApiMaterial): Promise<Material> {
  const name = await translateEn(material.displaynameid, material.name)
  const icon = await downloadIcon(`Art/${material.icon}`, "materials")
  const rarity = material.rarity.substr("cRarity".length).toLowerCase()

  return {
    name,
    icon,
    rarity,
  }
}
