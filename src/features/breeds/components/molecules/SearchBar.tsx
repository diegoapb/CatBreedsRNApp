import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import debounce from 'lodash/debounce';
import { SearchInput } from '../atoms/SearchInput';

interface SearchBarProps {
  onSearch: (query: string) => void;
  debounceMs?: number;
}

/**
 * Search bar with debounced search functionality
 */
export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch,
  debounceMs = 300,
}) => {
  const debouncedSearch = useMemo(
    () => debounce(onSearch, debounceMs),
    [onSearch, debounceMs]
  );

  return (
    <View style={styles.container}>
      <SearchInput onSearch={debouncedSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
  },
});
