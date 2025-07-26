import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import GameSelectScreen from '../screens/GameSelectScreen';

export type RootStackParamList = {
  Start: undefined;
  Home: undefined;
  GameSelect: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameSelect" component={GameSelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
