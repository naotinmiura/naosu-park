import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import GameSelectScreen from '../screens/GameSelectScreen';
import SlidePuzzleScreen from '../screens/SlidePuzzleScreen';
import NumberGuessScreen from '../screens/NumberGuessScreen';
import GameResultScreen from '../screens/GameResultScreen';
import { PageList } from '../types';

const Stack = createNativeStackNavigator<PageList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameSelect" component={GameSelectScreen} />
        <Stack.Screen name="SlidePuzzle" component={SlidePuzzleScreen} />
        <Stack.Screen name="NumberGuess" component={NumberGuessScreen} />
        <Stack.Screen name="GameResult" component={GameResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
