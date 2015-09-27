bench('Checking for truthiness of undefined among functions', function () {
  this.timeout(6e4)

  var a = []
  for (var i = 0; i < 100; i++) {
    a[i] = (i % 2) ? undefined : function () {}
  }

  it('with typeof', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += (typeof a[i] === 'undefined') ? 1 : 0
    }
  })

  it('with negated typeof', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += (typeof a[i] !== 'undefined') ? 0 : 1
    }
  })

  it('with not', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += !a[i] ? 1 : 0
    }
  })

  /*it('with undefined', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += (a[i] === undefined) ? 1 : 0
    }
  })*/

})
