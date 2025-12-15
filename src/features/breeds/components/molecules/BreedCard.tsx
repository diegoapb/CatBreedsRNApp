import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Breed } from '../../types';
import { BreedImage } from '../atoms/BreedImage';
import { BreedText } from '../atoms/BreedText';

interface BreedCardProps {
  breed: Breed;
  onPress?: (breed: Breed) => void;
}

/**
 * Card component displaying breed information with image and details
 */
export const BreedCard: React.FC<BreedCardProps> = ({ breed, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress?.(breed)}
      activeOpacity={0.7}
    >
      <BreedImage uri={breed.image?.url} size={80} />
      <View style={styles.content}>
        <BreedText variant="title" numberOfLines={1}>
          {breed.name}
        </BreedText>
        <BreedText variant="subtitle" numberOfLines={1}>
          {breed.origin}
        </BreedText>
        <BreedText variant="body" numberOfLines={2}>
          {breed.temperament}
        </BreedText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
});
