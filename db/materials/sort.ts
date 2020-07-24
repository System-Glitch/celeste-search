import { Material, RARITIES } from "../interfaces"

export function compareMaterials(a: Material, b: Material) {
    if (a.rarity !== b.rarity) {
        const aRarityIndex = RARITIES.indexOf(a.rarity)
        const bRarityIndex = RARITIES.indexOf(b.rarity)
        return aRarityIndex - bRarityIndex
    }

    return a.name.localeCompare(b.name)
}
