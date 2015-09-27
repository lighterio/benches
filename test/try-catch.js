bench('Try-catch', function () {
  this.timeout(6e4)

  var a = 1

  function multiply () {
    a *= 2
  }

  it('omitted', function () {
    multiply()
  })

  it('inside a method', function () {
    try {
      multiply()
    } catch (e) {
    }
  })

  try {
    it('outside a method', function () {
      multiply()
    })
  } catch (e) {
  }

})
