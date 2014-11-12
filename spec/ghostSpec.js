describe('Ghost',function(){

  var ghost;
  var maze;


  beforeEach(function(){
    ghost = new Ghost;
    maze = new Maze(30,30);
    maze.generate();
    maze.addGhost(ghost);

  })

  it('should have a name',function(){
    expect(ghost.name).toEqual('ghost')
  });

  it('has a location',function(){
    maze.place(ghost, 253)
    expect(ghost.location).toEqual(253)
  });

  it('can move by one cell right',function(){
    ghost.moveRight();
    expect(ghost.location).toEqual(254)
  })

  it('can move by one cell left',function(){
    ghost.moveLeft();
    expect(ghost.location).toEqual(252)
  })

   it('can move by one cell up',function(){
    ghost.moveUp();
    expect(ghost.location).toEqual(223)
  })

    it('can move by one cell down',function(){
    ghost.moveDown();
    expect(ghost.location).toEqual(283)
  })

    it('can move to a cell containing a dot',function(){
      var dot = new Dot;
      ghost.maze.cells[1].content = dot;
      ghost.location = 0;
      ghost.moveRight();
      expect(ghost.maze.cells[1].content).toEqual(ghost)
    });

    it("doesn't eat dots",function(){
      var dot = new Dot;
      ghost.maze.cells[1].content = dot;
      ghost.location = 0;
      ghost.moveRight();
      ghost.moveRight();
      expect(ghost.maze.cells[1].content).toEqual(dot)
    });

    it("can't move to a cell containing a wall",function(){
      var wall =  new Wall;
      ghost.maze.cells[1].content = wall;
      ghost.location = 0
      ghost.moveRight;
      expect(ghost.location).toEqual(0);
    });
});