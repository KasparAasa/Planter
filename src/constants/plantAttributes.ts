export enum LightLevel {
  lowLight = 'low-light',
  mediumIndirectLight = 'medium indirect light',
  brightIndirectLight = 'bright indirect light',
  directSunlight = 'direct sunlight',
}

export enum WaterLevel {
  dry2d = 'dry +2d',
  dry = 'dry',
  dry2in = 'dry 2in',
  moist = 'moist',
}

export enum SoilType {
  sandy = 'sandy',
  wellDrainingPeatPerlite = 'well-draining peat/perlite',
  rich = 'rich',
  none = 'none',
}

export enum Humidity {
  low = '30-50%',
  medium = '30-65%',
  mediumHigh = '40-70%',
  high = '60-80%',
  veryHigh = '80%+',
}

export enum Toxicity {
  edible = 'edible',
  nonToxic = 'non-toxic',
  toxicForPets = 'toxic for pets',
  toxicForPetsAndChildren = 'toxic for pets and children',
  toxic = 'toxic',
}

export const LightLevelDescription = {
  [LightLevel.lowLight]: 'low light',
  [LightLevel.mediumIndirectLight]: 'medium-bright light',
  [LightLevel.brightIndirectLight]: `Likes well lighted areas without direct sunlight.`,
  [LightLevel.directSunlight]: 'direct indoor sunlight',
}
export const SoilTypeDescription = {
  [SoilType.sandy]: 'well draining and sandy',
  [SoilType.wellDrainingPeatPerlite]: 'well-draining peat',
  [SoilType.rich]: 'rich',
  [SoilType.none]: 'none',
}
export const HumidityDescription = {
  [Humidity.low]: '30% to 50%',
  [Humidity.medium]: '30% to 65%',
  [Humidity.mediumHigh]: '40% to 70%',
  [Humidity.high]: '60% to 80%',
  [Humidity.veryHigh]: 'over 80%',
}
export const WaterLevelDescription = {
  [WaterLevel.dry2d]: 'let the substrate dry out completely between watering',
  //watering alert 2 days after "dry" state
  [WaterLevel.dry]: 'Let the substrate dry out between watering.',
  //watering alert at the "dry" state
  [WaterLevel.dry2in]: 'top part of the soil should be dry',
  [WaterLevel.moist]: 'keep the soil moist but not soggy',
}
export const ToxicityDescription = {
  [Toxicity.edible]: 'safe to consume',
  [Toxicity.nonToxic]: 'not toxic for pets or children',
  [Toxicity.toxicForPets]: 'toxic for pets',
  [Toxicity.toxicForPetsAndChildren]: 'toxic to pets and small children',
  [Toxicity.toxic]: 'toxic to pets and humans',
}