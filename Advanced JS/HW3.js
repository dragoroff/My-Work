function Shape(x, y, color) {
    this.x=x,
    this.y=y,
    this.color=color;
  }
  Shape.prototype.method = function()
  {
   return Math.sqrt (Math.pow(this.x, 4) + Math.pow(this.y, 4))
  }
  let figure = new Shape (3, 2, 'red');
  Shape.prototype.toString = function(){
    return 'X = '+ this.x + ', ' + 'Y = ' + this.y + ', ' + 'Color = ' + this.color;
  }
  console.log(figure.toString())
  console.log(figure.method())