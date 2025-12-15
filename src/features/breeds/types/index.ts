export interface BreedWeight {
  imperial: string;
  metric: string;
}

export interface BreedImage {
  id: string;
  width: number;
  height: number;
  url: string;
}

// Core breed properties (always present in API)
interface BreedCore {
  id: string;
  name: string;
  intelligence: number;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  weight: BreedWeight;
}

// Optional breed properties
interface BreedOptional {
  reference_image_id: string;
  image: BreedImage;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  wikipedia_url: string;
  country_codes: string;
  country_code: string;
  alt_names: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
}

// Full API response type
export type Breed = BreedCore & Partial<BreedOptional>;

// UI display type (requiere image)
export type BreedWithImage = BreedCore & Required<Pick<BreedOptional, 'image'>> & Partial<Omit<BreedOptional, 'image'>>;

// Breed card type (solo lo necesario para el listado)
export type BreedCard = Pick<BreedCore, 'id' | 'name' | 'origin' | 'temperament'> & {
  image?: BreedImage;
};

// Breed detail type (todo excepto flags binarios)
export type BreedDetail = Omit<Breed, 'experimental' | 'hairless' | 'natural' | 'rare' | 'rex' | 'suppressed_tail' | 'short_legs'>;
