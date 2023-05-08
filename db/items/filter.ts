import chalk from "chalk"

import { Item } from "../interfaces"

export function includeItem(item: Item) {
  if (!item.levels.length) {
    console.log(chalk.yellow(`SKIPPED - Item with no levels are not included (could be old or replaced item):`, `${item.name} (${item.id})`))
    return false
  }
  return true
}
