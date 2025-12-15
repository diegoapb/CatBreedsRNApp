import { CAT_API_KEY } from '@env';
import { Breed } from '../types';
import { attachBreedsImages } from '../shared';
import { API_CONFIG } from '@/config/constants';

const { BASE_URL } = API_CONFIG;

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
    return attachBreedsImages(breeds);
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

    const breeds: Breed[] = await response.json();
    return attachBreedsImages(breeds);
  }
}

export const breedsService = new BreedsService();
