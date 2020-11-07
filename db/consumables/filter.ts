import { Consumable } from "../interfaces/Consumable"

export function includeConsumable(consumable: Consumable) {
  return !consumable.id.startsWith("testserverconsumable")
}
