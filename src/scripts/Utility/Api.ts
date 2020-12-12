export interface GameData {
  readonly gameId: string;
  readonly round: Date;
  readonly steps: number[];
  readonly wordSet: string[];
  readonly layout: string[];
  readonly revealed: boolean[];
}

declare const API_URL: string;

export default class {
  apiUrl: string = API_URL;

  constructor(public gameId: string) {}

  async guess(boxLocation: number): Promise<Record<string, unknown>> {
    const url = `${this.apiUrl}/guess`;
    const postData = {
      gameId: this.gameId,
      boxLocation: boxLocation,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const responseData = await response.json();
    return responseData;
  }

  async newGame(): Promise<GameData> {
    const url = `${this.apiUrl}/new-game/${this.gameId}`;
    const response = await fetch(url, { method: 'POST' });
    const responseData = await response.json();
    const data: GameData = {
      gameId: responseData.id,
      round: responseData.round,
      steps: responseData.steps,
      wordSet: responseData.wordSet,
      layout: responseData.layout,
      revealed: responseData.revealed,
    };
    return data;
  }

  async gameState(): Promise<GameData> {
    const url = `${this.apiUrl}/game-state/${this.gameId}`;
    const response = await fetch(url);
    const responseData = await response.json();
    const data: GameData = {
      gameId: responseData.id,
      round: responseData.round,
      steps: responseData.steps,
      wordSet: responseData.wordSet,
      layout: responseData.layout,
      revealed: responseData.revealed,
    };
    return data;
  }
}
