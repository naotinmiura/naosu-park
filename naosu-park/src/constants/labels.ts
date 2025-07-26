// アプリ全体で使用するラベル定数
export const LABELS = {
  // アプリ名
  APP_NAME: 'NAOSU PARK',
  
  // 画面タイトル
  SCREEN_TITLES: {
    HOME: 'ホーム',
    GAME_SELECT: 'ゲーム選択',
    SLIDE_PUZZLE: 'スライドパズル',
  },
  
  // ボタンラベル
  BUTTONS: {
    START: 'スタート',
    GAME_SELECT: 'ゲーム選択',
    SLIDE_PUZZLE: 'スライドパズル',
    RESET: 'リセット',
  },
  
  // メッセージ
  MESSAGES: {
    CONGRATULATIONS: 'おめでとう！',
    CLEAR: 'クリアしました！',
    OK: 'OK',
  },
} as const; 