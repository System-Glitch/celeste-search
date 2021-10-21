import { Consumable } from "../../api-types"


export function isSummer2020Consumable(consumable: Consumable) {
  return consumable.event === "Summer"
}

export function isHalloween2019Consumable(consumable: Consumable) {
  return consumable.event === "Halloween"
}

export function isWinter2019Consumable(consumable: Consumable) {
  return consumable.event === "Winter"
}

export function isEventReward(consumable: Consumable) {
  return isSummer2020Consumable(consumable)
    || isHalloween2019Consumable(consumable)
    || isWinter2019Consumable(consumable)
}
