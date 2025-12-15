import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ListScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cat Breeds</Text>
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
