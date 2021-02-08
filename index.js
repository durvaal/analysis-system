var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = 3000;

router.use((req, _, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/home', (_,res) => {
  res.sendFile(path + 'index.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(PORT, function () {
  console.log('Projeto 1U listening on port 3000!');
});
