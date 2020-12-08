export interface GameData {
  readonly gameId: string;
  readonly round: number;
  readonly steps: number[];
  readonly wordSet: string[];
  readonly layout: string[];
  readonly revealed: boolean[];
  // turn
}

export default class {
  apiUrl = 'http://localhost:3000';

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
    console.log(responseData);
    return responseData;
  }

  async newGame(): Promise<GameData> {
    const url = `${this.apiUrl}/new-game/${this.gameId}`;
    const response = await fetch(url);
    const responseData = await response.json();
    const data: GameData = {
      gameId: responseData.gameId,
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
    console.log(responseData);
    const data: GameData = {
      gameId: responseData.gameId,
      round: responseData.round,
      steps: responseData.steps,
      wordSet: responseData.wordSet,
      layout: responseData.layout,
      revealed: responseData.revealed,
    };
    return data;
  }
}
