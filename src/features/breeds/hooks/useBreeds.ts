import { useState, useEffect, useCallback } from 'react';
import { Breed } from '../types';
import { breedsService } from '../services/breedsService';

interface UseBreedsReturn {
  breeds: Breed[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useBreeds = (): UseBreedsReturn => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBreeds = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await breedsService.getBreeds();
      setBreeds(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return {
    breeds,
    loading,
    error,
    refetch: fetchBreeds,
  };
};
