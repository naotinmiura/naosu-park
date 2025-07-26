import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';

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
      <Text style={styles.title}>{LABELS.SCREEN_TITLES.NUMBER_GUESS}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.attempts}>{LABELS.MESSAGES.ATTEMPTS}: {attempts}</Text>

      
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={setGuess}
        placeholder={LABELS.MESSAGES.INPUT_PLACEHOLDER}
        keyboardType="numeric"
        maxLength={3}
      />
      
      <View style={styles.buttonContainer}>
        <Button title={LABELS.MESSAGES.GUESS_BUTTON} onPress={handleGuess} />
        <Button title={LABELS.BUTTONS.RESET} onPress={handleReset} />
      </View>
      
      <Button title={LABELS.MESSAGES.BACK_TO_GAME_SELECT} onPress={() => navigation.navigate('GameSelect')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  attempts: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 200,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

}); 