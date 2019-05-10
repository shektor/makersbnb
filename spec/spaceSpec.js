const Space = require('../src/space')

describe('Space', function(){
  describe('.all', function() {
    it('returns all spaces', function(){
      var aSpace = new Space("Castle Black", "John Snow is here", "1 arm")
      spaces = Space.all()
      expect(spaces).toContain(aSpace)
    })
  })

  // describe('.add', function() {
  //   it('adds to the spaces array', function() {
  //     var anotherSpace = Space.add("Castle Blue", "John Snow is not here", "5 arms")
  //     expect(Space.all()).toContain(anotherSpace)
  //   })
  // })
})
