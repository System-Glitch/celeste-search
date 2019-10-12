import { Consumable } from "../../interfaces"

export const consumable: Consumable = {
  id: "consumable_id",
  name: "name",
  rarities: {
    common: {
      id: "powernuclearconsumable4",
      icon: "BQtEUqjU",
      description: "description"
    }
  },
  vendors: [
    {
      id: "gn_Cap_LootStore06",
      name: "name",
      location: "location",
      level: 0,
      currency: "empire",
      price: 50,
      rarity: "common",
      rotation: "classic",
    },
  ],
  civilization: undefined,
  marketplace: [
    {
      id: "alexander_l_iv",
      rarity: "legendary",
      level: 40,
    },
  ],
  search: "search",
}
