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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGames = void 0;
const getGames = () => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getGames = getGames;
