import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DetailText } from '../atoms/DetailText';

interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
}

export const DetailSection: React.FC<DetailSectionProps> = ({ title, children }) => (
  <View style={styles.container}>
    <DetailText variant="title" style={styles.title}>{title}</DetailText>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 24 },
  title: { fontSize: 20, marginBottom: 8 },
});
