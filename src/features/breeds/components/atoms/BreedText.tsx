import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BreedTextProps {
  children: string;
  variant?: 'title' | 'subtitle' | 'body';
  numberOfLines?: number;
}

/**
 * Text component with predefined variants for breed information
 */
export const BreedText: React.FC<BreedTextProps> = ({ 
  children, 
  variant = 'body',
  numberOfLines,
}) => {
  return (
    <Text style={styles[variant]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
});
