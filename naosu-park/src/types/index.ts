// ゲーム関連の型定義
export interface Game {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isAvailable: boolean;
}

// ユーザー関連の型定義
export interface User {
  id: string;
  name: string;
  score: number;
  level: number;
}

// ナビゲーション関連の型定義
export type RootStackParamList = {
  Start: undefined;
  Home: undefined;
  GameSelect: undefined;
}; 