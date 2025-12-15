import { breedsService } from '../breedsService';
import { Breed } from '../../types';

describe('BreedsService - Integration Tests', () => {
  // Increase timeout for real API calls
  jest.setTimeout(10000);

  describe('searchBreeds', () => {
    it('should search breeds by query term successfully', async () => {
      // Search for breeds with "air" in their name (American Shorthair, American Wirehair)
      const query = 'air';
      const result = await breedsService.searchBreeds(query);

      // Validate response structure
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);

      // Validate each breed has required fields
      result.forEach((breed: Breed) => {
        expect(breed).toHaveProperty('id');
        expect(breed).toHaveProperty('name');
        expect(breed).toHaveProperty('description');
        expect(breed).toHaveProperty('temperament');
        expect(breed).toHaveProperty('origin');
        expect(breed).toHaveProperty('life_span');
        expect(breed).toHaveProperty('weight');
        expect(breed.weight).toHaveProperty('imperial');
        expect(breed.weight).toHaveProperty('metric');

        // Verify the breed name contains the search query
        expect(breed.name.toLowerCase()).toContain(query.toLowerCase());
      });
    });
  });
});
