import { CAT_API_KEY } from '@env';
import { Breed } from '../types';

const BASE_URL = 'https://api.thecatapi.com/v1';
const IMAGE_BASE_URL = 'https://cdn2.thecatapi.com/images';

/**
 * Service for managing cat breeds data from The Cat API
 */
class BreedsService {
  async getBreeds(limit: number = 10, page: number = 0): Promise<Breed[]> {
    const response = await fetch(
      `${BASE_URL}/breeds?limit=${limit}&page=${page}`,
      {
        headers: {
          'x-api-key': CAT_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch breeds');
    }

    const breeds: Breed[] = await response.json();
    
    return breeds.map((breed) => {
      if (breed.reference_image_id) {
        return {
          ...breed,
          image: {
            id: breed.reference_image_id,
            url: `${IMAGE_BASE_URL}/${breed.reference_image_id}.jpg`,
            width: 0,
            height: 0,
          },
        };
      }
      return breed;
    });
  }

  async searchBreeds(query: string, attachImage: boolean = true): Promise<Breed[]> {
    const params = new URLSearchParams({
      q: query,
      ...(attachImage && { attach_image: '1' }),
    });

    const response = await fetch(
      `${BASE_URL}/breeds/search?${params.toString()}`,
      {
        headers: {
          'x-api-key': CAT_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to search breeds');
    }

    return response.json();
  }
}

export const breedsService = new BreedsService();
