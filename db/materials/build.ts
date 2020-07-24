import { uniq } from "lodash"

import { API, downloadIcon } from "../download"
import { Blueprint, Design, Item, Materials, Material } from "../interfaces"

import { convertMaterial } from "./convert-material"
import { compareMaterials } from "./sort"
import { currencies } from "./currencies"
import { buildItemSearchString } from "./search"
import { includeMaterial } from "./filter"

export async function buildMaterials(): Promise<Material[]> {
  const materials = await API.getMaterials()

  const conversions = Object.values(materials)
    .map(convertMaterial)

  const results = await Promise.all(conversions)

  // TODO reward from quests or loot table
  return results
    .filter(includeMaterial)
    .map(m => {
      m.search = buildItemSearchString(m)
      return m
    })
    .sort(compareMaterials)
}

export async function buildSharedMaterials(
  items: Item[],
  blueprints: Blueprint[],
  designs: Design[],
): Promise<Materials> {

  const itemMats = items.reduce((ids, item) => {
    return ids.concat(item.recipe ? item.recipe.materials.map(mat => mat.id) : [])
  }, [] as string[])
  const blueprintMats = blueprints.reduce((ids, blueprint) => {
    return ids.concat((blueprint.materials || []).map(mat => mat.id))
  }, [] as string[])
  const designMats = designs.reduce((ids, design) => {
    return ids.concat((design.materials || []).map(mat => mat.id))
  }, [] as string[])

  const allUsedMaterials = uniq([
    ...itemMats,
    ...blueprintMats,
    ...designMats,
  ])

  const materials = await API.getMaterials()
  const result: Materials = {}

  for (const material of Object.values(materials)) {
    if (allUsedMaterials.includes(material.name)) {
      result[material.name] = await convertMaterial(material)
      result[material.name].id = undefined
    }
  }

  await Promise.all(currencies.map(c => {
    return downloadIcon(c.resource, "materials", c.iconName)
  }))

  return result
}
