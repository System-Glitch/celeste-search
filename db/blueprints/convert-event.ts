import { Blueprint } from "../../api-types"

import { Item } from "../interfaces"

import {
  isSummer2020Blueprint, isHalloween2019Blueprint, isWinter2019Blueprint,
} from "./source"

export function convertEvent(blueprint: Blueprint): Item["event"] | undefined {
  if (isSummer2020Blueprint(blueprint)) {
    return {
      name: "summer",
      year: 2020,
    }
  }
  if (isHalloween2019Blueprint(blueprint)) {
    return {
      name: "halloween",
      year: 2019,
    }
  }
  if (isWinter2019Blueprint(blueprint)) {
    return {
      name: "winter",
      year: 2019,
    }
  }
}
