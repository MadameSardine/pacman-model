function Ghost(){
  this.name = 'ghost'
  this.location = 253;
};

Ghost.prototype.moveRight = function() {
  this._leaveCell(this.location);
  if (this.maze.cells[this.location + 1].content instanceof Wall){
    return this.location}
  else{
    this.location +=1;
    this._enterCell(this.location)
  }
};

Ghost.prototype.moveLeft = function() {
  this._leaveCell(this.location);
   if (this.maze.cells[this.location - 1].content instanceof Wall){
    return this.location}
  else{
    this.location -=1;
    this._enterCell(this.location)
  }
};

Ghost.prototype.moveUp = function() {
  this._leaveCell(this.location);
   if (this.maze.cells[this.location - this.maze.width].content instanceof Wall){
    return this.location}
  else{
    this.location -=this.maze.width;
    this._enterCell(this.location)
  }
};

Ghost.prototype.moveDown = function() {
  this._leaveCell(this.location);
  if (this.maze.cells[this.location + this.maze.width].content instanceof Wall){
    return this.location}
  else{
    this.location +=this.maze.width;
    this._enterCell(this.location)
  }
};

Ghost.prototype._leaveCell = function(location) {
  this.maze.cells[location].content = this.maze.cells[location].temporaryContent;
};

Ghost.prototype._enterCell = function(location) {
  this.maze.cells[location].temporaryContent = this.maze.cells[location].content
  this.maze.cells[location].content = this;
};