export default class {
  apiUrl: string;

  constructor(public gameId: number) {
    this.apiUrl = 'http://localhost:3000';
  }

  async guess() {
    const url = `${this.apiUrl}/guess`;
    const postData = {
      gameId: this.gameId,
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

  async gameState() {
    const url = `${this.apiUrl}/game-state/${this.gameId}`;
    const response = await fetch(url);
    const responseData = await response.json();
    console.log('gameState', responseData);
    return responseData;
  }
}
