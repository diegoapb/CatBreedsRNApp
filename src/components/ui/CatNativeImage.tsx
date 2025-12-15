import React from 'react';
import { requireNativeComponent, ViewStyle, StyleProp } from 'react-native';

interface CatNativeImageProps {
  source?: { uri?: string };
  resizeMode?: 'cover' | 'contain' | 'stretch';
  style?: StyleProp<ViewStyle>;
}

const CatNativeImageView = requireNativeComponent<CatNativeImageProps>('CatNativeImageView');

export const CatNativeImage: React.FC<CatNativeImageProps> = ({ 
  source, 
  resizeMode = 'cover', 
  style 
}) => {
  return (
    <CatNativeImageView 
      source={source} 
      resizeMode={resizeMode} 
      style={style} 
    />
  );
};
