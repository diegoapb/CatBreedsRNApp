import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useInfiniteBreeds, useSearchBreeds } from '../hooks/useBreeds';
import { BreedList, SearchBar } from '../components';
import { BreedsStackParamList } from '../types/navigation';
import { Breed } from '../types';

type ListScreenProps = NativeStackScreenProps<BreedsStackParamList, 'List'>;

/**
 * Screen displaying infinite scrolling list of cat breeds
 */
export const ListScreen = ({ navigation }: ListScreenProps): React.JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteBreeds();
  const { data: searchResults, isLoading: isSearching, error: searchError } = useSearchBreeds(searchQuery);

  const breeds = useMemo(
    () => searchQuery ? searchResults ?? [] : data?.pages.flatMap((page) => page) ?? [],
    [data, searchResults, searchQuery]
  );

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleBreedPress = useCallback((breed: Breed) => {
    navigation.navigate('Detail', { breed });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <SearchBar onSearch={setSearchQuery} />
      <BreedList
        breeds={breeds}
        loading={searchQuery ? isSearching : (isLoading || isFetchingNextPage)}
        error={searchQuery ? searchError?.message : error?.message}
        onEndReached={searchQuery ? undefined : handleLoadMore}
        onBreedPress={handleBreedPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
