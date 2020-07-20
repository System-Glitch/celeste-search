import { Advisor } from "../../api-types"

const skirmish = [
  "darius_e_iv",
  "agamemnon_e_iv",
  "minos_e_iii",
  "ahapitep_e_iii",
  "batoshipip_e_iii",
  "elder_e_ii",
  "narmer_e_ii",
  "odysseus_e_i"
]

const crete = [
  "weylin_c_i",
  "weylin_u_i",
  "weylin_r_i",
  "weylin_e_i",
  "conall_c_ii",
  "conall_u_ii",
  "conall_r_ii",
  "conall_e_ii",
  "cyric_c_iv",
  "cyric_u_iv",
  "cyric_r_iv",
  "cyric_e_iv"
]

export function convertLootTable(advisor: Advisor): string | undefined {
  if (crete.includes(advisor.name)) {
    return "crete"
  }
  if (skirmish.includes(advisor.name)) {
    return "skirmish hall"
  }
}
