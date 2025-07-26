import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { COMMON_STYLES, SPACING, COLORS, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { GameButton, BackgroundPattern } from '../components';

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
      <BackgroundPattern variant="circles" opacity={0.03} />
      <View style={styles.content}>
        <Text style={styles.title}>{LABELS.SCREEN_TITLES.SLIDE_PUZZLE}</Text>
        <View style={styles.puzzleContainer}>
          <FlatList
            data={tiles}
            renderItem={renderTile}
            keyExtractor={(_, i) => i.toString()}
            numColumns={size}
            scrollEnabled={false}
          />
        </View>
        <View style={styles.buttonContainer}>
          <GameButton 
            title={LABELS.BUTTONS.RESET} 
            onPress={resetBoard}
            variant="primary"
            size="lg"
          />
          <GameButton 
            title="ゲーム選択に戻る" 
            onPress={() => navigation.navigate('GameSelect')}
            variant="secondary"
            size="lg"
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
    ...COMMON_STYLES.title,
    color: COLORS.game.purple,
    marginBottom: SPACING.lg,
  },
  puzzleContainer: {
    marginBottom: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    ...SHADOWS.md,
  },
  tile: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.game.blue,
    margin: 2,
    borderRadius: BORDER_RADIUS.md,
    ...SHADOWS.sm,
  },
  emptyTile: {
    backgroundColor: COLORS.surfaceVariant,
    borderWidth: 2,
    borderColor: COLORS.game.blue,
    borderStyle: 'dashed',
  },
  tileText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.surface,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: SPACING.md,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
