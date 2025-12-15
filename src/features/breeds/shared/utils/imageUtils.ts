import { Breed } from '../../types';
import { API_CONFIG } from '@/config/constants';

const { IMAGE_BASE_URL } = API_CONFIG;

/**
 * Attaches image data to a breed if reference_image_id exists
 */
export const attachBreedImage = (breed: Breed): Breed => {
  if (!breed.reference_image_id) {
    return breed;
  }

  return {
    ...breed,
    image: {
      id: breed.reference_image_id,
      url: `${IMAGE_BASE_URL}/${breed.reference_image_id}.jpg`,
      width: 0,
      height: 0,
    },
  };
};

/**
 * Maps an array of breeds and attaches images to each
 */
export const attachBreedsImages = (breeds: Breed[]): Breed[] => {
  return breeds.map(attachBreedImage);
};
