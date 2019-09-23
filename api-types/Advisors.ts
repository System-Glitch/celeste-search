/**
 * @example
 * ```
 * {
 *   name: 'Sesostris_L_IV',
 *   groupid: 121,
 *   age: 3,
 *   rarity: 'legendary',
 *   icon: 'Celeste\UserInterface\Icons\Advisors\AdvisorSesostris5_db',
 *   icontexturecoords: '0 0 1 1.0',
 *   rollovertextid: '',
 *   displaynameid: 150090,
 *   displaydescriptionid: 150091,
 *   sellcostoverride: { capitalresource: { quantity: 900, type: 'cCapResCoin' } },
 *   minlevel: 40,
 *   itemlevel: 40,
 *   offertype: 'eOfferCeleste1',
 *   techs: { tech: 'Advisor_Sesostris_L' },
 *   sellable: 'true',
 *   tradeable: 'true',
 *   destroyable: 'true',
 *   civilization: 'Egypt',
 *   shortdescriptionid: '61615',
 *   specialborder: 'true',
 * }
 * ```
 */
export interface Advisor {
  name: string
  groupid: number
  age: 0 | 1 | 2 | 3
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary"
  icon: string
  icontexturecoords: "0 0 1 1.0"
  rollovertextid: ""
  displaynameid: number
  displaydescriptionid: number
  sellcostoverride: { capitalresource: { quantity: number, type: string } }
  minlevel: 5 | 7 | 15 | 40
  itemlevel: 5 | 7 | 15 | 40
  offertype: "eOfferNone" | "eOfferCeleste1"
  techs: { tech: string }
  sellable: "true" | "false" // FIXME should be `boolean`
  tradeable: "true" | "false" // FIXME should be `boolean`
  destroyable: "true" | "false" // FIXME should be `boolean`
  civilization?: "Egypt" | "Greek" | "Celt" | "Persia" | "Norse" | "Babylonian"
  shortdescriptionid?: string // FIXME should be `number`
  specialborder?: "true" // FIXME should be `boolean`
}

export interface Advisors {
  timestamp: string
  data: {
    [index: string]: Advisor,
  }
}
