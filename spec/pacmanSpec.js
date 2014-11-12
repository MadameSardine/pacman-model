describe ("Pacman", function (){

  var pacman;

  beforeEach(function(){
    maze = new Maze(30, 30);
    maze.generate();
    pacman = new Pacman();
    maze.addPacman(pacman);

  });

  describe ('on initialize', function(){

    it('has 3 lives',function(){
      expect(pacman.lifeCount).toEqual(3);
    });

    it('has zero points',function(){
      expect(pacman.pointCount).toEqual(0);
    });

    it('has a name', function() {
      expect(pacman.name).toEqual('pacman')

    })
  });

  describe('when playing',function(){
    it('can lose a life',function(){
      pacman.loseLife();
      expect(pacman.lifeCount).toEqual(2);
    });

    it('can gain one point',function(){
      pacman.gainOnePoint();
      expect(pacman.pointCount).toEqual(1);
    });

    it('has a location',function(){
      expect(pacman.location).toEqual(466)
    });

    it('can move by one cell right',function(){
      pacman.moveRight();
      expect(pacman.location).toEqual(467)

    })

    it('can move by one cell left',function(){
      pacman.moveLeft();
      expect(pacman.location).toEqual(465)

    })

     it('can move by one cell up',function(){
      pacman.moveUp();
      expect(pacman.location).toEqual(436)

    })

      it('can move by one cell down',function(){
      pacman.moveDown();
      expect(pacman.location).toEqual(496)

    })


    it('can move to a cell containing a dot',function(){
      var dot = new Dot;
      pacman.maze.cells[1].content = dot;
      pacman.location = 0
      pacman.moveRight();
      expect(pacman.maze.cells[1].content).toEqual(pacman)
    });

    it('knows if has eaten a dot',function(){
      var dot = new Dot;
      pacman.maze.cells[1].content = dot;
      pacman.location = 0
      pacman.moveRight();
      expect(pacman.pointCount).toEqual(1)
    });

    it("can't move to a cell containing a wall",function(){
      var wall = new Wall;
      pacman.maze.cells[1].content = wall;
      pacman.location = 0;
      pacman.moveRight();
      expect(pacman.location).toEqual(0);
    });


  });

});