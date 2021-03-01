import chalk from "chalk"

import { Advisor } from "../interfaces"

export function includeAdvisor(advisor: Advisor) {
  if (!advisor.age) {
    console.log(chalk.yellow(`SKIPPED - Advisor has no age:`), advisor)
    return false
  }
  if (advisor.civilization === "roman") {
    console.log(chalk.yellow(`SKIPPED Roman Advisor:`), advisor.id)
    return false
  }
  return true
}
