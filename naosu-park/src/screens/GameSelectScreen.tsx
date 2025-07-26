import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';

type Props = NativeStackScreenProps<PageList, 'GameSelect'>;

export default function GameSelectScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.SCREEN_TITLES.GAME_SELECT}</Text>
      <Button title={LABELS.BUTTONS.SLIDE_PUZZLE} onPress={() => navigation.navigate('SlidePuzzle')} />
      <Button title={LABELS.BUTTONS.NUMBER_GUESS} onPress={() => navigation.navigate('NumberGuess')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 10,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
