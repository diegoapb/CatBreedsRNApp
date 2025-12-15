import { useQuery } from '@tanstack/react-query';
import { breedsService } from '../services/breedsService';

export const useBreeds = (limit = 10, page = 0) => {
  return useQuery({
    queryKey: ['breeds', limit, page],
    queryFn: () => breedsService.getBreeds(limit, page),
  });
};

export const useSearchBreeds = (query: string) => {
  return useQuery({
    queryKey: ['breeds', 'search', query],
    queryFn: () => breedsService.searchBreeds(query),
    enabled: query.length > 0,
  });
};
