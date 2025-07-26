import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';

type Props = NativeStackScreenProps<PageList, 'SlidePuzzle'>;

export default function SlidePuzzleScreen({ navigation }: Props) {
  const size = 3; // 3x3
  const [tiles, setTiles] = useState<number[]>([]);

  useEffect(() => {
    resetBoard();
  }, []);

  const resetBoard = () => {
    // 1-8 + 空白(0) の配列をシャッフル
    const arr = Array.from({ length: size * size }, (_, i) => (i === size * size - 1 ? 0 : i + 1));
    setTiles(shuffle(arr));
  };

  const shuffle = (array: number[]) => {
    // フィッシャー・イェーツシャッフル
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const moveTile = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    const diff = Math.abs(emptyIndex - index);
    // 上下左右の隣なら移動
    if (
      diff === 1 && Math.floor(emptyIndex / size) === Math.floor(index / size) ||
      diff === size
    ) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);

      if (isSolved(newTiles)) {
        Alert.alert(LABELS.MESSAGES.CONGRATULATIONS, LABELS.MESSAGES.CLEAR, [
          { text: LABELS.MESSAGES.OK, onPress: () => navigation.goBack() }
        ]);
      }
    }
  };

  const isSolved = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== i + 1) return false;
    }
    return arr[arr.length - 1] === 0;
  };

  const renderTile = ({ item, index }: { item: number; index: number }) => (
    <TouchableOpacity
      style={[styles.tile, item === 0 && styles.emptyTile]}
      onPress={() => moveTile(index)}
    >
      {item !== 0 && <Text style={styles.tileText}>{item}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.SCREEN_TITLES.SLIDE_PUZZLE}</Text>
      <FlatList
        data={tiles}
        renderItem={renderTile}
        keyExtractor={(_, i) => i.toString()}
        numColumns={size}
        scrollEnabled={false}
      />
      <TouchableOpacity style={styles.resetButton} onPress={resetBoard}>
        <Text style={styles.resetText}>{LABELS.BUTTONS.RESET}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  tile: {
    width: 80, height: 80, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#ddd', margin: 2, borderRadius: 8
  },
  emptyTile: { backgroundColor: '#fff' },
  tileText: { fontSize: 24, fontWeight: 'bold' },
  resetButton: {
    marginTop: 20, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#4cafef', borderRadius: 8
  },
  resetText: { color: '#fff', fontWeight: 'bold' },
});
