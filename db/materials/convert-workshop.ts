import { Material } from "../../api-types"

const logger = [
  "4guayacanplank",
  "3ebonyplank",
  "2oakplank",
  "pineplank"
]

const mason = [
  "4obsidianblock",
  "3concreteblock",
  "2graniteblock",
  "stoneblock"
]

const skinner = [
  "animalhide",
  "2leather",
  "3fineleather",
  "4arcticfoxfur"
]

const smelter = [
  "4puregoldingot",
  "3ironingot",
  "2bronzeingot",
  "copperingot"
]

const farmer = [
  "grain",
  "2oliveoil",
  "3spice",
  "4whitehoney"
]

const gem = [
  "2garnet",
  "3gemstone",
  "4flawlessdiamond"
]

const toolmaker = [
  "2worktool",
  "3precisiontool",
  "4archimedestool"
]

const alchemist = [
  "2resin",
  "3bitumenglue",
  "4philosopherstone"
]

const weaver = [
  "2wool",
  "3cottoncloth",
  "4silkcloth"
]

const scrivener = [
  "2lorescroll",
  "3vellumscript",
  "4illuminatedcodex"
]

export function convertWorkshop(material: Material): string | undefined {
  if (logger.includes(material.name)) {
    return "logger"
  }
  if (mason.includes(material.name)) {
    return "mason"
  }
  if (skinner.includes(material.name)) {
    return "skinner"
  }
  if (smelter.includes(material.name)) {
    return "smelter"
  }
  if (farmer.includes(material.name)) {
    return "farmer"
  }
  if (gem.includes(material.name)) {
    return "gem cutter"
  }
  if (toolmaker.includes(material.name)) {
    return "toolmaker"
  }
  if (alchemist.includes(material.name)) {
    return "alchemist"
  }
  if (weaver.includes(material.name)) {
    return "weaver"
  }
  if (scrivener.includes(material.name)) {
    return "scrivener"
  }
}
