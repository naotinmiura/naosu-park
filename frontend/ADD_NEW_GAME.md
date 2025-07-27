# 新しいゲームを追加する手順

## 1. ゲーム設定を追加

`src/constants/games.ts` に新しいゲームの設定を追加：

```typescript
NEW_GAME: {
  id: 'NEW_GAME',
  name: LABELS.BUTTONS.NEW_GAME,
  title: LABELS.SCREEN_TITLES.NEW_GAME,
  description: '新しいゲームの説明',
  hasResult: true,
  resultConfig: {
    showScore: true,
    showTime: true,
    showAttempts: false, // 必要に応じて
  },
},
```

## 2. ラベルを追加

`src/constants/labels.ts` に新しいゲームのラベルを追加：

```typescript
// 画面タイトル
SCREEN_TITLES: {
  // ... 既存のラベル
  NEW_GAME: '新しいゲーム',
},

// ボタンラベル
BUTTONS: {
  // ... 既存のラベル
  NEW_GAME: '新しいゲーム',
},

// メッセージ
MESSAGES: {
  // ... 既存のラベル
  NEW_GAME_INSTRUCTION: 'ゲームの説明文',
  // 必要に応じて他のメッセージも追加
},
```

## 3. 型定義を追加

`src/types/index.ts` に新しい画面を追加：

```typescript
export type PageList = {
  // ... 既存の画面
  NewGame: undefined;
};
```

## 4. ゲーム画面を作成

`src/screens/NewGameScreen.tsx` を作成：

```typescript
// src/templates/NewGameTemplate.tsx をコピーして使用
// ゲームのロジックを実装
// 正解時に GameResult 画面に遷移
```

## 5. ナビゲーションに追加

`src/navigation/AppNavigator.tsx` に新しい画面を追加：

```typescript
import NewGameScreen from "../screens/NewGameScreen";

// Stack.Screen に追加
<Stack.Screen name="NewGame" component={NewGameScreen} />;
```

## 6. ゲーム選択画面に追加

`src/screens/GameSelectScreen.tsx` の `handleGameSelect` 関数に新しいケースを追加：

```typescript
case 'NEW_GAME':
  navigation.navigate('NewGame');
  break;
```

## 7. テスト

- ゲーム選択画面で新しいゲームが表示されることを確認
- ゲームが正常に動作することを確認
- 正解時に結果画面が正しく表示されることを確認

## 注意事項

- ゲーム ID は一意である必要があります
- ラベルは多言語対応を考慮して定数として定義してください
- 結果画面の設定は各ゲームの特性に合わせて調整してください
