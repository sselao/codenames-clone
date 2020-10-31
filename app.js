class WordList {
  constructor() {
    this.words = [
      "Horse",
      "Car",
      "Life",
      "Spaceship",
      "Banana",
      "Jogging",
      "Gym",
      "Slug",
      "Hockey",
      "Visor",
      "Eye",
      "Head",
      "School",
      "Bus",
      "Janitor",
      "Dinosaur",
      "Montreal",
      "Canada",
      "Europe",
      "Russia",
      "Spoon",
      "Knife",
      "Computer",
      "Post",
      "Page",
      "Letter",
      "Tablet",
      "Phone",
    ];
  }

  getRandomWord() {
    const randomWord = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
    this.words = this.words.filter((word) => word != randomWord);
    return randomWord;
  }
}

class Grid {
  constructor() {
    this.redCount = 0;
    this.blueCount = 0;
    this.gameOver = false;
    this.spymasterView = false;
    this.boxes = this.getBoxes();
    this.shuffleBoxes();
    this.changeTurns();
    this.render();
  }

  shuffleBoxes = () => this.boxes.sort(() => 0.5 - Math.random());

  reset() {
    this.redCount = 0;
    this.blueCount = 0;
    this.gameOver = false;
    this.spymasterView = false;
    this.changeTurns();
    this.boxes = this.shuffleBoxes();

    const words = new WordList();
    this.boxes.forEach((box) => box.reset(box, words.getRandomWord()));
  }

  toggleSpymasterView() {
    this.spymasterView = !this.spymasterView;
    this.boxes.forEach((box) =>
      this.spymasterView ? box.adjustColors(true) : box.removeColors()
    );

    // for (const box of this.boxes) {
    //   if (this.spymasterView) {
    //     box.adjustColors(true);
    //   } else {
    //     box.removeColors();
    //   }
    // }
  }

  determineWinner(box) {
    if (this.gameOver) {
      return this.gameOver;
    }

    if (box.type === "black") {
      this.gameOver = true;
      alert(`${this.turn} Team Loses!`);
    } else if (box.type === "red") {
      if (++this.redCount === 5) {
        this.gameOver = true;
        alert("Red Team Wins!");
      }
    } else if (box.type === "blue") {
      if (++this.blueCount === 5) {
        this.gameOver = true;
        alert("Blue Team Wins!");
      }
    }

    if (this.gameOver) {
      box.adjustColors(); // Adjust color of tile one last time before ending game
    } else {
      this.determineTurnChange(box.type);
    }

    return this.gameOver;
  }

  determineTurnChange(boxType) {
    if (boxType !== this.turn) {
      this.changeTurns();
    }
  };

  changeTurns() {
    this.turn = this.turn === "red" ? "blue" : "red";
    const turnEl = document.getElementById("turn");
    const turnLabel = this.turn.charAt(0).toUpperCase() + this.turn.slice(1);
    turnEl.innerHTML = `${turnLabel} Team's Turn`;
  }

  getBoxes() {
    const words = new WordList();
    const boxes = [];

    for (let i = 1; i <= 25; i++) {
      const boxId = "box" + i.toString();
      const randomWord = words.getRandomWord();
      let type = "neutral";
      if (i <= 5) {
        type = "red";
      } else if (i > 5 && i <= 10) {
        type = "blue";
      } else if (i === 25) {
        type = "black";
      }

      boxes.push(
        new Box(boxId, randomWord, type, this.determineWinner.bind(this))
      );
    }
    return boxes;
  }

  render() {
    this.boxes.forEach((box) => box.render());
  }
}

class Box {
  constructor(id, text, type, determineWinnerFunction) {
    this.id = id;
    this.text = text;
    this.disabled = false;
    this.type = type;
    this.determineWinnerHandler = determineWinnerFunction;
  }

  boxClickHandler() {
    console.log(this);
    if (!this.disabled) {
      const isGameOver = this.determineWinnerHandler(this);
      if (!isGameOver) {
        this.adjustColors();
        this.disabled = true;
      } else {
        console.log("Game already over");
      }
    }
  }

  adjustColors(isSpymaster = false) {
    const boxEl = document.getElementById(this.id);
    if (isSpymaster && !this.disabled) {
      boxEl.classList.add(`box-spymaster-` + this.type);
    } else {
      boxEl.classList.add(`box-` + this.type);
    }
  }

  removeColors() {
    const boxEl = document.getElementById(this.id);
    boxEl.className = "box";
  }

  reset(box, word) {
    const boxEl = document.getElementById(box.id);
    const grid = document.getElementById("grid");

    box.text = word;
    box.disabled = false;
    boxEl.className = "box";
    boxEl.innerHTML = word;
    boxEl.remove();
    grid.insertAdjacentElement("beforeend", boxEl);
  }

  render() {
    const boxEl = document.createElement("div");
    boxEl.id = this.id;
    boxEl.className = "box";
    boxEl.innerHTML = this.text;
    boxEl.addEventListener("click", this.boxClickHandler.bind(this));

    const grid = document.getElementById("grid");
    grid.insertAdjacentElement("beforeend", boxEl);
  }
}

class App {
  static init() {
    const grid = new Grid();

    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", grid.reset.bind(grid));

    const endTurnBtn = document.getElementById("end-turn");
    endTurnBtn.addEventListener("click", grid.changeTurns.bind(grid));

    const spymasterBtn = document.getElementById("toggle-spymaster");
    spymasterBtn.addEventListener("click", grid.toggleSpymasterView.bind(grid));
  }
}

App.init();
