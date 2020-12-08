import Box from './Box';
import Api, { GameData } from '../Utility/Api';

export default class {
  messageEl: HTMLDivElement;
  api: Api;
  boxes: Box[] = [];
  steps!: number;
  round: Date;
  gameOver!: boolean;
  spymasterView!: boolean;
  redCount!: number;
  blueCount!: number;
  turn!: 'red' | 'blue';
  private gameData!: GameData;
  private intervalFn!: NodeJS.Timeout;

  get turnLabel(): string {
    return this.turn.charAt(0).toUpperCase() + this.turn.slice(1);
  }

  constructor(public gameId: string) {
    this.messageEl = document.getElementById('message') as HTMLDivElement;
    this.api = new Api(this.gameId);
    this.round = new Date();
    this.api.gameState().then((data) => {
      this.gameData = data;
      this.reset();
      this.updateGameState(data);
      this.render();
    });
  }

  private reset(): void {
    this.messageEl.textContent = '';

    clearInterval(this.intervalFn);
    this.round = this.gameData.round;
    this.steps = 0;
    this.redCount = 0;
    this.blueCount = 0;
    this.gameOver = false;
    this.spymasterView = false;
    this.createBoxes();
    this.changeTurns();
    this.updateScore();
    this.gameStateInterval(5000);
  }

  private createBoxes(): void {
    const createNewBoxes = this.boxes.length === 0 ? true : false;

    for (let i = 0; i < this.gameData.wordSet.length; i += 1) {
      const word = this.gameData.wordSet[i];
      const type = this.gameData.layout[i];

      if (createNewBoxes) {
        this.boxes.push(new Box(`box${i.toString()}`, word, type, this.determineWinner.bind(this)));
      } else {
        this.boxes[i].reset(word, type);
      }
    }
  }

  private updateGameState(data: GameData): void {
    if (this.round !== data.round) {
      this.gameData = data;
      this.reset();
    }

    if (this.steps < data.steps.length) {
      for (let i = this.steps; i < data.steps.length; i++) {
        const step: number = data.steps[i];
        if (step && this.boxes[step]) {
          this.boxes[step].boxClickHandler();
        }
      }
    }
  }

  private gameStateInterval(interval: number): void {
    this.intervalFn = setInterval(async () => {
      if (this.gameOver) {
        clearInterval(this.intervalFn);
      } else {
        const gameStateData = await this.api.gameState();
        if (gameStateData) {
          this.gameData = gameStateData;
          this.updateGameState(gameStateData);
        }
      }
    }, interval);
  }

  private updateScore(): void {
    const scoreEl = document.getElementById('score') as HTMLDivElement;
    scoreEl.textContent = `Red: ${this.redCount} vs Blue: ${this.blueCount}`;
  }

  newGame(): void {
    this.api.newGame().then((data: GameData) => {
      this.gameData = data;
      this.reset();
    });
  }

  determineWinner(box: Box): boolean {
    if (this.gameOver) {
      return this.gameOver;
    }

    const boxLocation = this.boxes.findIndex((boxObj) => boxObj === box);
    this.api.guess(boxLocation);
    this.steps++;

    if (box.type === 'black') {
      this.gameOver = true;
      this.messageEl.textContent = `${this.turnLabel} Team Loses!`;
    } else if (box.type === 'red') {
      this.redCount += 1;
      if (this.redCount === 8) {
        this.gameOver = true;
        this.messageEl.textContent = 'Red Team Wins';
      }
    } else if (box.type === 'blue') {
      this.blueCount += 1;
      if (this.blueCount === 8) {
        this.gameOver = true;
        this.messageEl.textContent = 'Blue Team Wins';
      }
    }

    if (this.gameOver) {
      box.adjustColors(); // Adjust color of tile one last time before ending game
      this.toggleSpymasterView();
    } else {
      this.determineTurnChange(box.type);
    }

    this.updateScore();
    return this.gameOver;
  }

  private determineTurnChange(boxType: string): void {
    if (boxType !== this.turn) {
      this.changeTurns();
    }
  }

  changeTurns(): void {
    if (!this.gameOver) {
      this.turn = this.turn === 'red' ? 'blue' : 'red';
      const turnEl = document.getElementById('turn') as HTMLElement;
      turnEl.textContent = `${this.turnLabel} Team's Turn`;
    }
  }

  toggleSpymasterView(): void {
    this.spymasterView = !this.spymasterView;
    this.boxes.forEach((box) => {
      if (this.spymasterView) {
        box.adjustColors(true);
      } else {
        box.removeColors(true);
      }
    });
  }

  render(): void {
    this.boxes.forEach((box) => box.render());
  }
}
