import { Design } from "../../api-types"

const crete = [
  "createconstructionarmorbldg_ea01",
  "createreligionarmorclth_ea01",
  "createhorsebreedingarmorlgt_ra01",
  "createconstructiongear_bldg_ra01",
  "createreligionarmorclth_ua01",
  "createconstructionarmorbldg_ua01",
  "createconstructiongear_bldg_ua01",
  "createengineeringarmorplt_ua02"
]

export function convertLootTable(design: Design): string | undefined {
  if (crete.includes(design.name)) {
    return "crete"
  }
}
