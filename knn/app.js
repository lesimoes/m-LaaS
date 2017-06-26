var fs = require('fs');
var express = require('express');
var math = require('./math');
const limit = 19;


var app = express();

var data = JSON.parse(fs.readFileSync('data.json','utf8'))
var point = {"x":32, "y":12};

app.get('/knn', function (req, res) {
  var html = '';
  var k = 1;
  if(req.query.x !== undefined || req.query.y !== undefined)
    point = {"x": req.query.x, "y": req.query.y}

  html = 'knn results for point ' + JSON.stringify(point) + ' in dataset </br>';
  for(i = k ; k < limit ; k = k + 2){
    html = html + 'for k = ' + k + ' ' + JSON.stringify((math.knn(point, data, k))) + '</br>';
  }

  res.send(html);
})

app.listen(3000);
console.log('Listen on localhost:3000/knn')
