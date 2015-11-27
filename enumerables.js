Array.prototype.myEach = function(callback){
  for(var i = 0; i < this.length; i++){
    callback(this[i]);}
  return this;
}

function addOne(element) {
  return ++element;
}

console.log([1,2,3].myEach(addOne));

Array.prototype.myMap = function(callback){
  var out = [];
  this.myEach(function(element){
    out.push(callback(element));
  })
  return out;
}

console.log([1,2,3].myMap(addOne));

Array.prototype.myInject = function(callback) {
  var total = callback(this.shift());
  this.myEach(function(element) {
    total += callback(element);
  });
  return total;
}

console.log([1,2,3].myInject(addOne));
