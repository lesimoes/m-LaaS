var math = require('./math');

exports.knn = function(req, data){
  const limit = 19;
  var k = 1;
  var point = {"x":32, "y":12};
  if(req.query.x !== undefined && req.query.y !== undefined)
    point = {"x": req.query.x, "y": req.query.y}

  html = 'knn results for point ' + JSON.stringify(point) + ' in dataset </br>';
  for(i = k ; k < limit ; k = k + 2){
    html = html + 'for k = ' + k + ' ' + JSON.stringify((math.knn(point, data, k))) + '</br>';
  }
  return html;
}
