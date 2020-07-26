import { Blueprint } from "../../api-types"


export function isSummer2020Blueprint(blueprint: Blueprint) {
  return blueprint.event === "Summer"
}

export function isHalloween2019Blueprint(blueprint: Blueprint) {
  return blueprint.event === "Halloween"
}

export function isWinter2019Blueprint(blueprint: Blueprint) {
  return blueprint.event === "Winter"
}

export function isEventReward(blueprint: Blueprint) {
  return isSummer2020Blueprint(blueprint)
    || isHalloween2019Blueprint(blueprint)
    || isWinter2019Blueprint(blueprint)
}
