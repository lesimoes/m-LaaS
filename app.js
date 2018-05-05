let fs = require('fs');
let express = require('express');
let mlaas = require('./engine/mlaas');
let data = JSON.parse(fs.readFileSync('dataset/basic/data.json','utf8'))

let port = process.env.PORT || 3000;
let app = express();

app.get('/knn', function (req, res) {
  let html = mlaas.knn(req, data);
  res.send(html);
})

app.listen(port);
console.log(`Magic happens on ${port}`)
