/**
 * Home Screen
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Home = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cat Breeds App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
});
