bench('Loops', function () {
  this.timeout(6e5)

  var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it('for, with ++i', function () {
    var s = 0
    for (var i = 0, l = a.length; i < l; ++i) {
      s += a[i]
    }
  })

  it('for, with i++', function () {
    var s = 0
    for (var i = 0, l = a.length; i < l; i++) {
      s += a[i]
    }
  })

  it('for, with i++ and external vars', function () {
    var s = 0, i, l = a.length
    for (i = 0; i < l; i++) {
      s += a[i]
    }
  })

  it('while', function () {
    var s = 0
    var l = a.length
    var i = -1
    while (++i < l) {
      s += a[i]
    }
  })

})
