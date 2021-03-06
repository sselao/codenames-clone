import './styles/app.scss';
import Game from './scripts/App/Game';

class App {
  static init() {
    const pathName = window.location.pathname.slice(1);
    let gameId: string = pathName.replace(/[^a-z\d]+/i, ''); // only allow letters and numbers

    if (!gameId || pathName !== gameId) {
      gameId =
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      window.location.pathname = gameId;
    }

    const game = new Game(gameId);
    const langSelect = document.getElementById('language-selector') as HTMLSelectElement;
    langSelect.addEventListener('change', game.newGameHandler.bind(game, langSelect, true));

    const resetBtn = document.getElementById('reset') as HTMLButtonElement;
    resetBtn.addEventListener('click', game.newGameHandler.bind(game, langSelect, false));

    const endTurnBtn = document.getElementById('end-turn') as HTMLButtonElement;
    endTurnBtn.addEventListener('click', game.changeTurns.bind(game, true));

    const spymasterBtn = document.getElementById('toggle-spymaster') as HTMLButtonElement;
    spymasterBtn.addEventListener('click', game.toggleSpymasterView.bind(game, spymasterBtn));
  }
}

App.init();
