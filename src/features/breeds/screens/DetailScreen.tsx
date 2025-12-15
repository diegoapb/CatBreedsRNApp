import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BreedsStackParamList } from '../types/navigation';
import { DetailLayout } from '../../../components/layouts/DetailLayout';
import { BreedDetailHeader } from '../components/organisms/BreedDetailHeader';
import { BreedDetailInfo } from '../components/organisms/BreedDetailInfo';

type DetailScreenProps = NativeStackScreenProps<BreedsStackParamList, 'Detail'>;

export const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { breed } = route.params;

  return (
    <DetailLayout
      header={
        <>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <BreedDetailHeader name={breed.name} origin={breed.origin} imageUrl={breed.image?.url} />
        </>
      }
    >
      <BreedDetailInfo breed={breed} />
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  backButton: { 
    position: 'absolute', 
    top: 16, 
    left: 16, 
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: { fontSize: 24, color: '#000' },
});
