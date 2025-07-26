import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { getAvailableGames } from '../constants/games';

type Props = NativeStackScreenProps<PageList, 'GameSelect'>;

export default function GameSelectScreen({ navigation }: Props) {
  const games = getAvailableGames();

  const handleGameSelect = (gameId: string) => {
    switch (gameId) {
      case 'SLIDE_PUZZLE':
        navigation.navigate('SlidePuzzle');
        break;
      case 'NUMBER_GUESS':
        navigation.navigate('NumberGuess');
        break;
      case 'TYPING_GAME':
        navigation.navigate('TypingGame');
        break;
      default:
        console.warn(`Unknown game: ${gameId}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{LABELS.SCREEN_TITLES.GAME_SELECT}</Text>
      {games.map((game) => (
        <View key={game.id} style={styles.gameItem}>
          <Button 
            title={game.name} 
            onPress={() => handleGameSelect(game.id)} 
          />
          <Text style={styles.description}>{game.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  gameItem: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
});
