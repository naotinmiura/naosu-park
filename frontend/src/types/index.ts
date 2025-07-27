export type PageList = {
  Start: undefined;
  Home: undefined;
  GameSelect: undefined;
  SlidePuzzle: undefined;
  NumberGuess: undefined;
  TypingGame: undefined;
  GameResult: {
    gameName: string;
    score: number;
    time: number;
    attempts?: number;
  };
}; 

export type Game = {
  game_id: string;
  name: string;
  description: string;
};