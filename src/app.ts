import './styles/app.scss';
import Game from './scripts/App/Game';

class App {
  static init() {
    const game = new Game('randomgameid');

    const resetBtn = document.getElementById('reset') as HTMLButtonElement;
    resetBtn.addEventListener('click', game.newGame.bind(game));

    const endTurnBtn = document.getElementById('end-turn') as HTMLButtonElement;
    endTurnBtn.addEventListener('click', game.changeTurns.bind(game));

    const spymasterBtn = document.getElementById('toggle-spymaster') as HTMLButtonElement;
    spymasterBtn.addEventListener('click', game.toggleSpymasterView.bind(game));
  }
}

App.init();
