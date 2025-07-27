"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const dynamo = new aws_sdk_1.DynamoDB.DocumentClient({
    endpoint: process.env.DYNAMO_ENDPOINT,
    region: process.env.AWS_REGION,
});
exports.default = dynamo;
