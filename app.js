var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/dices', function(req, res) {
  var listaDados = [
    {
      nome: 'd6', 
      lados: 6
    },
    {
      nome: 'd10', 
      lados: 10
    },
    {
      nome: 'd12', 
      lados: 12
    },
    {
      nome: 'd20', 
      lados: 20
    }
  ];

  var dados = {
    listaDados
  };
  
  res.send(JSON.stringify(dados));
});

app.listen(8000, function() {
  console.log('Running -> Porta:8000.');
});