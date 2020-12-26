import { Trait } from "../../api-types"

import { quests } from "./quests"

const cyprusLegendaries = [
  "arrowoh_l001",
  "bow1h_l001",
  "staff2h_l002",
  "sword1h_l001",
  "shield1h_l001",
  "armorlgt_l001",
  "spear2h_l002_sr",
  "armormed_l002",
  "gear_l001",
  "armorplt_l001",
]

const allianceCouncilOfImhotep = [
  "armorbldg_lc01",
  "fishingnet1h_lc01",
  "gear_prst_lc01",
]

const allianceDelianLeague = [
  "tool1h_lc01",
  "gear_bldg_lc01",
  "armormed_lc01",
]

const allianceLegionOfCarthage = [
  "armorplt_lc01",
  "arrowoh_lc01",
  "gear_lc01",
]

const rhakotis = [
  "bow1h_bom",
  "armorclth_rot",
  "sword1h_sck",
  "ballista2h_ssa"
]

const questRewards = [
  "spears2h_als",
  "bow1h_uasb",
  "arrowoh_ssa",
  "bow1h_ffb"
]

const eventHalloween2018 = [
  "sword1h_r005_leg",
]

const eventHalloween2019 = [
  "spear1h_halloween2019",
  "spear2h_halloween2019",
  "gear_vill_halloween2019"
]

const eventHalloween2020 = [
  "gear_prst_halloween2020",
  "axe2h_halloween2020"
]

const eventWinter = [
  "arrows_iceking_leg",
  "axe2h_iceking_leg",
  "staff2h_iceking_leg",
  "sling2h_iceking_leg",
  "gear_iceking_leg",
  "armorlgt_iceking_leg"
]

const eventSummer2019 = [
  "se2019_gear_bldg",
  "se2019_armormed",
  "se2019_shield1h",
  "se2019_gear_prst",
  "se2019_spear1h",
  "se2019_scepter2h"
]

const persianStartingGear = [
  "armorbldg_u201", "armorclth_r201", "armorlgt_r201", "armormed_r201",
  "armorplt_u201", "arrowoh_u201_vr", "ballista2h_u201_vr", "bow1h_u201",
  "fishingnet1h_u201", "javalin2h_u201", "ramhead2h_u201", "scepter2h_u201",
  "shield1h_u201", "spear1h_u201", "spear2h_u201", "sword1h_u201", "tool1h_u201",
]

const babylonianStartingGear = [
  "armorbldg_u201", "armorclth_r201", "armorlgt_r201", "armormed_r201",
  "armorplt_u201", "arrowoh_u201_vr", "ballista2h_u201_vr", "bow1h_u201",
  "fishingnet1h_u201", "javalin2h_u201", "ramhead2h_u201", "scepter2h_u201",
  "shield1h_u201", "sling2h_u201", "spear1h_u201", "spear2h_u201",
  "sword1h_u201", "tool1h_u201",
]

const norseStartingGear = [
  "armorbldg_u201", "armorclth_r201", "armorlgt_r201", "armormed_r201",
  "armorplt_u201", "arrowoh_u201_vr", "axe2h_u201", "ballista2h_u201_vr",
  "bow1h_u201", "firethrower2h_u201", "fishingnet1h_u201", "javalin2h_u201",
  "ramhead2h_u201", "scepter2h_u201", "shield1h_u201", "spear1h_u201",
  "spear2h_u201", "sword1h_u201", "tool1h_u201",
]

/**
 * Starting at this ID, all items were created by the celeste team.
 */
const celesteLegendariesStart = 2259

export function isSoldByCyprus(trait: Trait) {
  return cyprusLegendaries.includes(trait.name)
}

export function isSoldByCouncilOfImhotep(trait: Trait) {
  return allianceCouncilOfImhotep.includes(trait.name)
}

export function isSoldByDelianLeague(trait: Trait) {
  return allianceDelianLeague.includes(trait.name)
}

export function isSoldByLegionOfCarthage(trait: Trait) {
  return allianceLegionOfCarthage.includes(trait.name)
}

export function isSoldByRhakotis(trait: Trait) {
  return rhakotis.includes(trait.name)
}

export function isSoldForCoin(trait: Trait) {
  return isSoldByCyprus(trait)
    || isSoldByCouncilOfImhotep(trait)
    || isSoldByDelianLeague(trait)
    || isSoldByLegionOfCarthage(trait)
    || isSoldByRhakotis(trait)
}

export function isQuestReward(trait: Trait) {
  return questRewards.includes(trait.name)
}

export function getQuestName(trait: Trait) {
  return quests[trait.name]
}

export function isHalloween2018Reward(trait: Trait) {
  return eventHalloween2018.includes(trait.name)
}

export function isWinterReward(trait: Trait) {
  return eventWinter.includes(trait.name)
}

export function isSummer2019Reward(trait: Trait) {
  return eventSummer2019.includes(trait.name)
}

export function isSummer2020Reward(trait: Trait) {
  return trait.name.startsWith("se2020_")
}

export function isWinter2020Reward(trait: Trait) {
  return trait.name.endsWith("_winter2020")
}

export function isHalloween2019Reward(trait: Trait) {
  return eventHalloween2019.includes(trait.name)
}

export function isHalloween2020Reward(trait: Trait) {
  return eventHalloween2020.includes(trait.name)
}

export function isEventReward(trait: Trait) {
  return isHalloween2018Reward(trait)
    || isWinterReward(trait)
    || isSummer2019Reward(trait)
    || isHalloween2019Reward(trait)
    || isSummer2020Reward(trait)
    || isWinter2020Reward(trait)
    || isHalloween2020Reward(trait)
}

/**
 * Only legendaries are reforgeable, so we only need to look
 * at a few items.
 */
export function isReforgeable(trait: Trait) {
  return trait.rarity === "legendary"
    && !isSoldForCoin(trait)
    && !isQuestReward(trait)
    && !isEventReward(trait)
}

export function isClassicItem(trait: Trait) {
  return trait.dbid < celesteLegendariesStart
}

export function isPersianStartingGear(trait: Trait) {
  return persianStartingGear.includes(trait.name)
}

export function isBabylonianStartingGear(trait: Trait) {
  return babylonianStartingGear.includes(trait.name)
}

export function isNorseStartingGear(trait: Trait) {
  return norseStartingGear.includes(trait.name)
}

export function isStartingGear(trait: Trait) {
  return isPersianStartingGear(trait)
    || isBabylonianStartingGear(trait)
    || isNorseStartingGear(trait)
}
