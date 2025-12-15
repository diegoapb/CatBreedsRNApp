import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DetailLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const DetailLayout: React.FC<DetailLayoutProps> = ({ header, children }) => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <View style={styles.header}>{header}</View>
    <ScrollView style={styles.scroll}>{children}</ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#fff' },
  scroll: { flex: 1 },
});
