class Component {}

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
    const randomIndex = Math.floor(Math.random() * this.words.length);
    const randomWord = this.words[randomIndex];
    this.words = this.words.filter((word) => word != randomWord);
    return randomWord;
  }
}

class Grid {
  constructor() {
    this.redCount = 0;
    this.blueCount = 0;
    this.turn = "blue"; // For now, red always starts
    this.gameOver = false;
    this.boxes = [];
    this.changeTurns();
  }

  reset() {
    this.redCount = 0;
    this.blueCount = 0;
    this.turn = "blue";
    this.gameOver = false;
    this.changeTurns();

    const words = new WordList();
    for (const box of this.boxes) {
      const randomWord = words.getRandomWord();
      box.reset(box, randomWord);
    }
  }

  determineWinner(box) {
    if (this.gameOver) {
      return this.gameOver;
    }

    const boxEl = document.getElementById(box.id);

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
      box.adjustColors(boxEl); // Adjust color of tile one last time before ending game
    } else {
      this.determineTurnChange(box.type);
    }

    return this.gameOver;
  }

  determineTurnChange(boxType) {
    if (boxType !== this.turn) {
      this.changeTurns();
    }
  }

  changeTurns() {
    if (this.turn === "red") {
      this.turn = "blue";
    } else {
      this.turn = "red";
    }
    const turnEl = document.getElementById("turn");
    const turnLabel = this.turn.charAt(0).toUpperCase() + this.turn.slice(1);
    turnEl.innerHTML = `${turnLabel} Team's Turn`;
  }

  render() {
    const words = new WordList();

    for (let i = 1; i <= 25; i++) {
      const boxId = "box" + i.toString();
      const randomWord = words.getRandomWord();
      let type;
      if (i <= 5) {
        type = "red";
      } else if (i > 5 && i <= 10) {
        type = "blue";
      } else if (i === 25) {
        type = "black";
      } else {
        type = "neutral";
      }

      const box = new Box(
        boxId,
        randomWord,
        type,
        this.determineWinner.bind(this)
      );
      this.boxes.push(box);
      box.render();
    }
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
      const boxEl = document.getElementById(this.id);
      const isGameOver = this.determineWinnerHandler(this);
      if (!isGameOver) {
        this.adjustColors(boxEl);
        this.disabled = true;
      } else {
        console.log("Game already over");
      }
    }
  }

  adjustColors(boxEl) {
    boxEl.classList.add(`box-` + this.type);
  }

  reset(box, word) {
    const boxEl = document.getElementById(box.id);
    box.text = word;
    box.disabled = false;
    boxEl.className = "box";
    boxEl.innerHTML = word;
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
    grid.render();

    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", grid.reset.bind(grid));

    const endTurnBtn = document.getElementById("end-turn");
    endTurnBtn.addEventListener("click", grid.changeTurns.bind(grid));
  }
}

App.init();
