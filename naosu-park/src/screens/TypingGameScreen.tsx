import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';

type Props = NativeStackScreenProps<PageList, 'TypingGame'>;

// タイピングゲーム用の単語リスト
const WORDS = [
  'こんにちは', 'ありがとう', 'おはよう', 'さようなら', 'お疲れ様',
  'プログラミング', 'アプリケーション', 'スマートフォン', 'インターネット', 'テクノロジー',
  'ゲーム', 'エンターテイメント', 'コミュニケーション', 'イノベーション', 'クリエイティブ',
  'チャレンジ', 'エクスペリエンス', 'パフォーマンス', 'オプティマイゼーション', 'カスタマイゼーション',
  'ユーザー', 'インターフェース', 'デザイン', 'デベロッパー', 'エンジニア',
  'フレームワーク', 'ライブラリ', 'アルゴリズム', 'データベース', 'セキュリティ',
];

export default function TypingGameScreen({ navigation }: Props) {
  const [currentWord, setCurrentWord] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [wordCount, setWordCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [isGameActive, setIsGameActive] = useState<boolean>(true);

  useEffect(() => {
    // ゲーム開始時に最初の単語を設定
    setStartTime(Date.now());
    generateNewWord();
  }, []);

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    setCurrentWord(WORDS[randomIndex]);
    setUserInput('');
  };

  const handleSubmit = () => {
    if (!isGameActive) return;

    const isCorrect = userInput.trim() === currentWord;
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      setWordCount(prev => prev + 1);
      generateNewWord();
    } else {
      setWordCount(prev => prev + 1);
      Alert.alert(LABELS.MESSAGES.TYPING_ERROR_TITLE, LABELS.MESSAGES.TYPING_INCORRECT);
      setUserInput('');
    }
  };

  const handleGameComplete = () => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const accuracy = wordCount > 0 ? Math.round((correctCount / wordCount) * 100) : 0;
    
    // スコア計算: 正確性 × 正解数 × 時間ボーナス
    const timeBonus = Math.max(1, 60 - elapsedTime) / 60; // 時間が短いほど高ボーナス
    const score = Math.round(accuracy * correctCount * timeBonus * 10);
    
    navigation.navigate('GameResult', {
      gameName: 'TYPING_GAME',
      score: score,
      time: elapsedTime,
      attempts: wordCount,
    });
  };

  const handleReset = () => {
    setWordCount(0);
    setCorrectCount(0);
    setStartTime(Date.now());
    setIsGameActive(true);
    generateNewWord();
  };

  const accuracy = wordCount > 0 ? Math.round((correctCount / wordCount) * 100) : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.SCREEN_TITLES.TYPING_GAME}</Text>
      <Text style={styles.instruction}>{LABELS.MESSAGES.TYPING_INSTRUCTION}</Text>
      
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>{LABELS.MESSAGES.TYPING_WORD_COUNT}: {wordCount}</Text>
        <Text style={styles.stat}>{LABELS.MESSAGES.TYPING_CORRECT_COUNT}: {correctCount}</Text>
        <Text style={styles.stat}>{LABELS.MESSAGES.TYPING_ACCURACY}: {accuracy}%</Text>
      </View>

      <View style={styles.wordContainer}>
        <Text style={styles.currentWord}>{currentWord}</Text>
      </View>

      <TextInput
        style={styles.input}
        value={userInput}
        onChangeText={setUserInput}
        placeholder={LABELS.MESSAGES.TYPING_PLACEHOLDER}
        autoFocus={true}
        onSubmitEditing={handleSubmit}
        editable={isGameActive}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title={LABELS.MESSAGES.TYPING_SUBMIT} 
          onPress={handleSubmit}
          disabled={!isGameActive || !userInput.trim()}
        />
        <Button title={LABELS.BUTTONS.RESET} onPress={handleReset} />
        <Button 
          title={LABELS.MESSAGES.TYPING_GAME_END} 
          onPress={handleGameComplete}
          disabled={wordCount === 0}
        />
      </View>

      <Button 
        title={LABELS.MESSAGES.BACK_TO_GAME_SELECT} 
        onPress={() => navigation.navigate('GameSelect')} 
      />
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
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  stat: {
    fontSize: 14,
    color: '#45b7d1',
    fontWeight: 'bold',
  },
  wordContainer: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    minWidth: 200,
    alignItems: 'center',
  },
  currentWord: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ecdc4',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 250,
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