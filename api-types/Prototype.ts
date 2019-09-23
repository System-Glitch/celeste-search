export interface ArmorType {
  type: string
  value: number
}

export type ContainType =
  | "AbstractArcher"
  | "AbstractCavalry"
  | "AbstractHandCavalry"
  | "AbstractInfantry"
  | "AbstractPriest"
  | "AbstractRangedCavalry"
  | "AbstractTransportable"
  | "AbstractVillager"
  | "UnitTypePriest3"
  | "UnitTypeVillager1"

export type TraitType =
  | "Bows" | "Clubs2H" | "Tools" | "Spears2H" | "Spears1H" | "Swords1H" | "Javalins" | "BallistaArms"
  | "RamHeads" | "Merchant" | "FishingNet" | "Staffs2H" | "ConCommonSie" | "ConCommonCav" | "ConEpicInf"
  | "Scepter" | "ConCommonInf" | "BellyBows" | "FireThrowers" | "ConRareInf" | "ConEpicCav" | "ConRareArc"
  | "Sling" | "GreatAxe" | "ConUncommonArc" | "ConCommonArc" | "ConUncommonInf" | "ConUncommonCav"
  | "ConCommonRes" | "ConEpicArc" | "ConRareCav" | "ConCommonPriest" | "ConUncommonSie" | "ConRareSie"
  | "ConEpicSie" | "ConUncommonPriest" | "ConRarePriest" | "ConEpicPriest" | "ConCommonBldg"
  | "ConUncommonBldg" | "ConRareBldg" | "ConEpicBldg" | "ConUncommonRes" | "ConRareRes" | "ConEpicRes"
  | "ConCommonShip" | "ConUncommonShip" | "ConRareShip" | "ConEpicShip"

export type ProjectileProtoUnitType =
  | "Proj_ArrowFire" | "Proj_SpearVillager" | "Proj_SpearPeltast" | "Proj_Bolt" | "Proj_CatRock"
  | "Proj_BoltClusterFire" | "Proj_Arrow" | "Proj_CatRock_Giant" | "Proj_SpearChef"
  | "Proj_BoltSmallFire" | "Proj_Firepot" | "Proj_BoltCluster" | "Proj_SlingRock" | "Proj_SpearGaesatae"
  | "Proj_SpearCelticWarChariot" | "Proj_Hammer" | "Proj_TridentArchimedes" | "Proj_Log" | "Proj_Axe"

export type DesignTagType =
  | "TradeRoute" | "Woodscraft" | "HorseBreeding" | "MilitaryCollege" | "Engineering" | "Construction"
  | "Craftsmen" | "[StoneDesigns1]" | "[WoodDesigns1]" | "[MetalDesigns1]" | "[LeatherDesigns1]"
  | "[FarmDesigns1]" | "[GemDesigns1]" | "[ScrollDesigns1]" | "[AlchemyDesigns1]" | "[ClothDesigns1]"
  | "[LoreDesigns1]" | "Religion" | "InkDesigns1" | "[ToolDesigns1]" | "MetalWorking"

/**
 * @example
 * ```
 * {
 *   name: 'Gn_Cap_GingerbreadResident01',
 *   id: 1511,
 *   DBID: 3308,
 *   DisplayNameID: 171509,
 *   EditorNameID: 171510,
 *   ObstructionRadiusX: 3,
 *   ObstructionRadiusZ: 3,
 *   MaxVelocity: 0,
 *   MaxRunVelocity: 0,
 *   MovementType: 'land',
 *   Lifespan: 0,
 *   LOS: 20,
 *   SoundFile: 'Gr_Cap_Resident02',
 *   Decay: { delay: 0.25, duration: 0.15 },
 *   Flag: [ 'CollidesWithProjectiles',
 *     'NonAutoFormedUnit',
 *     'Immoveable',
 *     'NoBloodOnDeath',
 *     'StartsAtFullEfficiency',
 *     'ObscuresUnits',
 *     'Doppled',
 *     'SelectWithObstruction',
 *     'PaintTextureWhenPlacing',
 *     'FlattenGround',
 *     'TileAlignPlacement',
 *     'NotObscuredByUnitsAsFoundation',
 *     'TieAnimTimeToBuildPercent',
 *     'Tracked' ],
 *   VisualScale: -1,
 *   UnitType: [ 'LogicalTypeRamUnitsAutoAttack',
 *     'LogicalTypeHandUnitsAutoAttack',
 *     'LogicalTypeBuildingsNotWalls',
 *     'LogicalTypeRangedUnitsAutoAttack',
 *     'LogicalTypeVillagersAttack',
 *     'LogicalTypeHandUnitsAttack',
 *     'LogicalTypeConvertableBuildings',
 *     'LogicalTypeShipsAndBuildings',
 *     'LogicalTypeRangedUnitsAttack',
 *     'LogicalTypeLandPickerTarget',
 *     'LogicalTypeRamUnitsAttack',
 *     'Building',
 *     'BuildingClass',
 *     'ColonyBuilding',
 *     'CountsTowardEconomicScore',
 *     'ConvertsHerds',
 *     'CapitolBldgAll' ],
 *   InitialHitpoints: 500,
 *   MaxHitpoints: 500,
 *   Bounty: -1,
 *   TurnRate: 0,
 *   ProtoAction: [],
 *   BuildPoints: 5,
 *   BuildingWorkRate: 1,
 *   Armor: [ { type: 'Ranged', value: 0.75 } ],
 *   Contain: [],
 *   RepairPoints: 0,
 *   IdleTimeout: 0,
 *   AllowedHeightVariance: 0,
 *   CorpseDecalTime: -1,
 *   TrainPoints: 0,
 *   AutoAttackRange: 0,
 *   TurnRadius: -1,
 *   AnimFile: 'CivGeneric/Decorations/WinterVanity/GingerbreadResidence/GingerbreadResidence.xml',
 *   ShortRolloverTextID: 171512,
 *   ImpactType: 'Wood',
 *   Icon: 'UserInterface\\Icons\\Buildings\\Residence_ua',
 *   PortraitIcon: 'UserInterface\\Icons\\Buildings\\AvatarResidence_ua',
 *   InitialResource: { resourcetype: 'Wood', quantity: 200 },
 *   ResourceSubType: 'Wood',
 *   MinimapColor: { red: 0.23, blue: 0.1, green: 0.23 },
 *   GathererLimit: 8,
 *   RolloverTextID: 171511,
 *   WanderDistance: 4,
 *   UnitAIType: 'HandCombative',
 *   Event: { Winter:
 *      { name: 'Winter',
 *        AnimFile:
 *         'CivGeneric/Units/Vanity/WinterHoliday/SnowMan_All/Snowman.xml' } },
 *   FormationCategory: 'Body',
 *   PhysicsInfo: 'house',
 *   SelectionPriority: 10,
 *   InitialUnitAIStance: 'Aggressive',
 *   Tactics: 'melee.tactics',
 *   PopulationCapAddition: 5,
 *   PlacementFile: 'CapitalBldg.xml',
 *   AllowedAge: 0,
 *   BuilderLimit: 14,
 *   Command: { Eject: { name: 'Eject', row: 0, page: 10, column: 2 },
 *     TownBell: { name: 'TownBell', row: 0, page: 10, column: 3 },
 *     ReturnToWork: { name: 'ReturnToWork', row: 0, page: 10, column: 3 },
 *     Delete: { name: 'Delete', row: 0, page: 10, column: 4 },
 *     SetGatherPointEconomy:
 *      { name: 'SetGatherPointEconomy', row: 0, page: 10, column: 0 },
 *     SetGatherPointMilitary:
 *      { name: 'SetGatherPointMilitary', row: 0, page: 10, column: 1 } },
 *   UnitLevel: 1,
 *   Trait3: 'ArmorCloth',
 *   Trait4: 'Gear',
 *   Cost: { Wood: { resourcetype: 'Wood', quantity: 300 },
 *     stone: { resourcetype: 'stone', quantity: 700 } },
 *   CarryCapacity: { Food: { resourcetype: 'Food', quantity: 10 },
 *     Wood: { resourcetype: 'Wood', quantity: 10 },
 *     Gold: { resourcetype: 'Gold', quantity: 10 },
 *     stone: { resourcetype: 'stone', quantity: 10 } },
 *   Tech: { TechTower1_Shadow: { name: 'TechTower1_Shadow', row: 0, page: 0, column: 0 },
 *     TechTower2: { name: 'TechTower2', row: 0, page: 0, column: 0 },
 *     TechTower3: { name: 'TechTower3', row: 0, page: 0, column: 0 },
 *     TechTowerS: { name: 'TechTowerS', row: 0, page: 0, column: 0 } },
 *   SocketUnitType: '506',
 *   MinimapIcon: 'UserInterface\\Icons\\MiniMap\\NuggetMinimapIcon_ua',
 *   Trait1: 'ConEpicInf',
 *   Trait2: 'Arrows',
 *   ProjectileProtoUnit: 'Proj_BoltCluster',
 *   BuildLimit: 1,
 *   MaxContained: 20,
 *   InputContext: 'GarrisonAccel',
 *   Train: { UnitTypeUniqueUnit1: { name: 'UnitTypeUniqueUnit1', row: 0, page: 0, column: 0 },
 *     UnitTypeUniqueUnit2: { name: 'UnitTypeUniqueUnit2', row: 0, page: 0, column: 1 } },
 *   PopulationCount: 1,
 *   VanTrait3: 'VanityHelm',
 *   VanTrait1: 'VanityWeapon',
 *   VanTrait2: 'VanityShield',
 *   HeightBob: { period: 2, magnitude: 1 },
 *   DesignTag: 'TradeRoute',
 *   DeathMessage: "You'll never take the Badari lands!",
 *   Trait5: 'Warpaint',
 * ```
 * }
 */
export interface Prototype {
  name: string
  id: number
  DBID: number
  DisplayNameID?: number
  EditorNameID?: number
  ObstructionRadiusX: number
  ObstructionRadiusZ: number
  MaxVelocity: number
  MaxRunVelocity: number
  MovementType?: "air" | "land" | "water"
  Lifespan: 0 | 3 | 4 | 5 | 8 | 10 | 12 | 13 | 15 | 17 | 20 | 30
  LOS: number
  SoundFile?: string
  Decay?: { delay: 0.25, duration: 0.15 }
  Flag: any
  VisualScale: number
  UnitType: any
  InitialHitpoints: number
  MaxHitpoints: number
  Bounty: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 12 | 15 | 20 | 25 | 120 | -1 | 0.5 | 0.25
  TurnRate: 0 | 1 | 2 | 3 | 5 | 6 | 8 | 10 | 18 | 20 | 25 | 30 | 0.01 | 0.1
  ProtoAction: any[]
  BuildPoints: 0 | 3 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 60 | 100 | 120 | 180 | 200 | 600 | 1800 | 2700 | 5400 | -1
  BuildingWorkRate: 0 | 1
  Armor: ArmorType[]
  Contain: ContainType[]
  RepairPoints: 0 | 10 | 30
  IdleTimeout: 0 | 5
  AllowedHeightVariance: 0 | 4
  CorpseDecalTime: 0 | -1
  TrainPoints: number
  AutoAttackRange: 0 | 1 | 5 | 16 | 20 | 30
  TurnRadius: 0 | 5 | 7 | -1
  AnimFile?: string
  ShortRolloverTextID?: number
  ImpactType?: "Wood" | "Flesh" | "Stone" | "Animal"
  Icon?: string
  PortraitIcon?: string
  InitialResource?: { resourcetype: "Wood", quantity: 200 }
  ResourceSubType?: "Wood" | "meat" | "grain" | "forage" | "Gold" | "fish" | "Stone"
  MinimapColor?: { red: 0.23, blue: 0.1, green: 0.23 }
  GathererLimit?: 1 | 8 | 20
  RolloverTextID?: number
  WanderDistance?: 2 | 4 | 6 | 8 | 12 | 30 | 40
  UnitAIType?: "Passive" | "HandCombative" | "Civilian" | "Predator" | "RangedCombative" | "HerdAnimal"
  Event?: {
    Winter:
    {
      name: "Winter",
      AnimFile:
      "CivGeneric/Units/Vanity/WinterHoliday/SnowMan_All/Snowman.xml",
    },
  }
  FormationCategory?: "Protected" | "Body" | "Ranged" | "Mobile"
  PhysicsInfo?: "dude" | "house" | "mill"
  SelectionPriority?: 10
  InitialUnitAIStance?: "Defensive" | "Aggressive"
  Tactics?: string
  PopulationCapAddition?: 0 | 5 | 10 | 20 | 100
  PlacementFile?: string
  AllowedAge?: 0 | 1 | 2 | 3
  BuilderLimit?: 10 | 14 | 20 | 40 | 200
  Command?: {
    Eject: { name: "Eject", row: 0, page: 10, column: 2 },
    TownBell: { name: "TownBell", row: 0, page: 10, column: 3 },
    ReturnToWork: { name: "ReturnToWork", row: 0, page: 10, column: 3 },
    Delete: { name: "Delete", row: 0, page: 10, column: 4 },
    SetGatherPointEconomy:
    { name: "SetGatherPointEconomy", row: 0, page: 10, column: 0 },
    SetGatherPointMilitary:
    { name: "SetGatherPointMilitary", row: 0, page: 10, column: 1 },
  }
  UnitLevel?: 1 | 2 | 3 | 99
  Trait3?: "ArmorBuilding" | "ArmorMed" | "ArmorCloth" | "ArmorLgt" | "ArmorPlt" | "Torc"
  Trait4?: "GearBldg" | "Gear" | "GearVill" | "GearSiege" | "GearBoat" | "GearPriest" | "ScoutSpecial1H" | "War Horn"
  Cost?: {
    Wood: { resourcetype: "Wood", quantity: 300 },
    stone: { resourcetype: "stone", quantity: 700 },
  }
  CarryCapacity?: {
    Food: { resourcetype: "Food", quantity: 10 },
    Wood: { resourcetype: "Wood", quantity: 10 },
    Gold: { resourcetype: "Gold", quantity: 10 },
    stone: { resourcetype: "stone", quantity: 10 },
  }
  Tech?: {
    TechTower1_Shadow: { name: "TechTower1_Shadow", row: 0, page: 0, column: 0 },
    TechTower2: { name: "TechTower2", row: 0, page: 0, column: 0 },
    TechTower3: { name: "TechTower3", row: 0, page: 0, column: 0 },
    TechTowerS: { name: "TechTowerS", row: 0, page: 0, column: 0 },
  }
  SocketUnitType?: "506" | "MinedResource"
  MinimapIcon?: string
  Trait1?: TraitType
  Trait2?: "Arrows" | "Shields" | "Swords1H"
  ProjectileProtoUnit?: ProjectileProtoUnitType
  BuildLimit?: 1 | 3 | 4 | 12 | 20 | 24 | 25
  MaxContained?: 10 | 12 | 16 | 20 | 50
  InputContext?: string
  Train?: {
    UnitTypeUniqueUnit1: { name: "UnitTypeUniqueUnit1", row: 0, page: 0, column: 0 },
    UnitTypeUniqueUnit2: { name: "UnitTypeUniqueUnit2", row: 0, page: 0, column: 1 },
  }
  PopulationCount?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  VanTrait3?: "VanityHelm"
  VanTrait1?: "VanityWeapon"
  VanTrait2?: "VanityShield"
  HeightBob?: { period: 2, magnitude: 1 }
  DesignTag?: DesignTagType
  DeathMessage?: "You'll never take the Badari lands!"
  Trait5?: "Warpaint"
}

export interface Prototypes {
  timestamp: string
  data: {
    [index: string]: Prototype,
  }
}
