export interface GameData {
  readonly gameId: string;
  readonly round: Date;
  readonly lang: string;
  readonly turn: 'red' | 'blue';
  readonly steps: number[];
  readonly wordSet: string[];
  readonly layout: string[];
  readonly revealed: boolean[];
}

declare const API_URL: string;

export default class {
  private apiUrl: string = API_URL;
  private headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
  };

  constructor(public gameId: string) {}

  setLang(lang: string): void {
    this.headers['Accept-Language'] = lang;
  }

  async guess(boxLocation: number): Promise<Record<string, unknown>> {
    const url = `${this.apiUrl}/guess`;
    const postData = {
      gameId: this.gameId,
      boxLocation: boxLocation,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(postData),
    });
    const responseData = await response.json();
    return responseData;
  }

  async changeTurns(turn: 'red' | 'blue'): Promise<void> {
    const url = `${this.apiUrl}/change-turns`;
    const postData = {
      gameId: this.gameId,
      turn: turn,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(postData),
    });
    await response.json();
  }

  async newGame(): Promise<GameData> {
    const url = `${this.apiUrl}/new-game/${this.gameId}`;
    const response = await fetch(url, { method: 'POST', headers: this.headers });
    const responseData = await response.json();
    const data: GameData = {
      gameId: responseData.id,
      round: responseData.round,
      lang: responseData.lang,
      turn: responseData.turn,
      steps: responseData.steps,
      wordSet: responseData.wordSet,
      layout: responseData.layout,
      revealed: responseData.revealed,
    };
    return data;
  }

  async gameState(): Promise<GameData> {
    const url = `${this.apiUrl}/game-state/${this.gameId}`;
    const response = await fetch(url, { headers: this.headers });
    const responseData = await response.json();
    const data: GameData = {
      gameId: responseData.id,
      round: responseData.round,
      lang: responseData.lang,
      turn: responseData.turn,
      steps: responseData.steps,
      wordSet: responseData.wordSet,
      layout: responseData.layout,
      revealed: responseData.revealed,
    };
    return data;
  }
}
