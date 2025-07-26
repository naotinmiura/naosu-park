import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { COMMON_STYLES, GAME_STYLES, COLORS, SPACING } from '../constants/theme';
import { GameButton, BackgroundPattern } from '../components';

type Props = NativeStackScreenProps<PageList, 'Start'>;

export default function StartScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <BackgroundPattern variant="stars" opacity={0.05} />
      <View style={styles.content}>
        <Text style={styles.logo}>NAOSU PARK</Text>
        <Text style={styles.subtitle}>ナオスパーク</Text>
        <Text style={styles.description}>楽しいゲームの世界へようこそ！</Text>
        <GameButton 
          title="スタート" 
          onPress={() => navigation.navigate('Home')}
          variant="primary"
          size="lg"
          fullWidth
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>©2025 NAOSU PARK.</Text>
        <Text style={styles.copyright}>Made with ❤️ for fun</Text>
        <Text style={styles.version}>Ver. 1.0.0</Text>
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
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    ...GAME_STYLES.logo,
    fontSize: 42,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: COLORS.game.blue,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  copyright: {
    fontSize: 10,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  version: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
});
