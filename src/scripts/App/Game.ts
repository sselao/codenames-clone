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

  private get url(): string {
    return `${window.location.protocol}://${window.location.host}/${this.gameId}`;
  }

  private get turnLabel(): string {
    return this.turn.charAt(0).toUpperCase() + this.turn.slice(1);
  }

  constructor(public gameId: string, public lang = 'en') {
    const shareEl = document.getElementById('share-url') as HTMLInputElement;
    shareEl.value = this.url;

    this.messageEl = document.getElementById('message') as HTMLDivElement;
    this.api = new Api(this.gameId);
    this.round = new Date();
    this.api
      .gameState()
      .then((data) => {
        this.gameData = data;
        this.reset();
        this.updateGameState(data);
        this.render();
        this.gameStateInterval(2250);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        const backdrop = document.getElementById('backdrop') as HTMLDivElement;
        backdrop.style.display = 'none';
      });
  }

  private reset(): void {
    this.messageEl.textContent = '';
    this.round = this.gameData.round;
    this.steps = 0;
    this.redCount = 0;
    this.blueCount = 0;
    this.gameOver = false;
    this.spymasterView = false;
    this.turn = 'blue';
    this.createBoxes();
    this.changeTurns();
    this.updateScore();
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
      // TODO: update spymaster button and remove .active clas
    }

    this.turn = data.turn;
    this.updateTurnLabel();
    if (this.steps < data.steps.length) {
      for (let i = this.steps; i < data.steps.length; i++) {
        const step: number = data.steps[i];
        if (typeof step !== undefined && this.boxes[step]) {
          const box = this.boxes[step];
          const shouldUpdate = this.determineWinner(box, false);
          if (shouldUpdate) {
            box.adjustColors();
            box.disabled = true;
          }
        }
      }
    }
  }

  private gameStateInterval(interval: number): void {
    setInterval(async () => {
      const gameStateData = await this.api.gameState();
      if (gameStateData) {
        this.gameData = gameStateData;
        this.updateGameState(gameStateData);
      }
    }, interval);
  }

  private updateScore(): void {
    const scoreEl = document.getElementById('score') as HTMLDivElement;
    scoreEl.textContent = `Red: ${this.redCount} vs Blue: ${this.blueCount}`;
  }

  private newGame(forceNewGame: boolean): void {
    this.api.newGame(forceNewGame).then((data: GameData) => {
      this.gameData = data;
      this.reset();
    });
  }

  newGameHandler(langSelect: HTMLSelectElement, forceNewGame: boolean): void {
    const lang = langSelect.value;
    this.lang = lang;
    this.api.setLang(lang);
    this.newGame(forceNewGame);
  }

  determineWinner(box: Box, isRealGuess = true): boolean {
    if (this.gameOver || (this.spymasterView && isRealGuess)) {
      return false;
    }

    const boxLocation = this.boxes.findIndex((boxObj) => boxObj === box);
    if (isRealGuess) {
      this.api.guess(boxLocation);
    }
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
      if (this.blueCount === 7) {
        this.gameOver = true;
        this.messageEl.textContent = 'Blue Team Wins';
      }
    }

    if (this.gameOver) {
      box.adjustColors(); // Adjust color of tile one last time before ending game
      if (!this.spymasterView) {
        this.toggleSpymasterView();
      }
    } else if (isRealGuess) {
      this.determineTurnChange(box.type);
    }

    this.updateScore();
    return !this.gameOver;
  }

  private determineTurnChange(boxType: string): void {
    if (boxType !== this.turn) {
      this.changeTurns();
    }
  }

  private updateTurnLabel(): void {
    const turnEl = document.getElementById('turn') as HTMLElement;
    turnEl.textContent = `${this.turnLabel} Team's Turn`;
  }

  changeTurns(updateServer = false): void {
    if (!this.gameOver) {
      this.turn = this.turn === 'red' ? 'blue' : 'red';
      this.updateTurnLabel();
      if (updateServer) {
        this.api.changeTurns(this.turn);
      }
    }
  }

  toggleSpymasterView(): void {
    this.spymasterView = !this.spymasterView;
    const spymasterBtn = document.getElementById('toggle-spymaster') as HTMLButtonElement;
    spymasterBtn.classList.toggle('active');
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
