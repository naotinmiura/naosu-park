import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { COMMON_STYLES, SPACING, COLORS } from '../constants/theme';
import { GameButton, Input, GameCard, BackgroundPattern } from '../components';

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
      <BackgroundPattern variant="dots" opacity={0.03} />
      <View style={styles.content}>
        <Text style={styles.title}>{LABELS.SCREEN_TITLES.TYPING_GAME}</Text>
        <Text style={styles.instruction}>{LABELS.MESSAGES.TYPING_INSTRUCTION}</Text>
        
        <GameCard style={styles.statsContainer} variant="item">
          <View style={styles.statsRow}>
            <Text style={styles.stat}>{LABELS.MESSAGES.TYPING_WORD_COUNT}: {wordCount}</Text>
            <Text style={styles.stat}>{LABELS.MESSAGES.TYPING_CORRECT_COUNT}: {correctCount}</Text>
            <Text style={styles.stat}>{LABELS.MESSAGES.TYPING_ACCURACY}: {accuracy}%</Text>
          </View>
        </GameCard>

        <GameCard style={styles.wordContainer} variant="featured">
          <Text style={styles.currentWord}>{currentWord}</Text>
        </GameCard>

        <Input
          value={userInput}
          onChangeText={setUserInput}
          placeholder={LABELS.MESSAGES.TYPING_PLACEHOLDER}
          autoFocus={true}
          onSubmitEditing={handleSubmit}
          editable={isGameActive}
          size="lg"
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <GameButton 
            title={LABELS.MESSAGES.TYPING_SUBMIT} 
            onPress={handleSubmit}
            disabled={!isGameActive || !userInput.trim()}
            variant="primary"
            size="lg"
          />
          <GameButton 
            title={LABELS.BUTTONS.RESET} 
            onPress={handleReset}
            variant="secondary"
            size="lg"
          />
          <GameButton 
            title={LABELS.MESSAGES.TYPING_GAME_END} 
            onPress={handleGameComplete}
            disabled={wordCount === 0}
            variant="success"
            size="lg"
          />
        </View>

        <GameButton 
          title={LABELS.MESSAGES.BACK_TO_GAME_SELECT} 
          onPress={() => navigation.navigate('GameSelect')}
          variant="warning"
          size="md"
        />
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
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    ...COMMON_STYLES.title,
    color: COLORS.game.blue,
    marginBottom: SPACING.md,
  },
  instruction: {
    ...COMMON_STYLES.bodyText,
    marginBottom: SPACING.lg,
    textAlign: 'center',
    color: COLORS.textSecondary,
  },
  statsContainer: {
    width: '100%',
    marginBottom: SPACING.lg,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stat: {
    fontSize: 14,
    color: COLORS.game.green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wordContainer: {
    width: '100%',
    marginBottom: SPACING.lg,
    alignItems: 'center',
  },
  currentWord: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.game.blue,
    textAlign: 'center',
  },
  input: {
    width: 280,
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