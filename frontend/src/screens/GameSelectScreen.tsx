import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList, Game } from '../types';
import { LABELS } from '../constants/labels';
import { getAvailableGames } from '../constants/games';
import { COMMON_STYLES, SPACING, COLORS } from '../constants/theme';
import { GameButton, GameCard, BackgroundPattern } from '../components';
import { fetchGames } from '../api/gamesApi';

type Props = NativeStackScreenProps<PageList, 'GameSelect'>;

export default function GameSelectScreen({ navigation }: Props) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const games = await fetchGames();
        setGames(games as Game[]);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGamesData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 50 }}>読み込み中...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackgroundPattern variant="circles" opacity={0.03} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>ゲームを選択</Text>
        <View style={styles.gamesContainer}>
          {games.map((game, index) => (
            <GameCard key={game.game_id} style={styles.gameCard} variant="game">
              <GameButton 
                title={game.name} 
                onPress={() => handleGameSelect(game.game_id)}
                variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'success'}
                size="lg"
                fullWidth
              />
              <Text style={styles.description}>{game.description}</Text>
            </GameCard>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: { 
    flexGrow: 1,
    padding: SPACING.md,
  },
  title: {
    ...COMMON_STYLES.title,
    color: COLORS.game.blue,
    fontSize: 28,
    marginBottom: SPACING.xl,
  },
  gamesContainer: {
    width: '100%',
    maxWidth: 450,
    alignSelf: 'center',
  },
  gameCard: {
    marginBottom: SPACING.lg,
  },
  description: {
    ...COMMON_STYLES.caption,
    marginTop: SPACING.md,
    textAlign: 'center',
    color: COLORS.textSecondary,
  },
});
