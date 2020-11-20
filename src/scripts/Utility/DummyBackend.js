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
  };
  res.send(response);
});

app.get('/game-state/:gameId', (req, res) => {
  const response = {
    gameId: req.params.gameId,
  };
  res.send(response);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Dummy backend listening at http://localhost:${port}`);
});
