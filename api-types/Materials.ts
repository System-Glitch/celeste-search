/**
 * @example
 * ```
 * {
 *   name: 'WE_IceKingsHeartShard',
 *   icon: 'Celeste\UserInterface\Icons\Materials\MatIconsIceKingsHeartShard_ua',
 *   rollovertextid: 151014,
 *   displaynameid: 151015,
 *   stackable: '',
 *   stacksize: 100,
 *   offertype: 'eOfferNone',
 *   itemlevel: 0,
 *   sellable: 'true',
 *   tradeable: 'true',
 *   destroyable: 'true',
 *   sellcostoverride: { capitalresource: { quantity: 50, type: 'cCapResCoin' } },
 *   rarity: 'cRarityRare',
 *   budgetcost: 1,
 *   contentpack: 1,
 *   event: 'Winter',
 * }
 * ```
 */
export interface Material {
  name: string
  icon: string
  rollovertextid: number
  displaynameid: number
  stackable: "" | null
  stacksize: 1 | 10 | 100 | 250 | 500 | 1000 | 5000
  offertype: "eOfferNone"
  itemlevel: 0
  sellable: "true" | "false" // FIXME should be `boolean`
  tradeable: "true" | "false" // FIXME should be `boolean`
  destroyable: "true" | "false" // FIXME should be `boolean`
  sellcostoverride: { capitalresource: { quantity: number, type: string } }
  rarity: "cRarityCommon" | "cRarityUncommon" | "cRarityRare" | "cRarityEpic" | "cRarityJunk"
  budgetcost: 1 | 2 | 4 | 5 | 10
  contentpack: 1 | 22
  event?: "Halloween" | "Winter"
}

export interface Materials {
  timestamp: string
  data: {
    [index: string]: Material,
  }
}
