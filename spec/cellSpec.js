describe("Cell", function() {

  var cell

  beforeEach(function(){
    cell = new Cell
    pacman = new Pacman
  })

 describe("on initialize", function() {

  it("has available space", function() {
    expect(cell.content.name).toEqual('available')

  })

 })

})