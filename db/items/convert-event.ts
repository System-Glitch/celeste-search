import { Trait } from "../../api-types"

import { Item } from "../interfaces"

import {
  isHalloween2018Reward,
  isWinter2018Reward,
  //isWinterReward,

  isSummer2019Reward,
  isHalloween2019Reward,
  isWinter2019Reward,

  isSummer2020Reward,
  isHalloween2020Reward,
  isWinter2020Reward,

  isSummer2021Reward,
  isHalloween2021Reward,
  isWinter2021Reward,

  isSummer2022Reward,
} from "./source"

export function convertEvent(trait: Trait): Item["event"] | undefined {
  if (isHalloween2018Reward(trait)) {
    return {
      name: "halloween",
      year: 2018,
    }
  }
  /*
  if (isWinterReward(trait)) {
    return {
      name: "winter",
      year: 0,
    }
  }
  */ 
  if (isWinter2018Reward(trait)) {
    return {
      name: "winter",
      year: 2018,
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
  if (isWinter2019Reward(trait)) {
    return {
      name: "winter",
      year: 2019,
    }
  }

  if (isSummer2020Reward(trait)) {
    return {
      name: "summer",
      year: 2020,
    }
  }
  if (isHalloween2020Reward(trait)) {
    return {
      name: "halloween",
      year: 2020,
    }
  }
  if (isWinter2020Reward(trait)) {
    return {
      name: "winter",
      year: 2020,
    }
  }

  if (isSummer2021Reward(trait)) {
    return {
      name: "summer",
      year: 2021,
    }
  }
  if (isHalloween2021Reward(trait)) {
    return {
      name: "halloween",
      year: 2021,
    }
  }
  if (isWinter2021Reward(trait)) {
    return {
      name: "winter",
      year: 2021,
    }
  }

  if (isSummer2022Reward(trait)) {
    return {
      name: "summer",
      year: 2022,
    }
  }
}
