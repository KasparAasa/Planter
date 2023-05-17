export enum LightLevel {
  mediumLow = 'low',
  medium = 'medium',
  mediumHigh = 'medium-high',
  high = 'high',
}

export enum WaterLevel {
  veryLow = 'very-low',
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export enum SoilType {
  dry = 'dry',
  mediumDry = 'medium-dry',
  moist = 'moist',
}

export enum Humidity {
  low = 'low',
  medium = 'medium',
  mediumHigh = 'medium-high',
  high = 'high',
}

export enum Toxicity {
  edible = 'edible',
  nonToxic = 'non-toxic',
  mediumToxic = 'low-toxic',
  Toxic = 'medium-toxic',
  veryToxic = 'very-toxic',
}

export const LightLevelDescription = {
  [LightLevel.mediumLow]: 'low light',
  [LightLevel.medium]: 'medium-bright light',
  [LightLevel.mediumHigh]: `Likes well lighted areas without direct sunlight.`,
  [LightLevel.high]: 'direct indoor sunlight',
}
export const SoilTypeDescription = {
  [SoilType.dry]: 'well draining and sandy',
  [SoilType.mediumDry]: 'well-draining peat',
  [SoilType.moist]: 'rich',
}
export const HumidityDescription = {
  [Humidity.low]: '30% to 50%',
  [Humidity.medium]: '30% to 65%',
  [Humidity.mediumHigh]: '40% to 70%',
  [Humidity.high]: 'over 80%',
}
export const WaterLevelDescription = {
  [WaterLevel.veryLow]: 'let the substrate dry out completely between watering',
  //watering alert 2 days after "dry" state
  [WaterLevel.low]: 'Let the substrate dry out between watering.',
  //watering alert at the "dry" state
  [WaterLevel.medium]: 'top part of the soil should be dry',
  [WaterLevel.high]: 'keep the soil moist but not soggy',
}
export const ToxicityDescription = {
  [Toxicity.edible]: 'safe to consume',
  [Toxicity.nonToxic]: 'not toxic for pets or children',
  [Toxicity.mediumToxic]: 'toxic for pets',
  [Toxicity.Toxic]: 'toxic to pets and small children',
  [Toxicity.veryToxic]: 'toxic to pets and humans',
}