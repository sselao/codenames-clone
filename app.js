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
    this.changeTurns();
  }

  reset() {
    this.redCount = 0;
    this.blueCount = 0;
    this.turn = "blue"; // For now, red always starts
    this.gameOver = false;
    this.changeTurns();
  }

  determineWinner(box) {
    if (this.gameOver) {
      return this.gameOver;
    }

    const { type } = box;
    const boxEl = document.getElementById(box.id);

    if (type === "black") {
      this.gameOver = true;
      alert(`${this.turn} Team Loses!`);
    } else if (type === "red") {
      if (++this.redCount === 5) {
        this.gameOver = true;
        alert("Red Team Wins!");
      }
    } else if (type === "blue") {
      if (++this.blueCount === 5) {
        this.gameOver = true;
        alert("Blue Team Wins!");
      }
    }

    if (this.gameOver) {
      box.adjustColors(boxEl); // Adjust color of tile one last time before ending game
    } else {
      this.determineTurnChange(type);
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
    const turnLabel = document.getElementById("turn");
    turnLabel.innerHTML = `${this.turn} Team's Turn`;
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
  }
}

App.init();
