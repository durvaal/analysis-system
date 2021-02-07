var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = 3000;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/home",function(req,res){
  res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, function () {
  console.log('Projeto 1U listening on port 3000!');
});


/**
 * Pesquisa:
 * 
 * https://www.mundojs.com.br/2018/02/05/algoritmos-de-busca-sequencial-e-binaria/
 * https://pt.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
 * https://stackoverflow.com/questions/700241/what-is-the-difference-between-linear-search-and-binary-search#:~:text=A%20linear%20search%20looks%20down,at%20a%20time%2C%20without%20jumping.&text=A%20binary%20search%20is%20when,second%20half%20of%20the%20list.
 * 
 * Slides:
 * 
 * file:///home/limap/Downloads/Aula_3_-_Complexidade_analise_empirica.pptx%20(1).pdf
 * file:///home/limap/Downloads/Aula_4_-_Complexidade.pptx%20(1).pdf
 * file:///home/limap/Downloads/Aula_6_-_Projeto.pptx%20(1).pdf
 * 
 * 
 * Charts:
 * 
 * https://www.chartjs.org/samples/latest/charts/line/basic.html
 */