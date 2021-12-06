import { Material as ApiMaterial } from "../../api-types"

import { downloadIcon } from "../download"
import { Material } from "../interfaces"
import { translateEn } from "../shared/convert-text"
import { convertEvent } from './convert-event'
import { convertLootTable } from './convert-loot-table'
import { buildMaterialSearchString } from './search'
import { getQuestName } from './source'
import { convertWorkshop } from './convert-workshop'
import { convertCurrency } from "../vendors/convert-currency"

export async function convertMaterial(material: ApiMaterial): Promise<Material> {
  let sellQuantity = 0
  let sellCurrency = "         "
  let price = {}

  const textsellcostoverride = material.sellcostoverride
  
  for (const item of Object.values<any>(textsellcostoverride)) {
   
    sellQuantity = item.quantity
    sellCurrency = convertCurrency(item.type)  
   }  

  let description = await translateEn(material.rollovertextid)
  description += " \n\n 1 Piece Sells for "
  description +=  sellQuantity.toString()
  description += " "
  description +=  sellCurrency.toString()
  description += "s"
  const m: Material = {
    id: material.name,
    name: await translateEn(material.displaynameid, material.name),
    description: description ? description.replace(/<color=1.0 1.0 0.0>(.+?)<\/color>/, "$1") : undefined,
    icon: await downloadIcon(`Art/${material.icon}`, "materials"),
    rarity: material.rarity.substr("cRarity".length).toLowerCase(),
    event: convertEvent(material),
    lootTable: convertLootTable(material),
    quest: getQuestName(material),
    workshop: convertWorkshop(material)
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
