import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen } from '../screens/ListScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { BreedsStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<BreedsStackParamList>();

export const BreedsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="List" component={ListScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);
