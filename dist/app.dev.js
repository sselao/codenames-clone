"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function Component() {
  _classCallCheck(this, Component);
};

var WordList =
/*#__PURE__*/
function () {
  function WordList() {
    _classCallCheck(this, WordList);

    this.words = ["Horse", "Car", "Life", "Spaceship", "Banana", "Jogging", "Gym", "Slug", "Hockey", "Visor", "Eye", "Head", "School", "Bus", "Janitor", "Dinosaur", "Montreal", "Canada", "Europe", "Russia", "Spoon", "Knife", "Computer", "Post", "Page", "Letter", "Tablet", "Phone"];
  }

  _createClass(WordList, [{
    key: "getRandomWord",
    value: function getRandomWord() {
      var randomIndex = Math.floor(Math.random() * this.words.length);
      var randomWord = this.words[randomIndex];
      this.words = this.words.filter(function (word) {
        return word != randomWord;
      });
      return randomWord;
    }
  }]);

  return WordList;
}();

var Grid =
/*#__PURE__*/
function () {
  function Grid() {
    _classCallCheck(this, Grid);

    this.redCount = 0;
    this.blueCount = 0;
    this.turn = "blue"; // For now, red always starts

    this.gameOver = false;
    this.changeTurns();
  }

  _createClass(Grid, [{
    key: "reset",
    value: function reset() {
      this.redCount = 0;
      this.blueCount = 0;
      this.turn = "blue"; // For now, red always starts

      this.gameOver = false;
      this.changeTurns();
    }
  }, {
    key: "determineWinner",
    value: function determineWinner(box) {
      if (this.gameOver) {
        return this.gameOver;
      }

      var type = box.type;
      var boxEl = document.getElementById(box.id);

      if (type === "black") {
        this.gameOver = true;
        alert("".concat(this.turn, " Team Loses!"));
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
  }, {
    key: "determineTurnChange",
    value: function determineTurnChange(boxType) {
      if (boxType !== this.turn) {
        this.changeTurns();
      }
    }
  }, {
    key: "changeTurns",
    value: function changeTurns() {
      if (this.turn === "red") {
        this.turn = "blue";
      } else {
        this.turn = "red";
      }

      var turnLabel = document.getElementById("turn");
      turnLabel.innerHTML = "".concat(this.turn, " Team's Turn");
    }
  }, {
    key: "render",
    value: function render() {
      var words = new WordList();

      for (var i = 1; i <= 25; i++) {
        var boxId = "box" + i.toString();
        var randomWord = words.getRandomWord();
        var type = void 0;

        if (i <= 5) {
          type = "red";
        } else if (i > 5 && i <= 10) {
          type = "blue";
        } else if (i === 25) {
          type = "black";
        } else {
          type = "neutral";
        }

        var box = new Box(boxId, randomWord, type, this.determineWinner.bind(this));
        box.render();
      }
    }
  }]);

  return Grid;
}();

var Box =
/*#__PURE__*/
function () {
  function Box(id, text, type, determineWinnerFunction) {
    _classCallCheck(this, Box);

    this.id = id;
    this.text = text;
    this.disabled = false;
    this.type = type;
    this.determineWinnerHandler = determineWinnerFunction;
  }

  _createClass(Box, [{
    key: "boxClickHandler",
    value: function boxClickHandler() {
      if (!this.disabled) {
        var boxEl = document.getElementById(this.id);
        var isGameOver = this.determineWinnerHandler(this);

        if (!isGameOver) {
          this.adjustColors(boxEl);
          this.disabled = true;
        } else {
          console.log("Game already over");
        }
      }
    }
  }, {
    key: "adjustColors",
    value: function adjustColors(boxEl) {
      boxEl.classList.add("box-" + this.type);
    }
  }, {
    key: "render",
    value: function render() {
      var boxEl = document.createElement("div");
      boxEl.id = this.id;
      boxEl.className = "box";
      boxEl.innerHTML = this.text;
      boxEl.addEventListener("click", this.boxClickHandler.bind(this));
      var grid = document.getElementById("grid");
      grid.insertAdjacentElement("beforeend", boxEl);
    }
  }]);

  return Box;
}();

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, null, [{
    key: "init",
    value: function init() {
      var grid = new Grid();
      grid.render();
    }
  }]);

  return App;
}();

App.init();