import { create } from 'zustand';
import { Breed } from '../features/breeds/types';

interface BreedsStore {
  selectedBreeds: Breed[];
  addBreed: (breed: Breed) => void;
  removeBreed: (breedId: string) => void;
  clearBreeds: () => void;
}

export const useBreedsStore = create<BreedsStore>((set) => ({
  selectedBreeds: [],
  addBreed: (breed) =>
    set((state) => ({
      selectedBreeds: [...state.selectedBreeds, breed],
    })),
  removeBreed: (breedId) =>
    set((state) => ({
      selectedBreeds: state.selectedBreeds.filter((b) => b.id !== breedId),
    })),
  clearBreeds: () => set({ selectedBreeds: [] }),
}));
