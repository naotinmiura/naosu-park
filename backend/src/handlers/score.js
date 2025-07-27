"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postScore = void 0;
const dynamoClient_1 = __importDefault(require("../dynamoClient"));
const postScore = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const body = JSON.parse(event.body || '{}');
    const { user_id, game_id, score } = body;
    if (!user_id || !game_id || typeof score !== 'number') {
        return { statusCode: 400, body: 'Invalid request' };
    }
    yield dynamoClient_1.default.put({
        TableName: 'scores',
        Item: { user_id, game_id, score, timestamp: Date.now() },
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Score saved!' }),
    };
});
exports.postScore = postScore;
