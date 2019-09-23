
/**
 * @example
 * ```
 * {
 *   target: { type: 'Player' },
 *   type: 'Data',
 *   bonus: 'true',
 *   amount: 1.0559,
 *   scaling: 0.0104,
 *   subtype: 'Hitpoints',
 *   visible: 'true',
 *   relativity: 'Percent',
 * }
 * ```
 */
export interface TraitEffect {
  target: {
    type: string,
  }
  type: string
  bonus: string
  amount: number
  scaling: number
  subtype: string
  visible: string
  relativity: string
  action?: string
  damagetype?: string
  unittype?: string
  resource?: string
}

/**
 * @example
 * ```
 * {
 *   name: 'Sling2H_IceKing_LEG',
 *   dbid: 2301,
 *   traittype: 'Sling',
 *   rarity: 'legendary',
 *   icon: 'Celeste\\UserInterface\\Icons\\Equipment\\Generic\\Slings\\Sling_IceKing_ua',
 *   rollovertextid: 55543,
 *   displaynameid: 100117,
 *   offertype: 'eOfferCeleste1',
 *   visualfactor: [ { type: 'Weapon', factor: 90 } ],
 *   itemlevels: [ 43 ],
 *   sellable: '1',
 *   tradeable: '1',
 *   destroyable: '1',
 *   canbestoredingearhall: '0',
 *   effects: { effect: [ [Object], [Object], [Object] ] },
 *   equipsoundset: 'UI_Cons_Spc_Tiger',
 *   event: 'Winter',
 * }
 * ```
 */
export interface Trait {
  name: string
  dbid: number
  traittype:
  | "ArmorBuilding" | "ArmorCloth" | "ArmorLgt" | "ArmorMed" | "ArmorPlt" | "Arrows" | "BallistaArms" | "BellyBows"
  | "Bows" | "FireThrowers" | "FishingNet" | "Gear" | "GearBldg" | "GearBoat" | "GearVill" | "GearPriest" | "GearSiege"
  | "Javalins" | "Merchant" | "RamHeads" | "Spears1H" | "Spears2H" | "Staffs2H" | "Shields" | "Swords1H" | "Tools"
  | "Clubs2H" | "ScoutSpecial1H" | "GreatAxe" | "Sling" | "Scepter" | "Torc" | "Warpaint" | "War Horn" | "VanityShield"
  | "VanityWeapon" | "VanityHelm"
  rarity: "uncommon" | "rare" | "epic" | "legendary" | "common"
  icon: string
  rollovertextid: number
  displaynameid: number
  offertype: "eOfferNone" | "eOfferCivMatching" | "eOfferCeleste1"
  visualfactor: Array<{ type: string, factor: number }>
  itemlevels: number[]
  sellable: "0" | "1"
  tradeable: "0" | "1"
  destroyable: "1"
  canbestoredingearhall: "0" | "1"
  effects?: {
    effect: TraitEffect[],
  }
  equipsoundset?:
  | "UI_Cons_Spc_GourdMan" | "UI_Cons_Spc_ComedyArrow" | "UI_Cons_Spc_Samurai" | "UI_Cons_Spc_AnimalLover"
  | "UI_Cons_Spc_Tiger" | "UI_Cons_Spc_RainbowMagic" | "UI_Cons_Spc_Tiki" | "UI_Cons_Spc_Prehistoric"
  | "UI_Cons_Spc_Construction" | "UI_Cons_Spc_Heroic" | "UI_Cons_Spc_DragonSlayer" | "UI_Cons_Spc_LunchKnight"
  | "UI_Cons_Spc_Pirate" | "UI_Cons_Spc_Wizard"
  event?: "Halloween" | "Winter" | "Summer"
}

export interface Traits {
  timestamp: string
  data: {
    [index: string]: Trait,
  }
}
