describe('Array', function () {

  describe('.length', function () {

    it('counts the elements', function () {
      var a = ['a', 'b', 'c']
      is(a.length, 3)
      is.same(a, ['a', 'b', 'c'])
    })

  })

})
