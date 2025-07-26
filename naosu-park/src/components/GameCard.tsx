import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

interface GameCardProps {
  children: React.ReactNode;
  variant?: 'character' | 'game' | 'item' | 'featured';
  padding?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
}

export default function GameCard({
  children,
  variant = 'game',
  padding = 'md',
  style,
}: GameCardProps) {
  const cardStyle = [
    styles.base,
    styles[variant],
    styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
    style,
  ];

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: BORDER_RADIUS.xl,
    backgroundColor: COLORS.surface,
    ...SHADOWS.md,
  },
  
  // バリエーション
  character: {
    borderWidth: 3,
    borderColor: COLORS.game.yellow,
    backgroundColor: COLORS.surface,
  },
  game: {
    borderWidth: 2,
    borderColor: COLORS.game.blue,
    backgroundColor: COLORS.surface,
  },
  item: {
    borderWidth: 2,
    borderColor: COLORS.game.green,
    backgroundColor: COLORS.surfaceVariant,
  },
  featured: {
    borderWidth: 3,
    borderColor: COLORS.game.red,
    backgroundColor: COLORS.surface,
  },
  
  // パディング
  paddingSm: {
    padding: SPACING.sm,
  },
  paddingMd: {
    padding: SPACING.md,
  },
  paddingLg: {
    padding: SPACING.lg,
  },
}); 