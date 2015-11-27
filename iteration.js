function bubbleSort(array){
  for (var i = 0; i < (array.length-1); i++){
    if (array[i] > array[i+1])
    {
      // make better variable names
      var x = array[i];
      var y = array[i+1];
      array[i] = y;
      array[i+1] = x;
      i = 0;
    }
  }
  return array;
}

console.log(bubbleSort([4,2,31,6,9]))

function subStrings(string){
  var out = [];
  for (var i = 0; i < string.length; i++){
    for (var j = i+1; j <= string.length; j++){
      // push into if it doesn't already exist
      out.push(string.substring(i, j));
    }
  }
  return out;
}


console.log(subStrings("Banana"))
