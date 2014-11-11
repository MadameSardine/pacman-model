function Pacman(){
  this.lifeCount = 3
  this.pointCount = 0
  this.location = 466;

};

Pacman.prototype.loseLife = function() {
  this.lifeCount -=1;
};

Pacman.prototype.gainOnePoint = function() {
  this.pointCount +=1;
};

Pacman.prototype.moveRight = function() {
  this.maze.cells[this.location].content = 'empty';
  this.location +=1;
  if(this.maze.cells[this.location].content instanceof Dot)
    this.pointCount +=1;

  this.maze.cells[this.location].content = this;
};

Pacman.prototype.moveLeft = function() {
  this.location -=1;
};

Pacman.prototype.moveUp = function() {
  this.location -= this.maze.width;
};

Pacman.prototype.moveDown = function() {
  this.location += this.maze.width;
};