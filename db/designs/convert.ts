import { Design as ApiDesign } from "../../api-types"

import { API, downloadIcon } from "../download"
import { Design } from "../interfaces"
import { convertRecipeSchool } from "../items/convert-recipe-school"
import { translateEn } from "../shared/convert-text"
import { findVendors } from "../vendors"

import { convertMaterials } from "./convert-materials"
import { buildSearchString } from "./search"
import { convertLootTable } from './convert-loot-table'

export async function convertDesign(design: ApiDesign): Promise<Design> {
  const allTraits = await API.getTraits()
  const allMats = await API.getMaterials()

  let description = await translateEn(design.rollovertextid, "")
  const icon = await downloadIcon(`Art/${design.icon}`, "designs")
  const rarity = design.rarity.replace("cRarity", "").toLowerCase()
  const materials = convertMaterials(design)
  const type = Object.keys(design.output)[0]
  const school = description.replace(/Use: Grants an? (.+?) the ability to create .+/, "$1")
    .replace(/\n \n\(<color=1.0 1.0 0.0>(.+?)<\/color>\)/, "")

  const output = design.output[type]
  const outputId = output.id
  const outputDetails: any = allTraits[outputId] || allMats[outputId]
  const outputName = await translateEn(outputDetails.displaynameid, outputDetails.name)
  const outputIcon = await downloadIcon(`Art/${outputDetails.icon}`, "designs")

  let civilization
  const match = description.match(/\n \n\(<color=1.0 1.0 0.0>(.+?)<\/color>\)$/)
  if (match && match.length > 1) {
    description = description.replace(/\n \n\(<color=1.0 1.0 0.0>(.+?)<\/color>\)/, "")
    const civMatch = match[1].match(/Exclusive to the (.+?) civilization/)
    if (civMatch && civMatch.length > 1) {
      civilization = civMatch[1]
    }
  }

  const result: Design = {
    id: design.name,
    description,
    icon,
    rarity,
    school,
    materials,
    vendors: undefined,
    civilization,
    marketplace: [],
    outputId,
    outputName,
    outputIcon,
    search: "",
    lootTable: convertLootTable(design)
  }

  result.vendors = await findVendors(result.id)
  result.search = await buildSearchString(result, design)
  result.marketplace.push({ id: result.id })

  return result
}
