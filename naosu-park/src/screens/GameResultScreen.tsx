import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { getGameConfig } from '../constants/games';
import { COMMON_STYLES, SPACING, COLORS, TYPOGRAPHY } from '../constants/theme';
import { GameButton, GameCard, BackgroundPattern } from '../components';

type Props = NativeStackScreenProps<PageList, 'GameResult'>;

export default function GameResultScreen({ navigation, route }: Props) {
  const { gameName, score, time, attempts } = route.params;
  const gameConfig = getGameConfig(gameName);

  // 時間を分:秒の形式に変換
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <BackgroundPattern variant="mixed" opacity={0.03} />
      <View style={styles.content}>
        <Text style={styles.title}>{LABELS.MESSAGES.CONGRATULATIONS}</Text>
        <Text style={styles.gameName}>{gameConfig?.title || gameName}</Text>
        <Text style={styles.message}>{LABELS.MESSAGES.CLEAR}</Text>
        
        <GameCard style={styles.statsContainer} variant="featured">
          {gameConfig?.resultConfig?.showScore && (
            <Text style={styles.stat}>スコア: {score}</Text>
          )}
          {gameConfig?.resultConfig?.showTime && (
            <Text style={styles.stat}>時間: {formatTime(time)}</Text>
          )}
          {gameConfig?.resultConfig?.showAttempts && attempts && (
            <Text style={styles.stat}>試行回数: {attempts}</Text>
          )}
        </GameCard>
        
        <View style={styles.buttonContainer}>
          <GameButton 
            title="もう一度プレイ" 
            onPress={() => {
              // 前の画面に戻る（同じゲームを再開）
              navigation.goBack();
            }}
            variant="primary"
            size="lg"
            fullWidth
          />
          <GameButton 
            title="ゲーム選択に戻る" 
            onPress={() => navigation.navigate('GameSelect')}
            variant="secondary"
            size="lg"
            fullWidth
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...COMMON_STYLES.centerContainer,
    backgroundColor: COLORS.background,
  },
  content: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  title: {
    fontSize: TYPOGRAPHY.fontSize['4xl'],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.success,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  gameName: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    color: COLORS.primary,
    marginBottom: SPACING.sm,
    textAlign: 'center',
    fontWeight: TYPOGRAPHY.fontWeight.bold,
  },
  message: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    color: COLORS.primary,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  statsContainer: {
    marginBottom: SPACING['2xl'],
    width: '100%',
  },
  stat: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.info,
    marginBottom: SPACING.sm,
    textAlign: 'center',
    fontWeight: TYPOGRAPHY.fontWeight.bold,
  },
  buttonContainer: {
    gap: SPACING.md,
    width: '100%',
  },
});