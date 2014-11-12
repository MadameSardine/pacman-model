describe('Ghost',function(){

  var ghost

  it('should have a name',function(){
    ghost = new Ghost;
    expect(ghost.name).toEqual('ghost')
  });
});