import { renderHook, waitFor } from '@testing-library/react-native';
import { useBreeds } from '../useBreeds';
import { breedsService } from '../../services/breedsService';

jest.mock('../../services/breedsService');

describe('useBreeds', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch breeds on mount', async () => {
    const mockBreeds = [
      {
        id: 'abys',
        name: 'Abyssinian',
        intelligence: 5,
        description: 'Test',
        temperament: 'Active',
        origin: 'Egypt',
        life_span: '14 - 15',
        weight: { imperial: '7 - 10', metric: '3 - 5' },
      },
    ];

    (breedsService.getBreeds as jest.Mock).mockResolvedValue(mockBreeds);

    const { result } = renderHook(() => useBreeds());

    expect(result.current.loading).toBe(true);
    expect(result.current.breeds).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.breeds).toEqual(mockBreeds);
    expect(result.current.error).toBeNull();
    expect(breedsService.getBreeds).toHaveBeenCalled();
  });
});
