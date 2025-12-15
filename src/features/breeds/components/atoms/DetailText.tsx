import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface DetailTextProps extends TextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'label' | 'value';
}

export const DetailText: React.FC<DetailTextProps> = ({ variant = 'body', style, ...props }) => (
  <Text style={[styles[variant], style]} {...props} />
);

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: 'bold', color: '#432832' },
  subtitle: { fontSize: 18, color: '#666' },
  body: { fontSize: 16, lineHeight: 24, color: '#333' },
  label: { fontSize: 16, color: '#666', flex: 1 },
  value: { fontSize: 16, color: '#432832', fontWeight: '500' },
});
