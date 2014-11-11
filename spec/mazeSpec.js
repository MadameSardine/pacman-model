describe('Maze',function(){

  var maze;
  var cell;

  beforeEach(function(){
    maze = new Maze(30, 20);
    cell = new Cell
  });

  describe('on initialize', function(){

    it('has a width of 30',function(){
      expect(maze.width).toEqual(30)
    });

    it('has a height of 30',function(){
      expect(maze.height).toEqual(20);
    });

    it('has a size equal to width times height',function(){
      expect(maze.size).toEqual(600);
    });

    it('has no cell on initialize',function(){
      expect(maze.cells).toEqual([]);
    });

    it('receives a number of cells equal to its size when the game starts',function(){
      maze.generate();
      expect(maze.cells.length).toEqual(600);
    });

    it('cells are empty',function(){
      maze.generate()
      for(var i = 1; i < maze.size; i++){
        expect(maze.cells[i].content).toEqual('empty')
      }
    });


  });

  describe('during gameplay', function(){

    beforeEach(function(){
      maze.generate();
    });

    it('can place Pacman', function(){
      var pacman = new Pacman;
      maze.place(pacman, 0)
      expect(maze.cells[0].content).toEqual(pacman);
    });

    it('can place a wall', function(){
      var wall = new Wall;
      maze.place(wall, 1)
      expect(maze.cells[1].content).toEqual(wall);
    });

    it('can place a dot', function(){
      var dot = new Dot;
      maze.place(dot, 2)
      expect(maze.cells[2].content).toEqual(dot);
    });

    it('can place a ghost', function(){
      var ghost = new Ghost;
      maze.place(ghost, 3)
      expect(maze.cells[3].content).toEqual(ghost);
    });

    // it('can track an object that moves left one space', function(){

    // });

  });



});