import { DynamoDB } from 'aws-sdk';

const dynamo = new DynamoDB.DocumentClient({
  endpoint: process.env.DYNAMO_ENDPOINT,
  region: process.env.AWS_REGION,
});

export default dynamo;
