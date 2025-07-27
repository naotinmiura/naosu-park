import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

type GameButtonVariant = 'primary' | 'secondary' | 'success' | 'warning';
type GameButtonSize = 'sm' | 'md' | 'lg';

interface GameButtonProps {
  title: string;
  onPress: () => void;
  variant?: GameButtonVariant;
  size?: GameButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function GameButton({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
}: GameButtonProps) {
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const textStyleCombined = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={textStyleCombined}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: BORDER_RADIUS.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    ...SHADOWS.lg,
  },
  
  // バリエーション
  primary: {
    backgroundColor: COLORS.game.red,
    borderColor: COLORS.game.red,
  },
  secondary: {
    backgroundColor: COLORS.game.blue,
    borderColor: COLORS.game.blue,
  },
  success: {
    backgroundColor: COLORS.game.green,
    borderColor: COLORS.game.green,
  },
  warning: {
    backgroundColor: COLORS.game.orange,
    borderColor: COLORS.game.orange,
  },
  
  // サイズ
  sm: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    minHeight: 40,
  },
  md: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    minHeight: 50,
  },
  lg: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    minHeight: 60,
  },
  
  // 幅
  fullWidth: {
    width: '100%',
  },
  
  // 無効状態
  disabled: {
    opacity: 0.5,
  },
  
  // テキストスタイル
  text: {
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    textAlign: 'center',
    color: COLORS.surface,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  
  primaryText: {
    color: COLORS.surface,
  },
  secondaryText: {
    color: COLORS.surface,
  },
  successText: {
    color: COLORS.surface,
  },
  warningText: {
    color: COLORS.surface,
  },
  
  smText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  mdText: {
    fontSize: TYPOGRAPHY.fontSize.base,
  },
  lgText: {
    fontSize: TYPOGRAPHY.fontSize.lg,
  },
  
  disabledText: {
    color: COLORS.textTertiary,
  },
}); 