// アプリ全体で使用するラベル定数
export const LABELS = {
  // アプリ名
  APP_NAME: 'NAOSU PARK',
  
  // 画面タイトル
  SCREEN_TITLES: {
    HOME: 'ホーム',
    GAME_SELECT: 'ゲーム選択',
    SLIDE_PUZZLE: 'スライドパズル',
    NUMBER_GUESS: '数字当てゲーム',
  },
  
  // ボタンラベル
  BUTTONS: {
    START: 'スタート',
    GAME_SELECT: 'ゲーム選択',
    SLIDE_PUZZLE: 'スライドパズル',
    NUMBER_GUESS: '数字当てゲーム',
    RESET: 'リセット',
  },
  
  // メッセージ
  MESSAGES: {
    CONGRATULATIONS: 'おめでとう！',
    CLEAR: 'クリアしました！',
    OK: 'OK',
    NUMBER_GUESS_INSTRUCTION: '1から100までの数字を当ててください！',
    NUMBER_GUESS_HIGHER: 'もっと大きい数字です！',
    NUMBER_GUESS_LOWER: 'もっと小さい数字です！',
    NUMBER_GUESS_ERROR: '1から100までの有効な数字を入力してください。',
    ATTEMPTS: '試行回数',
    GUESS_BUTTON: '予想する',
    BACK_TO_GAME_SELECT: 'ゲーム選択に戻る',
    INPUT_PLACEHOLDER: '数字を入力',
  },
} as const; 