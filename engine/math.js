exports.knn = (point, data, k) => {
  for (i in data.data){
    let obj = data.data[i]
    obj.dist = euclideanDistance(point, obj);
  }
  sortByDist(data.data)
  return discoverClass(data.data, k);
}

var euclideanDistance = (point, anotherPoint) => {
  return  Math.sqrt(Math.pow((point.x - anotherPoint.x), 2) + Math.pow((point.y - anotherPoint.y), 2))
}

var sortByDist = (data) => {
  data.sort(function(a, b){
    return a.dist - b.dist;
  })
}

var sortByValue = (data) => {
  data.sort(function(a, b) {
    return a.value + b.value;
  })
}

var discoverClass = (data, k) => {
  var arrClass = [];
  arrClass.push({'class':data[0].class, 'value':1});
  for(var i = 1; i < k ; i ++){
      for(var y = 0 ; y < arrClass.length ; y ++){
        if(data[i].class == arrClass[y].class){
          arrClass[y].value ++
          break;
        }
        if(y == arrClass.length - 1){
          arrClass.push({'class':data[i].class, 'value':0})
        }
    }
      }
 sortByValue(arrClass);
 return arrClass

}
