export const COLORS = {
  // プライマリカラー（メインのブランドカラー）
  primary: '#4A90E2',
  primaryLight: '#7BB3F0',
  primaryDark: '#2E5C8A',
  
  // セカンダリカラー（アクセント）
  secondary: '#F39C12',
  secondaryLight: '#F7DC6F',
  secondaryDark: '#D68910',
  
  // 背景色
  background: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceVariant: '#F1F3F4',
  
  // テキスト色
  textPrimary: '#1A1A1A',
  textSecondary: '#666666',
  textTertiary: '#999999',
  
  // 状態色
  success: '#27AE60',
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB',
  
  // ボーダー色
  border: '#E1E8ED',
  borderLight: '#F0F0F0',
  
  // シャドウ色
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',
} as const;

export const TYPOGRAPHY = {
  // フォントサイズ
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  
  // フォントウェイト
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // 行間
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const SHADOWS = {
  sm: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

// 共通スタイル
export const COMMON_STYLES = {
  // コンテナ
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  
  // 中央配置コンテナ
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  
  // タイトル
  title: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
    textAlign: 'center' as const,
  },
  
  // サブタイトル
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: TYPOGRAPHY.fontWeight.medium,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    textAlign: 'center' as const,
  },
  
  // 本文
  bodyText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.textPrimary,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
  },
  
  // キャプション
  caption: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
  },
} as const; 