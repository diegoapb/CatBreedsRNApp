import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useInfiniteBreeds } from '../hooks/useBreeds';
import { BreedList } from '../components';

/**
 * Screen displaying infinite scrolling list of cat breeds
 */
export const ListScreen = (): React.JSX.Element => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteBreeds();

  const breeds = useMemo(
    () => data?.pages.flatMap((page) => page) ?? [],
    [data]
  );

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <BreedList
        breeds={breeds}
        loading={isLoading || isFetchingNextPage}
        error={error?.message}
        onEndReached={handleLoadMore}
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
