function iterRange(start, end) {
  var out = [];
  for (start; start <= end; start++){
    out.push(start)
  }
  return out
}

console.log(iterRange(1,10))

function recRange(start, end) {
  if (start > end){
    return [];
  }
  var output = recRange(start, end - 1);
  output.push(end);
  return output;
}

console.log(recRange(1,5))

function exponench(base, power){
  if (power === 0)
  {
    return 1
  }
  var next = base * exponench(base, power-1)
  return next;
}

console.log(exponench(3, 3))
