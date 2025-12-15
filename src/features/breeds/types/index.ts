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

export interface Breed {
  id: string;
  name: string;
  intelligence: number;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  weight: BreedWeight;
  reference_image_id?: string;
  image?: BreedImage;
}
