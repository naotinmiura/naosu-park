import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { COLORS } from './src/constants/theme';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={COLORS.background}
      />
      <AppNavigator />
    </>
  );
}
