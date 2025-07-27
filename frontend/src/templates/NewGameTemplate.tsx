import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';

type Props = NativeStackScreenProps<PageList, keyof PageList>;

export default function NewGameScreen({ navigation }: Props) {
  const [gameState, setGameState] = useState<any>({});
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    // ゲーム初期化処理
    setStartTime(Date.now());
  }, []);

  const handleGameComplete = () => {
    // ゲーム完了時の処理
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const score = 1000; // スコア計算ロジック
    
    navigation.navigate('GameResult', {
      gameName: 'NEW_GAME', // ゲームID
      score: score,
      time: elapsedTime,
      attempts: 0, // 必要に応じて
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>新しいゲーム</Text>
      {/* ゲームのUIをここに実装 */}
      
      <Button title="ゲーム完了（テスト用）" onPress={handleGameComplete} />
      <Button title="ゲーム選択に戻る" onPress={() => navigation.navigate('GameSelect')} />
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
}); 