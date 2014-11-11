describe ("Pacman", function (){

  var pacman;

  beforeEach(function(){
    pacman = new Pacman();

  });

  describe ('on initialize', function(){

    it('has 3 lives',function(){
      expect(pacman.lifeCount).toEqual(3);
    });

    it('has zero points',function(){
      expect(pacman.pointCount).toEqual(0);
    });

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


  });

});