
/*
{
    name: 'powerspawnheadhunter_e',
    type: 'TempUnit',
    displaynameid: 59683,
    rolloverid: 59687,
    icon: 'art\\ui\\abilities\\ability_spyglass',
    minimapeventtime: { sendalertto: 'ally', text: 1 },
    activetime: -1,
    tempunitmodify: { attachmodel: 'Effects/GamePlay/Consumables/GrantUnitPoof.xml' },
    createunit: [
      {
        quantity: 2,
        radius: 0,
        delay: 0,
        text: 'Con_Cav_HeadHunter_E',
        minradius: 9,
        maxradius: 15,
        forceattc: '',
        pattern: null,
        buildrate: null,
        abstractunit: null,
        forceselectiononfirstunit: null
      }
    ],
    placement: { forceonmap: 0, text: 'forcedAtTC' },
    rangeindicatorprotoid: { radius: 12, indicatorcount: 16, speed: 0.6, text: 'PowerRanger' },
    allowduringnorush: 1,
    showtimer: 'true',
    cooldowntime: 300,
    cooldownstackingclass: 2,
    startsoundset: 'UI_Cons_Unit',
    endsoundset: 'UI_Cons_End',
    killunitsonshutdown: '1',
    requiredage: 2,
    untargeted: 1,
    placementprotounitid: null,
    unitmodify: [],
    powerplayerrelation: null,
    radius: 0,
    abstractattacktargettype: [],
    expandcheckplacementhull: null,
    cost: null,
    tech: null,
    attachmodel: null,
    showinpartyinterface: null,
    unitaction: null,
    toggle: null,
    stacks: null,
    resource: 0
  }
  */

  export interface Power {
    name: string,
    type: string,
    displaynameid: number,
    rolloverid: number,
    icon: string,
    minimapeventtime: 
        { 
            sendalertto: string,
            text: number 
        },
    activetime: -1,
    tempunitmodify: 
        {
             attachmodel: string 
        },
    createunit: [
      {
        quantity: number|null,
        radius: number|null,
        delay: number|null,
        text: string|null,
        minradius: number|null,
        maxradius: number|null,
        forceattc: string|null,
        pattern: string|null,
        buildrate: string|null,
        abstractunit: string|null,
        forceselectiononfirstunit: string|null
      }
    ],
    placement: { forceonmap: number, text: string } | null,
    rangeindicatorprotoid: { radius: number, indicatorcount: number, speed: number, text: string },
    allowduringnorush: number,
    showtimer: string,
    cooldowntime: number,
    cooldownstackingclass: number,
    startsoundset: string,
    endsoundset: string,
    killunitsonshutdown: string,
    requiredage: number,
    untargeted: number,
    placementprotounitid: null,
    unitmodify: [],
    powerplayerrelation: null,
    radius: 0,
    abstractattacktargettype: [],
    expandcheckplacementhull: null,
    cost: null,
    tech: null,
    attachmodel: null,
    showinpartyinterface: null,
    unitaction: null,
    toggle: null,
    stacks: null,
    resource: number
  }
  
export interface Powers {
    timestamp: string
    data: {
      [index: string]: Power,
    }
  }
  