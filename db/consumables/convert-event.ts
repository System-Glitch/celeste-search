import { Consumable } from "../../api-types"

import { Item } from "../interfaces"

import {
  isSummer2020Consumable, isHalloween2019Consumable, isWinter2019Consumable,
} from "./source"

export function convertEvent(consumable: Consumable): Item["event"] | undefined {
  if (isSummer2020Consumable(consumable)) {
    return {
      name: "summer",
      year: 2020,
    }
  }
  if (isHalloween2019Consumable(consumable)) {
    return {
      name: "halloween",
      year: 2019,
    }
  }
  if (isWinter2019Consumable(consumable)) {
    return {
      name: "winter",
      year: 2019,
    }
  }
}
