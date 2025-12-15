import React from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { Breed } from '../../types';
import { BreedCard } from '../molecules/BreedCard';

interface BreedListProps {
  breeds: Breed[];
  loading?: boolean;
  error?: string | null;
  onBreedPress?: (breed: Breed) => void;
  onEndReached?: () => void;
}

/**
 * List component with infinite scroll support for breed cards
 */
export const BreedList: React.FC<BreedListProps> = ({
  breeds,
  loading,
  error,
  onBreedPress,
  onEndReached,
}) => {
  if (loading && breeds.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#432832" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={breeds}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <BreedCard breed={item} onPress={onBreedPress} />
      )}
      contentContainerStyle={styles.list}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading ? <ActivityIndicator color="#432832" /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: '#d32f2f',
    fontSize: 14,
  },
});
