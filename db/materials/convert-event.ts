import { Material } from "../../api-types"

import { Item } from "../interfaces"

import {
  isSummer2019Material,
  isHalloween2019Material
} from "./source"

export function convertEvent(material: Material): Item["event"] | undefined {
  if (isSummer2019Material(material)) {
    return {
      name: "summer",
      year: 2019,
    }
  }
  if (isHalloween2019Material(material)) {
    return {
      name: "halloween",
      year: 2019,
    }
  }
}
