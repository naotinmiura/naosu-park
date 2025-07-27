import { APIGatewayProxyHandler } from 'aws-lambda';
import dynamo from '../dynamoClient';

export const postScore: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const { user_id, game_id, score } = body;

  if (!user_id || !game_id || typeof score !== 'number') {
    return { statusCode: 400, body: 'Invalid request' };
  }

  await dynamo.put({
    TableName: 'scores',
    Item: { user_id, game_id, score, timestamp: Date.now() },
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Score saved!' }),
  };
};
