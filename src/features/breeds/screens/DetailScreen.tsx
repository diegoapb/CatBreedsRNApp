import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BreedsStackParamList } from '../types/navigation';
import { DetailLayout } from '../../../components/layouts/DetailLayout';
import { BreedDetailHeader } from '../components/organisms/BreedDetailHeader';
import { BreedDetailInfo } from '../components/organisms/BreedDetailInfo';

type DetailScreenProps = NativeStackScreenProps<BreedsStackParamList, 'Detail'>;

export const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { breed } = route.params;

  return (
    <DetailLayout
      header={<BreedDetailHeader name={breed.name} origin={breed.origin} imageUrl={breed.image?.url} />}
    >
      <BreedDetailInfo breed={breed} />
    </DetailLayout>
  );
};
