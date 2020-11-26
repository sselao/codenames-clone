import './styles/app.scss';
import Grid from './scripts/App/Grid';

class App {
  static init() {
    const grid = new Grid();

    const resetBtn = document.getElementById('reset') as HTMLButtonElement;
    resetBtn.addEventListener('click', grid.reset.bind(grid, false));

    const endTurnBtn = document.getElementById('end-turn') as HTMLButtonElement;
    endTurnBtn.addEventListener('click', grid.changeTurns.bind(grid));

    const spymasterBtn = document.getElementById('toggle-spymaster') as HTMLButtonElement;
    spymasterBtn.addEventListener('click', grid.toggleSpymasterView.bind(grid));
  }
}

App.init();
