function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  return this.owner + " loves " + this.name;
}

var gizmo = new Cat("Gizmo", "Robot")

console.log(gizmo.cuteStatement())
