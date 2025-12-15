import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DetailText } from '../atoms/DetailText';

interface InfoRowProps {
  label: string;
  value: string | number;
}

export const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <View style={styles.container}>
    <DetailText variant="label">{label}</DetailText>
    <DetailText variant="value">{value}</DetailText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
