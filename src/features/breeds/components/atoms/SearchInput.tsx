import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

interface SearchInputProps extends TextInputProps {
  onSearch: (text: string) => void;
}

/**
 * Input component for breed search
 */
export const SearchInput: React.FC<SearchInputProps> = ({ 
  onSearch,
  placeholder = 'Search breeds...',
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onSearch}
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        clearButtonMode="while-editing"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  input: {
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1a1a1a',
  },
});
