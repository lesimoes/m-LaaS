var fs = require('fs');
var express = require('express');
var mlaas = require('./mlaas');
const port = 3000;
var app = express();

var data = JSON.parse(fs.readFileSync('data.json','utf8'))

app.get('/knn', function (req, res) {
  var html = mlaas.knn(req, data);
  res.send(html);
})

app.listen(port);
console.log('Listen on localhost:3000')
