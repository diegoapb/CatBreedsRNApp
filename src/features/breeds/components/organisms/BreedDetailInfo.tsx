import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Breed } from '../../types';
import { DetailSection } from '../molecules/DetailSection';
import { InfoRow } from '../molecules/InfoRow';
import { DetailText } from '../atoms/DetailText';

interface BreedDetailInfoProps {
  breed: Breed;
}

export const BreedDetailInfo: React.FC<BreedDetailInfoProps> = ({ breed }) => (
  <View style={styles.container}>
    <DetailSection title="Descripción">
      <DetailText variant="body">{breed.description}</DetailText>
    </DetailSection>

    <DetailSection title="Temperamento">
      <DetailText variant="body" style={styles.italic}>{breed.temperament}</DetailText>
    </DetailSection>

    <DetailSection title="Información">
      <InfoRow label="Esperanza de vida:" value={`${breed.life_span} años`} />
      <InfoRow label="Peso:" value={`${breed.weight.metric} kg`} />
      <InfoRow label="Inteligencia:" value={`${breed.intelligence}/5`} />
    </DetailSection>

    {breed.affection_level !== undefined && (
      <DetailSection title="Características">
        <InfoRow label="Nivel de afecto:" value={`${breed.affection_level}/5`} />
        {breed.child_friendly !== undefined && <InfoRow label="Amigable con niños:" value={`${breed.child_friendly}/5`} />}
        {breed.dog_friendly !== undefined && <InfoRow label="Amigable con perros:" value={`${breed.dog_friendly}/5`} />}
        {breed.energy_level !== undefined && <InfoRow label="Nivel de energía:" value={`${breed.energy_level}/5`} />}
      </DetailSection>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 16 },
  italic: { fontStyle: 'italic', color: '#555' },
});
