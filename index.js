const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const PORT = process.env.PORT || 3000;

const {
  getBinaryVsSequentialSearchAnalysis,
  getBubbleVsSelectionSortAnalysis,
} = require('./src/app');

router.use((req, _, next) => {
  console.log(`${req.originalUrl} - ${req.method}`);
  next();
});

app.use(express.static(path));

app.use('/', router);

app.get('/analysis/search/sequential-binary', (_, res) => {
  res.json(getBinaryVsSequentialSearchAnalysis());
});

app.get('/analysis/sort/bubble-selection', (req, res) => {
  const { query: { list } } = req;
  res.json(getBubbleVsSelectionSortAnalysis(list.split(',').map(Number)));
});

app.listen(PORT, function () {
  console.log(`Projeto 1U listening on port ${PORT}!`);
});
