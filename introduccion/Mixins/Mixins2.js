var asCircle = function() {
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
  this.grow = function() {
    this.radius++;
  };
  this.shrink = function() {
    this.radius--;
  };
  return this;
};
 
var Circle = function(radius) {
    this.radius = radius;
};

var asButton = function() {
	this.click=function() {
		console.log('clicked');
	}
	
	return this;
};


module.exports = {
	asCircle: asCircle,
	Circle: Circle,
	asButton: asButton
};