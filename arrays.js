
Array.prototype.uniq = function(){
  var uniqArray = [];
  for (var i = 0; i < this.length; i++){
    if (uniqArray.indexOf(this[i]) === -1)
    {
      uniqArray.push(this[i])
    }
  }
  return uniqArray
};

console.log([1,2,2,3,2,54].uniq())

Array.prototype.twoSum = function(){
  var out = []
  for (var i = 0; i < (this.length-1); i++){
    for (var j = i+1; j < this.length; j++){
      if (this[i] + this[j] === 0)
      {
        out.push([i, j])
      }
    }
  }
  return out;
}

console.log([-1, 0, 2, -2, 1].twoSum())


Array.prototype.myTranspose = function(){
  var out = [];
  for (var row = 0; row < this.length; row++){
    var thisout = [];
    for (var col = 0; col < this.length; col++){
      thisout.push(this[col][row]);
    }
    out.push(thisout);
  }
  return out;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].myTranspose())

// module.exports =
