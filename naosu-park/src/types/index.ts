export type PageList = {
  Start: undefined;
  Home: undefined;
  GameSelect: undefined;
  SlidePuzzle: undefined;
  NumberGuess: undefined;
  GameResult: {
    gameName: string;
    score: number;
    time: number;
    attempts?: number;
  };
}; 