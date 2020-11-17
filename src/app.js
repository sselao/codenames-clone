import Grid from './App/Grid';

class App {
  static init() {
    const grid = new Grid();

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', grid.reset.bind(grid, false));

    const endTurnBtn = document.getElementById('end-turn');
    endTurnBtn.addEventListener('click', grid.changeTurns.bind(grid));

    const spymasterBtn = document.getElementById('toggle-spymaster');
    spymasterBtn.addEventListener('click', grid.toggleSpymasterView.bind(grid));
  }
}

App.init();
