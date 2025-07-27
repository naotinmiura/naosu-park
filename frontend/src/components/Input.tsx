import React from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '../constants/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  variant?: 'default' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
}

export default function Input({
  label,
  error,
  variant = 'default',
  size = 'md',
  style,
  ...textInputProps
}: InputProps) {
  const inputStyle = [
    styles.base,
    styles[variant],
    styles[size],
    error && styles.error,
    style,
  ];

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={inputStyle}
        placeholderTextColor={COLORS.textTertiary}
        {...textInputProps}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  
  label: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: TYPOGRAPHY.fontWeight.medium,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  
  base: {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  
  // バリエーション
  default: {
    borderColor: COLORS.border,
  },
  outlined: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  
  // サイズ
  sm: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    fontSize: TYPOGRAPHY.fontSize.sm,
    minHeight: 36,
  },
  md: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    fontSize: TYPOGRAPHY.fontSize.base,
    minHeight: 44,
  },
  lg: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    fontSize: TYPOGRAPHY.fontSize.lg,
    minHeight: 52,
  },
  
  // エラー状態
  error: {
    borderColor: COLORS.error,
  },
  
  errorText: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.error,
    marginTop: SPACING.xs,
  },
}); 