import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameSelectScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ゲーム選択</Text>
      <Text>スライドパズル / 反射タップ / 記憶パターン</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
