import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../constants/theme';

interface BackgroundPatternProps {
  variant?: 'dots' | 'circles' | 'stars' | 'mixed';
  opacity?: number;
  style?: ViewStyle;
}

export default function BackgroundPattern({
  variant = 'dots',
  opacity = 0.1,
  style,
}: BackgroundPatternProps) {
  // 実際のアプリでは、SVGや画像を使用してパターンを表示
  // ここでは簡易的な実装として、CSSパターンを模倣
  const patternStyle = [
    styles.base,
    styles[variant],
    { opacity },
    style,
  ];

  return <View style={patternStyle} />;
}

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  
  dots: {
    backgroundColor: COLORS.background,
    // 実際の実装では、ドットパターンを表示
    // 例: backgroundImage: 'url(dots-pattern.svg)',
  },
  
  circles: {
    backgroundColor: COLORS.background,
    // 実際の実装では、円形パターンを表示
    // 例: backgroundImage: 'url(circles-pattern.svg)',
  },
  
  stars: {
    backgroundColor: COLORS.background,
    // 実際の実装では、星のパターンを表示
    // 例: backgroundImage: 'url(stars-pattern.svg)',
  },
  
  mixed: {
    backgroundColor: COLORS.background,
    // 実際の実装では、複数のパターンを組み合わせ
    // 例: backgroundImage: 'url(mixed-pattern.svg)',
  },
}); 