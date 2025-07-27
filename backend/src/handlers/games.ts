import { APIGatewayProxyHandler } from 'aws-lambda';

export const getGames: APIGatewayProxyHandler = async () => {
  const games = [
    {
      game_id: 'SLIDE_PUZZLE',
      name: 'スライドパズル',
      title: 'スライドパズル',
      description: '数字を正しい順序に並び替えるパズルゲーム',
      hasResult: true,
      resultConfig: {
        showScore: true,
        showTime: true,
        showAttempts: false,
      }
    },
    {
      game_id: 'NUMBER_GUESS',
      name: '数字当てゲーム',
      title: '数字当てゲーム',
      description: '1から100までの数字を当てるゲーム',
      hasResult: true,
      resultConfig: {
        showScore: true,
        showTime: true,
        showAttempts: true,
      }
    },
    {
      game_id: 'TYPING_GAME',
      name: 'タイピングゲーム',
      title: 'タイピングゲーム',
      description: '表示された単語を素早く入力するゲーム',
      hasResult: true,
      resultConfig: {
        showScore: true,
        showTime: true,
        showAttempts: false,
      }
    }
  ];
  return {
    statusCode: 200,
    body: JSON.stringify(games),
  };
};
