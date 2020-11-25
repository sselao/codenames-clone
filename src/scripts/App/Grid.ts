import WordList from './WordList';
import Box from './Box';
import Api from '../Utility/Api';

export default class {
  messageEl: HTMLElement;
  gameId: number;
  api: Api;
  boxes: Box[];
  gameOver: boolean;
  spymasterView: boolean;
  redCount: number;
  blueCount: number;
  turn: 'red' | 'blue';

  constructor() {
    this.messageEl = document.getElementById('message');
    this.gameId = 9999;
    this.api = new Api(this.gameId);
    this.boxes = this.getBoxes();
    this.reset(true);
    this.gameStateInterval(5000);
    this.render();
  }

  shuffleBoxes() {
    this.boxes.sort(() => 0.5 - Math.random());
  }

  getBoxes() {
    const words = new WordList();
    const boxes = [];

    for (let i = 1; i <= 25; i += 1) {
      const boxId = `box${i.toString()}`;
      const randomWord = words.getRandomWord();
      let type = 'neutral';
      if (i <= 8) {
        type = 'red';
      } else if (i > 8 && i <= 16) {
        type = 'blue';
      } else if (i === 25) {
        type = 'black';
      }

      boxes.push(new Box(boxId, randomWord, type, this.determineWinner.bind(this)));
    }
    return boxes;
  }

  reset(firstReset = false) {
    this.shuffleBoxes();
    this.redCount = 0;
    this.blueCount = 0;
    this.gameOver = false;
    this.spymasterView = false;
    this.changeTurns();
    this.updateScore();

    if (!firstReset) {
      const words = new WordList();
      this.boxes.forEach((box) => box.reset(box, words.getRandomWord()));
    }
  }

  gameStateInterval(interval: number) {
    setInterval(() => {
      this.api.gameState();
    }, interval);
  }

  toggleSpymasterView() {
    this.spymasterView = !this.spymasterView;
    this.boxes.forEach((box) => {
      if (this.spymasterView) {
        box.adjustColors(true);
      } else {
        box.removeColors(true);
      }
    });
  }

  determineWinner(box: Box) {
    if (this.gameOver) {
      return this.gameOver;
    }

    this.api.guess();
    if (box.type === 'black') {
      this.gameOver = true;
      this.messageEl.textContent = `${this.turn} Team Loses!`;
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
    } else {
      this.determineTurnChange(box.type);
    }

    this.updateScore();
    return this.gameOver;
  }

  updateScore() {
    const scoreEl = document.getElementById('score');
    scoreEl.textContent = `Red: ${this.redCount} vs Blue: ${this.blueCount}`;
  }

  determineTurnChange(boxType) {
    if (boxType !== this.turn) {
      this.changeTurns();
    }
  }

  changeTurns() {
    this.turn = this.turn === 'red' ? 'blue' : 'red';
    const turnEl = document.getElementById('turn');
    const turnLabel = this.turn.charAt(0).toUpperCase() + this.turn.slice(1);
    turnEl.textContent = `${turnLabel} Team's Turn`;
  }

  render() {
    this.boxes.forEach((box) => box.render());
  }
}
