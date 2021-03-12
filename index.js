var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = process.env.PORT || 3000;

const { getBinaryVsSequentialAnalysis } = require('./src/app');

router.use((req, _, next) => {
  console.log(`${req.originalUrl} - ${req.method}`);
  next();
});

app.use(express.static(path));

app.use('/', router);

app.get('/analysis-sequential-binary', (_, res) => {
  res.json(getBinaryVsSequentialAnalysis());
});

app.listen(PORT, function () {
  console.log(`Projeto 1U listening on port ${PORT}!`);
});
