import { Advisor } from "./Advisor"
import { Blueprint } from "./Blueprint"
import { Consumable } from "./Consumable"
import { Design } from "./Design"
import { Item } from "./Item"
import { Material } from "./Material"

export type Entity = Item | Advisor | Blueprint | Design | Consumable | Material
