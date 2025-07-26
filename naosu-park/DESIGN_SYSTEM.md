# デザインシステム

このプロジェクトでは、統一された世界観を提供するためのデザインシステムを実装しています。

## 🎨 テーマシステム

### カラーパレット

```typescript
import { COLORS } from "../constants/theme";

// プライマリカラー（メインのブランドカラー）
COLORS.primary; // #4A90E2
COLORS.primaryLight; // #7BB3F0
COLORS.primaryDark; // #2E5C8A

// セカンダリカラー（アクセント）
COLORS.secondary; // #F39C12
COLORS.secondaryLight; // #F7DC6F
COLORS.secondaryDark; // #D68910

// 背景色
COLORS.background; // #F8F9FA
COLORS.surface; // #FFFFFF
COLORS.surfaceVariant; // #F1F3F4

// テキスト色
COLORS.textPrimary; // #1A1A1A
COLORS.textSecondary; // #666666
COLORS.textTertiary; // #999999

// 状態色
COLORS.success; // #27AE60
COLORS.warning; // #F39C12
COLORS.error; // #E74C3C
COLORS.info; // #3498DB
```

### タイポグラフィ

```typescript
import { TYPOGRAPHY } from "../constants/theme";

// フォントサイズ
TYPOGRAPHY.fontSize.xs; // 12
TYPOGRAPHY.fontSize.sm; // 14
TYPOGRAPHY.fontSize.base; // 16
TYPOGRAPHY.fontSize.lg; // 18
TYPOGRAPHY.fontSize.xl; // 20
TYPOGRAPHY.fontSize["2xl"]; // 24
TYPOGRAPHY.fontSize["3xl"]; // 30
TYPOGRAPHY.fontSize["4xl"]; // 36

// フォントウェイト
TYPOGRAPHY.fontWeight.normal; // '400'
TYPOGRAPHY.fontWeight.medium; // '500'
TYPOGRAPHY.fontWeight.semibold; // '600'
TYPOGRAPHY.fontWeight.bold; // '700'
```

### スペーシング

```typescript
import { SPACING } from "../constants/theme";

SPACING.xs; // 4
SPACING.sm; // 8
SPACING.md; // 16
SPACING.lg; // 24
SPACING.xl; // 32
SPACING["2xl"]; // 48
SPACING["3xl"]; // 64
```

## 🧩 共通コンポーネント

### Button

```typescript
import { Button } from "../components";

<Button
  title="ボタンテキスト"
  onPress={() => {}}
  variant="primary" // 'primary' | 'secondary' | 'outline' | 'ghost'
  size="md" // 'sm' | 'md' | 'lg'
  disabled={false}
  fullWidth={false}
/>;
```

### Card

```typescript
import { Card } from "../components";

<Card
  variant="default" // 'default' | 'elevated' | 'outlined'
  padding="md" // 'sm' | 'md' | 'lg'
>
  <Text>カードの内容</Text>
</Card>;
```

### Input

```typescript
import { Input } from "../components";

<Input
  label="ラベル"
  placeholder="プレースホルダー"
  value={value}
  onChangeText={setValue}
  variant="default" // 'default' | 'outlined'
  size="md" // 'sm' | 'md' | 'lg'
  error="エラーメッセージ"
/>;
```

## 📱 共通スタイル

```typescript
import { COMMON_STYLES } from "../constants/theme";

// コンテナ
COMMON_STYLES.container; // 基本コンテナ
COMMON_STYLES.centerContainer; // 中央配置コンテナ

// テキスト
COMMON_STYLES.title; // タイトル
COMMON_STYLES.subtitle; // サブタイトル
COMMON_STYLES.bodyText; // 本文
COMMON_STYLES.caption; // キャプション
```

## 🎯 使用ガイドライン

### 1. 一貫性を保つ

- 同じ要素には同じスタイルを使用する
- カスタムスタイルを作る前に、既存のコンポーネントやスタイルを確認する

### 2. レスポンシブデザイン

- 固定値ではなく、SPACING や TYPOGRAPHY の値を使用する
- 画面サイズに応じて適切なサイズを選択する

### 3. アクセシビリティ

- 十分なコントラスト比を保つ
- タッチターゲットは最小 44px を確保する

### 4. パフォーマンス

- スタイルは StyleSheet.create()で定義する
- 不要な再レンダリングを避ける

## 🔄 テーマの拡張

新しいゲームや機能を追加する際は、既存のデザインシステムに従ってください：

1. 新しい色が必要な場合は、`COLORS`に追加
2. 新しいコンポーネントが必要な場合は、`components/`ディレクトリに追加
3. 新しいスタイルが必要な場合は、`COMMON_STYLES`に追加

## 📝 例

```typescript
// 良い例
const styles = StyleSheet.create({
  container: {
    ...COMMON_STYLES.centerContainer,
  },
  title: {
    ...COMMON_STYLES.title,
    color: COLORS.primary,
  },
  button: {
    marginTop: SPACING.lg,
  },
});

// 悪い例
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
```

このデザインシステムにより、アプリ全体で一貫した世界観とユーザーエクスペリエンスを提供できます。
