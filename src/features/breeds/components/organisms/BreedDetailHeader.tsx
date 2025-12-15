import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DetailText } from '../atoms/DetailText';
import { CatNativeImage } from '@/components/ui/CatNativeImage';

interface BreedDetailHeaderProps {
  name: string;
  origin: string;
  imageUrl?: string;
}

export const BreedDetailHeader: React.FC<BreedDetailHeaderProps> = ({ name, origin, imageUrl }) => (
  <View>
    {imageUrl && <CatNativeImage source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />}
    <View style={styles.info}>
      <DetailText variant="title">{name}</DetailText>
      <DetailText variant="subtitle" style={styles.origin}>{origin}</DetailText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  image: { width: '100%', height: 300, backgroundColor: '#e0e0e0' },
  info: { padding: 16, backgroundColor: '#fff' },
  origin: { marginTop: 4 },
});
