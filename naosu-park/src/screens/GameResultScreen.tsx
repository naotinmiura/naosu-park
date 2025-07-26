import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { getGameConfig } from '../constants/games';

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
      <Text style={styles.title}>{LABELS.MESSAGES.CONGRATULATIONS}</Text>
      <Text style={styles.gameName}>{gameConfig?.title || gameName}</Text>
      <Text style={styles.message}>{LABELS.MESSAGES.CLEAR}</Text>
      
      <View style={styles.statsContainer}>
        {gameConfig?.resultConfig?.showScore && (
          <Text style={styles.stat}>スコア: {score}</Text>
        )}
        {gameConfig?.resultConfig?.showTime && (
          <Text style={styles.stat}>時間: {formatTime(time)}</Text>
        )}
        {gameConfig?.resultConfig?.showAttempts && attempts && (
          <Text style={styles.stat}>試行回数: {attempts}</Text>
        )}
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="もう一度プレイ" 
          onPress={() => {
            // 前の画面に戻る（同じゲームを再開）
            navigation.goBack();
          }} 
        />
        <Button 
          title="ゲーム選択に戻る" 
          onPress={() => navigation.navigate('GameSelect')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: 10,
    textAlign: 'center',
  },
  gameName: {
    fontSize: 20,
    color: '#4ecdc4',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 24,
    color: '#4ecdc4',
    marginBottom: 30,
    textAlign: 'center',
  },
  statsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stat: {
    fontSize: 18,
    color: '#45b7d1',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    gap: 15,
    width: '100%',
    maxWidth: 300,
  },
}); 