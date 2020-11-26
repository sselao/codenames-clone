export default class Box {
  disabled: boolean;
  determineWinnerHandler: (box: Box) => boolean;
  gridEl: HTMLElement;
  boxEl: HTMLElement;

  constructor(public id: string, public text: string, public type: string, determineWinnerFunction: (box: Box) => boolean) {
    this.disabled = false;
    this.determineWinnerHandler = determineWinnerFunction;
    this.gridEl = document.getElementById('grid') as HTMLElement;
    this.boxEl = document.createElement('div') as HTMLElement;
  }

  boxClickHandler(): void {
    // eslint-disable-next-line no-console
    console.log(this);
    if (!this.disabled) {
      const isGameOver = this.determineWinnerHandler(this);
      if (!isGameOver) {
        this.adjustColors();
        this.disabled = true;
      }
    }
  }

  adjustColors(isSpymaster = false): void {
    if (isSpymaster && !this.disabled) {
      this.boxEl.classList.add(`box-spymaster-${this.type}`);
    } else if (!this.disabled) {
      this.boxEl.classList.add(`box-${this.type}`);
    }
  }

  removeColors(spymasterOnly = false): void {
    if (spymasterOnly) {
      this.boxEl.className.split(' ').forEach((value) => {
        if (value.includes('spymaster')) {
          this.boxEl.classList.remove(value);
        }
      });
    } else {
      this.boxEl.className = 'box';
    }
  }

  renderToGrid(): void {
    this.gridEl.insertAdjacentElement('beforeend', this.boxEl);
  }

  reset(boxObject: Box, word: string): void {
    const box = boxObject;
    box.text = word;
    box.disabled = false;
    this.boxEl.className = 'box';
    this.boxEl.textContent = word;
    this.boxEl.remove();
    this.renderToGrid();
  }

  render(): void {
    this.boxEl.id = this.id;
    this.boxEl.className = 'box';
    this.boxEl.textContent = this.text;
    this.boxEl.addEventListener('click', this.boxClickHandler.bind(this));
    this.renderToGrid();
  }
}