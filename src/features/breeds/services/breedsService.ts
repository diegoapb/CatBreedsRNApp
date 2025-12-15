import { CAT_API_KEY } from '@env';
import { Breed } from '../types';

const BASE_URL = 'https://api.thecatapi.com/v1';

class BreedsService {
  async getBreeds(limit: number = 10, page: number = 0): Promise<Breed[]> {
    const response = await fetch(
      `${BASE_URL}/breeds?limit=${limit}&page=${page}&attach_image=1`,
      {
        headers: {
          'x-api-key': CAT_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch breeds');
    }

    return response.json();
  }
}

export const breedsService = new BreedsService();
