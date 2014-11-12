describe('Corridor',function(){

  var corridor

  beforeEach(function(){
    corridor = new Corridor;
  });

  it('should be available',function(){
    expect(corridor.name).toEqual('available')

  });

});