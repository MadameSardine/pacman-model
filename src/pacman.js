function Pacman(){
  this.lifeCount = 3
  this.pointCount = 0
  this.location = 466;
  this.name = 'pacman'

};

Pacman.prototype.loseLife = function() {
  this.lifeCount -=1;
};

Pacman.prototype.gainOnePoint = function() {
  this.pointCount +=1;
};

Pacman.prototype.moveRight = function() {
  this._leaveCell(this.location);
  if (this.maze.cells[this.location + 1].content instanceof Wall){
    return this.location}
  else{
    this.location +=1;
    this._enterCell(this.location)
  }
};

Pacman.prototype.moveLeft = function() {
  this._leaveCell(this.location);
   if (this.maze.cells[this.location - 1].content instanceof Wall){
    return this.location}
  else{
    this.location -=1;
    this._enterCell(this.location)
  }
};

Pacman.prototype.moveUp = function() {
  this._leaveCell(this.location);
   if (this.maze.cells[this.location - this.maze.width].content instanceof Wall){
    return this.location}
  else{
    this.location -=this.maze.width;
    this._enterCell(this.location)
  }
};

Pacman.prototype.moveDown = function() {
  this._leaveCell(this.location);
  if (this.maze.cells[this.location + this.maze.width].content instanceof Wall){
    return this.location}
  else{
    this.location +=this.maze.width;
    this._enterCell(this.location)
  }
};

Pacman.prototype._leaveCell = function(location) {
  this.maze.cells[location].content = 'empty'
};

Pacman.prototype._enterCell = function(location) {
  this._eatDot(location);
  this.maze.cells[location].content = this
};

Pacman.prototype._eatDot = function(location) {
  if(this.maze.cells[location].content instanceof Dot)
    this.pointCount +=1;
};