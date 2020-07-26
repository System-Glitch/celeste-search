import { Material } from "../../api-types"

import { quests } from "./quests"

export function isQuestReward(material: Material) {
  return Object.keys(quests).includes(material.name)
}

export function getQuestName(material: Material) {
  return quests[material.name]
}

export function isSummer2019Material(material: Material) {
  return material.name.startsWith("se_")
}

export function isHalloween2019Material(material: Material) {
  return material.name.startsWith("he_")
}

export function isWinter2019Material(material: Material) {
  return material.name.startsWith("we_")
}

export function isEventReward(material: Material) {
  return isSummer2019Material(material)
    || isHalloween2019Material(material)
    || isWinter2019Material(material)
}
