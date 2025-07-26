import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { COMMON_STYLES, SPACING, COLORS } from '../constants/theme';
import { GameButton, Input, BackgroundPattern } from '../components';

type Props = NativeStackScreenProps<PageList, 'NumberGuess'>;

export default function NumberGuessScreen({ navigation }: Props) {
  const [targetNumber, setTargetNumber] = useState<number>(() => {
    // 初期値を即座に生成
    return Math.floor(Math.random() * 100) + 1;
  });
  const [guess, setGuess] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [message, setMessage] = useState<string>(LABELS.MESSAGES.NUMBER_GUESS_INSTRUCTION);

  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    // ゲーム開始時にランダムな数字を生成
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNumber);
    setAttempts(0);
    setMessage(LABELS.MESSAGES.NUMBER_GUESS_INSTRUCTION);
    setStartTime(Date.now());
  }, []);

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      Alert.alert('エラー', LABELS.MESSAGES.NUMBER_GUESS_ERROR);
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (Number(guessNumber) === Number(targetNumber)) {
      // 経過時間を計算（秒単位）
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      // スコア計算（試行回数が少ないほど高スコア）
      const score = Math.max(1000 - (newAttempts * 10), 100);
      
      // 共通の正解画面に遷移
      navigation.navigate('GameResult', {
        gameName: LABELS.SCREEN_TITLES.NUMBER_GUESS,
        score: score,
        time: elapsedTime,
        attempts: newAttempts
      });
    } else if (Number(guessNumber) < Number(targetNumber)) {
      setMessage(LABELS.MESSAGES.NUMBER_GUESS_HIGHER);
    } else {
      setMessage(LABELS.MESSAGES.NUMBER_GUESS_LOWER);
    }
    
    setGuess('');
  };

  const handleReset = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNumber);
    setAttempts(0);
    setGuess('');
    setMessage(LABELS.MESSAGES.NUMBER_GUESS_INSTRUCTION);
    setStartTime(Date.now());
  };

  return (
    <View style={styles.container}>
      <BackgroundPattern variant="stars" opacity={0.03} />
      <View style={styles.content}>
        <Text style={COMMON_STYLES.title}>{LABELS.SCREEN_TITLES.NUMBER_GUESS}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.attempts}>{LABELS.MESSAGES.ATTEMPTS}: {attempts}</Text>

        <Input
          value={guess}
          onChangeText={setGuess}
          placeholder={LABELS.MESSAGES.INPUT_PLACEHOLDER}
          keyboardType="numeric"
          maxLength={3}
          size="lg"
          style={styles.input}
        />
        
        <View style={styles.buttonContainer}>
          <GameButton 
            title={LABELS.MESSAGES.GUESS_BUTTON} 
            onPress={handleGuess}
            variant="primary"
            size="lg"
          />
          <GameButton 
            title={LABELS.BUTTONS.RESET} 
            onPress={handleReset}
            variant="secondary"
            size="lg"
          />
        </View>
        
        <GameButton 
          title={LABELS.MESSAGES.BACK_TO_GAME_SELECT} 
          onPress={() => navigation.navigate('GameSelect')}
          variant="success"
          size="md"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...COMMON_STYLES.centerContainer,
  },
  content: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  message: {
    ...COMMON_STYLES.bodyText,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  attempts: {
    ...COMMON_STYLES.caption,
    marginBottom: SPACING.lg,
  },
  input: {
    width: 200,
    marginBottom: SPACING.lg,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});