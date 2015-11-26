
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
