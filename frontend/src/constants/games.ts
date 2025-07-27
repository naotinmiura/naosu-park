import { LABELS } from './labels';

export interface GameConfig {
  id: string;
  name: string;
  title: string;
  description: string;
  icon?: string; // 将来的にアイコンを追加する場合
  hasResult: boolean; // 結果画面があるかどうか
  resultConfig?: {
    showScore: boolean;
    showTime: boolean;
    showAttempts: boolean;
  };
}

export const GAMES: Record<string, GameConfig> = {
  SLIDE_PUZZLE: {
    id: 'SLIDE_PUZZLE',
    name: LABELS.BUTTONS.SLIDE_PUZZLE,
    title: LABELS.SCREEN_TITLES.SLIDE_PUZZLE,
    description: '数字を正しい順序に並び替えるパズルゲーム',
    hasResult: true,
    resultConfig: {
      showScore: true,
      showTime: true,
      showAttempts: false,
    },
  },
  NUMBER_GUESS: {
    id: 'NUMBER_GUESS',
    name: LABELS.BUTTONS.NUMBER_GUESS,
    title: LABELS.SCREEN_TITLES.NUMBER_GUESS,
    description: '1から100までの数字を当てるゲーム',
    hasResult: true,
    resultConfig: {
      showScore: true,
      showTime: true,
      showAttempts: true,
    },
  },
  TYPING_GAME: {
    id: 'TYPING_GAME',
    name: LABELS.BUTTONS.TYPING_GAME,
    title: LABELS.SCREEN_TITLES.TYPING_GAME,
    description: '表示された単語を素早く入力するゲーム',
    hasResult: true,
    resultConfig: {
      showScore: true,
      showTime: true,
      showAttempts: false,
    },
  },
};

// ゲーム一覧を配列として取得
export const GAME_LIST = Object.values(GAMES);

// ゲームIDからゲーム設定を取得するヘルパー関数
export const getGameConfig = (gameId: string): GameConfig | undefined => {
  return GAMES[gameId];
};

// 利用可能なゲーム一覧を取得
export const getAvailableGames = (): GameConfig[] => {
  return GAME_LIST;
}; 