function Maze(width, height){
  this.width = width;
  this.height = height;
  this.size = width * height;
  this.cells = [];
};

Maze.prototype.generate = function() {
  for(var i=0; i < this.size; i++){
      this.cells.push(new Cell)
  }
};

Maze.prototype.addPacman = function(pacman) {
  this.pacman = pacman;
  this.pacman.maze = this;
};

Maze.prototype.place = function(object, index) {
  this.cells[index].content = object;
};