import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { getAvailableGames } from '../constants/games';
import { COMMON_STYLES, SPACING } from '../constants/theme';
import { Button, Card } from '../components';

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
      <Text style={COMMON_STYLES.title}>{LABELS.SCREEN_TITLES.GAME_SELECT}</Text>
      <View style={styles.gamesContainer}>
        {games.map((game) => (
          <Card key={game.id} style={styles.gameCard} variant="elevated">
            <Button 
              title={game.name} 
              onPress={() => handleGameSelect(game.id)}
              variant="primary"
              size="lg"
              fullWidth
            />
            <Text style={styles.description}>{game.description}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1,
    padding: SPACING.md,
    backgroundColor: COMMON_STYLES.centerContainer.backgroundColor,
  },
  gamesContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  gameCard: {
    marginBottom: SPACING.lg,
  },
  description: {
    ...COMMON_STYLES.caption,
    marginTop: SPACING.sm,
    textAlign: 'center',
  },
});
