import { LABELS } from './labels';

export type GameConfig = {
  id: string;
  name: string;
  title: string;
  description: string;
  hasResult: boolean;
  resultConfig: {
    showScore: boolean;
    showTime: boolean;
    showAttempts: boolean;
  };
};

export const GAMES: Record<string, GameConfig> = {
  SLIDE_PUZZLE: {
    id: 'SLIDE_PUZZLE',
    name: LABELS.SCREEN_TITLES.SLIDE_PUZZLE,
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
    name: LABELS.SCREEN_TITLES.NUMBER_GUESS,
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
    name: LABELS.SCREEN_TITLES.TYPING_GAME,
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

export function getGameConfig(gameName: string): GameConfig | undefined {
  return GAMES[gameName];
}

export function getAvailableGames(): GameConfig[] {
  return Object.values(GAMES);
} 