let math = require('./math');
let fs = require('fs');
let dataFile = JSON.parse(fs.readFileSync('dataset/basic/data.json','utf8'))
let crypto = require('crypto');

const limit = 19;
const insertK = 3;

exports.knn = (req, data) => {
  let k = 1;
  let point = {"x": req.query.x, "y": req.query.y}

  html = 'knn results for point ' + JSON.stringify(point) + ' in dataset </br>';
  for(i = k ; k < limit ; k = k + 2){
    let value = (math.knn(point, data, k));
    html = html + 'for k = ' + k + ' ' + JSON.stringify(value) + '</br>';
    if(k === insertK)
      insertPoint(point, value[0].class)
  }
  return html;
}

let insertPoint = (value, pointClass) => {
  let index = crypto.createHash('md5').update((+ new Date()).toString()).digest('hex');
  let point = {"id": index, "x": value.x, "y": value.y, "class": pointClass}
  dataFile.data.push(point);
}
