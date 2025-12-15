import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface BreedImageProps {
  uri?: string;
  size?: number;
}

/**
 * Displays a breed image with optional placeholder
 */
export const BreedImage: React.FC<BreedImageProps> = ({ uri, size = 80 }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {uri ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E0E0',
  },
});
