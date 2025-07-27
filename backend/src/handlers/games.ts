import { APIGatewayProxyHandler } from 'aws-lambda';

export const getGames: APIGatewayProxyHandler = async () => {
  const games = [
    { game_id: 'slide_puzzle', name: 'スライドパズル' },
    { game_id: 'reflex_tap', name: '反射タップ' },
    { game_id: 'memory_pattern', name: '記憶パターン' }
  ];
  return {
    statusCode: 200,
    body: JSON.stringify(games),
  };
};
