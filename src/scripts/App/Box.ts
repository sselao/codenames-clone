export default class Box {
  disabled: boolean;
  determineWinnerHandler: (box: Box) => boolean;
  gameEl: HTMLDivElement;
  boxEl: HTMLDivElement;

  constructor(public id: string, public text: string, public type: string, determineWinnerFunction: (box: Box) => boolean) {
    this.disabled = false;
    this.determineWinnerHandler = determineWinnerFunction;
    this.gameEl = document.getElementById('grid') as HTMLDivElement;
    this.boxEl = document.createElement('div') as HTMLDivElement;
  }

  boxClickHandler(): void {
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

  private append(): void {
    this.gameEl.insertAdjacentElement('beforeend', this.boxEl);
  }

  reset(word: string, type: string): void {
    this.disabled = false;
    this.text = word;
    this.type = type;
    this.boxEl.className = 'box';
    this.boxEl.textContent = word;
  }

  render(): void {
    this.boxEl.id = this.id;
    this.boxEl.classList.add('box');
    this.boxEl.textContent = this.text;
    this.boxEl.addEventListener('click', this.boxClickHandler.bind(this));
    this.append();
  }
}
