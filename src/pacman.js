function Pacman(){
  this.lifeCount = 3
  this.pointCount = 0
};

Pacman.prototype.loseLife = function() {
  this.lifeCount -=1;
};

Pacman.prototype.gainOnePoint = function() {
  this.pointCount +=1;
};