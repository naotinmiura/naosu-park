export const COLORS = {
  // ゲームテーマカラー
  game: {
    yellow: '#FFD700',      // 明るい黄色
    red: '#FF6B6B',         // 明るい赤
    blue: '#4A90E2',        // 明るい青
    green: '#4ECDC4',       // 明るい緑
    orange: '#FF8C42',      // 明るいオレンジ
    purple: '#9B59B6',      // 明るい紫
    pink: '#FF69B4',        // 明るいピンク
    brown: '#8B4513',       // 茶色
  },
  
  // プライマリカラー（メインのブランドカラー）
  primary: '#4A90E2',       // 明るい青
  primaryLight: '#7BB3F0',
  primaryDark: '#2E5C8A',
  
  // セカンダリカラー（アクセント）
  secondary: '#FFD700',     // 明るい黄色
  secondaryLight: '#FFF4B0',
  secondaryDark: '#FFB300',
  
  // 背景色
  background: '#FFFFFF',    // 明るい白
  surface: '#FFFFFF',
  surfaceVariant: '#F8F9FA',
  
  // テキスト色
  textPrimary: '#1A1A1A',
  textSecondary: '#666666',
  textTertiary: '#999999',
  
  // 状態色
  success: '#4ECDC4',       // 明るい緑
  warning: '#FF8C42',       // 明るいオレンジ
  error: '#FF6B6B',         // 明るい赤
  info: '#4A90E2',          // 明るい青
  
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

// ゲームテーマ用スタイル
export const GAME_STYLES = {
  // ロゴスタイル
  logo: {
    fontSize: TYPOGRAPHY.fontSize['4xl'],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.game.yellow,
    textShadowColor: COLORS.game.blue,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
    marginBottom: SPACING.md,
  },
  
  // ゲームボタン
  gameButton: {
    backgroundColor: COLORS.game.red,
    borderRadius: BORDER_RADIUS.xl,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    shadowColor: COLORS.game.red,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  
  // 背景パターン
  backgroundPattern: {
    backgroundColor: COLORS.background,
    // 背景に可愛らしいパターンを追加する場合は、
    // カスタムコンポーネントで実装
  },
  
  // キャラクターカード
  characterCard: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 2,
    borderColor: COLORS.game.yellow,
  },
} as const; 