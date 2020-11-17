export default class {
  constructor(id, text, type, determineWinnerFunction) {
    this.id = id;
    this.text = text;
    this.disabled = false;
    this.type = type;
    this.determineWinnerHandler = determineWinnerFunction;
  }

  boxClickHandler() {
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

  adjustColors(isSpymaster = false) {
    const boxEl = document.getElementById(this.id);
    if (isSpymaster && !this.disabled) {
      boxEl.classList.add(`box-spymaster-${this.type}`);
    } else if (!this.disabled) {
      boxEl.classList.add(`box-${this.type}`);
    }
  }

  removeColors(spymasterOnly = false) {
    const boxEl = document.getElementById(this.id);
    if (spymasterOnly) {
      boxEl.className.split(' ').forEach((value) => {
        if (value.includes('spymaster')) {
          boxEl.classList.remove(value);
        }
      });
    } else {
      boxEl.className = 'box';
    }
  }

  renderToGrid(boxEl) {
    document.getElementById('grid').insertAdjacentElement('beforeend', boxEl);
  }

  reset(boxObject, word) {
    const box = boxObject;
    const boxEl = document.getElementById(box.id);
    box.text = word;
    box.disabled = false;
    boxEl.className = 'box';
    boxEl.innerHTML = word;
    boxEl.remove();
    this.renderToGrid(boxEl);
  }

  render() {
    const boxEl = document.createElement('div');
    boxEl.id = this.id;
    boxEl.className = 'box';
    boxEl.innerHTML = this.text;
    boxEl.addEventListener('click', this.boxClickHandler.bind(this));
    this.renderToGrid(boxEl);
  }
}
