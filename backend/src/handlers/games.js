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
        { game_id: 'slide_puzzle', name: 'スライドパズル' },
        { game_id: 'reflex_tap', name: '反射タップ' },
        { game_id: 'memory_pattern', name: '記憶パターン' }
    ];
    return {
        statusCode: 200,
        body: JSON.stringify(games),
    };
});
exports.getGames = getGames;
