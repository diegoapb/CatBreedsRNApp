import { breedsService } from '../breedsService';
import { Breed } from '../../types';

globalThis.fetch = jest.fn() as jest.Mock;

describe('BreedsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getBreeds', () => {
    it('should fetch breeds successfully', async () => {
      const mockBreeds: Breed[] = [
        {
          id: 'abys',
          name: 'Abyssinian',
          intelligence: 5,
          description: 'Test description',
          temperament: 'Active, Energetic',
          origin: 'Egypt',
          life_span: '14 - 15',
          weight: { imperial: '7 - 10', metric: '3 - 5' },
          reference_image_id: '0XYvRd7oD',
        },
      ];

      (globalThis.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockBreeds,
      });

      const result = await breedsService.getBreeds();

      expect(globalThis.fetch).toHaveBeenCalledWith(
        'https://api.thecatapi.com/v1/breeds?limit=10&page=0&attach_image=1',
        expect.objectContaining({
          headers: expect.objectContaining({
            'x-api-key': expect.any(String),
          }),
        })
      );
      expect(result).toEqual(mockBreeds);
    });
  });
});
