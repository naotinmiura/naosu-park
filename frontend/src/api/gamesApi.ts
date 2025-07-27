import { apiClient } from "./apiClient";

export type Game = {
  game_id: string;
  name: string;
};

export async function fetchGames(): Promise<Game[]> {
  const response = await apiClient.get<Game[]>("/games");
  return response.data;
}
