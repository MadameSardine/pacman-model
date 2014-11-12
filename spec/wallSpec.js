describe('Wall',function(){
  var wall

  it('should have a name',function(){
    wall = new Wall
    expect(wall.name).toEqual('wall')
  });
});