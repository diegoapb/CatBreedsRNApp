import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { breedsService } from '../services/breedsService';

/**
 * Hook for fetching paginated breeds
 * @param limit - Number of breeds to fetch per page
 * @param page - Page number to fetch
 */
export const useBreeds = (limit = 10, page = 0) => {
  return useQuery({
    queryKey: ['breeds', limit, page],
    queryFn: () => breedsService.getBreeds(limit, page),
  });
};

/**
 * Hook for fetching breeds with infinite scroll
 * @param limit - Number of breeds to fetch per page
 */
export const useInfiniteBreeds = (limit = 20) => {
  return useInfiniteQuery({
    queryKey: ['breeds', 'infinite', limit],
    queryFn: ({ pageParam = 0 }) => breedsService.getBreeds(limit, pageParam),
    getNextPageParam: (lastPage, allPages) => 
      lastPage.length === limit ? allPages.length : undefined,
    initialPageParam: 0,
  });
};

/**
 * Hook for searching breeds by query
 * @param query - Search term to filter breeds
 */
export const useSearchBreeds = (query: string) => {
  return useQuery({
    queryKey: ['breeds', 'search', query],
    queryFn: () => breedsService.searchBreeds(query),
    enabled: query.length > 0,
  });
};
