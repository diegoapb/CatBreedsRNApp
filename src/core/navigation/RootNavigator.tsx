import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BreedsNavigator } from '../../features/breeds/navigation/BreedsNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Breeds" component={BreedsNavigator} />
  </Stack.Navigator>
);
