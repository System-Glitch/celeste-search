/**
 * @example
 * ```
 * {
 *  "tradeable": true,
 *  "destroyable": true,
 *  "sellcostoverride": {
 *    "capitalresource": {
 *      "type": "cCapResCoin",
 *      "quantity": 5
 *    }
 *  },
 *  "name": "ConsumableSpy_C",
 *  "icon": "UserInterface\\Icons\\Consumable\\ConSpy1_ua",
 *  "rollovertextid": 52902,
 *  "displaynameid": 52901,
 *  "stackable": "",
 *  "stacksize": 20,
 *  "offertype": "eOfferNone",
 *  "itemlevel": 3,
 *  "sellable": true,
 *  "rarity": "cRarityCommon",
 *  "power": "PowerLOS_C",
 *  "civmatchingtype": "eCivMatchingTypeAny",
 *  "usable": [],
 *  "alliance": []
 * } 
 * ```
 */
export interface Consumable {
  name: string
  rarity: "cRarityCommon" | "cRarityUncommon" | "cRarityRare" | "cRarityEpic" | "cRarityLegendary"
  icon: string
  rollovertextid: number
  displaynameid: number
  sellcostoverride: { capitalresource: { quantity: number, type: string } }
  itemlevel: 3
  offertype: "eOfferNone" | "eOfferCeleste1"
  sellable: boolean
  tradeable: boolean
  destroyable: boolean
  stackable: string
  stacksize: number
  power: string
  civmatchingtype: string
  usable: []
  alliance: []
}

export interface Consumables {
  timestamp: string
  data: {
    [index: string]: Consumable,
  }
}
