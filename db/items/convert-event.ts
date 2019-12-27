import { Trait } from "../../api-types"

import { Item } from "../interfaces"

import {
  isHalloween2018Reward,
  isWinterReward,
  isSummer2019Reward,
  isHalloween2019Reward
} from "./source"

export function convertEvent(trait: Trait): Item["event"] | undefined {
  if (isHalloween2018Reward(trait)) {
    return {
      name: "halloween",
      year: 2018,
    }
  }
  if (isWinterReward(trait)) {
    return {
      name: "winter",
      year: 0,
    }
  }
  if (isSummer2019Reward(trait)) {
    return {
      name: "summer",
      year: 2019,
    }
  }
  if (isHalloween2019Reward(trait)) {
    return {
      name: "halloween",
      year: 2019,
    }
  }
}
