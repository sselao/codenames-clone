const express = require('express');

const app = express();
const cors = require('cors');

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/guess', (req, res) => {
  const response = {
    gameId: req.body.gameId,
    boxLocation: req.body.boxLocation,
  };
  res.send(response);
});

app.get('/new-game/:gameId', (req, res) => {
  const response = {
    gameId: req.params.gameId,
    stateId: '', // unique string
    stepCount: 0,
    steps: [],
    words: [], // string
    layout: [], // red | blue | neutral | black
    revealed: [], // bool
  };
  res.send(response);
});

/*
{
  "seed": 9195779198179128000,
  "perm_index": 25,
  "round": 2,
  "word_set": [
    "AFRICA",
    "AGENT",
    "AIR",
    "ALIEN",
    "ALPS",
    "AMAZON",
    "AMBULANCE",
    "AMERICA",
    "ANGEL",
    "ANTARCTICA",
    "APPLE",
    "ARM",
    "ATLANTIS",
    "AUSTRALIA",
    "AZTEC",
    "BACK",
    "BALL",
    "BAND",
    "BANK",
  ],
  "id": "stebok",
  "created_at": "2020-12-03T16:00:37.223330835Z",
  "updated_at": "2020-12-03T16:05:45.727952199Z",
  "starting_team": "blue",
  "words": [
    "AMERICA",
    "TRUNK",
    "CHAIR",
    "COLD",
    "NOVEL",
    "IRON",
    "NEW YORK",
  ],
  "round_started_at": "2020-12-03T16:00:46.668365706Z",
  "state_id": "1607011545727952199"
}
*/

app.get('/game-state/:gameId', (req, res) => {
  const response = {
    gameId: req.params.gameId,
    roundId: 'current_round_id',
    stepCount: 3,
    steps: [0, 5, 10],
  };
  res.send(response);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Dummy backend listening at http://localhost:${port}`);
});
