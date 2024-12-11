export interface FeatureSummary {
  index: string;
  name: string;
  url: string;
}

export interface FeaturesApiResponse {
  count: number;
  results: FeatureSummary[];
}

export interface FeatureDetails {
  index: string;
  name: string;
  level: number;
  class: DndClass;
  prerequisites: any[];
  desc: string[];
  url: string;
}

export interface DndClass {
  class: DnDClassesEnum;
}
export enum DnDClassesEnum {
  BARBARIAN = 'barbarian',
  BARD = 'bard',
  CLERIC = 'cleric',
  DRUID = 'druid',
  FIGHTER = 'fighter',
  MONK = 'monk',
  PALADIN = 'paladin',
  RANGER = 'ranger',
  ROGUE = 'rogue',
  SORCERER = 'sorcerer',
  WARLOCK = 'warlock',
  WIZARD = 'wizard',
}
