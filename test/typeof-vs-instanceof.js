bench('Checking arrays among functions', function () {
  this.timeout(6e4)

  var a = []
  for (var i = 0; i < 100; i++) {
    a[i] = (i % 2) ? [] : function () {}
  }

  it('with typeof', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += (typeof a[i] == 'function') ? 0 : 1
    }
  })

  it('with strict typeof', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += (typeof a[i] === 'function') ? 0 : 1
    }
  })

  it('with pop', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += a[i].pop ? 1 : 0
    }
  })

  it('with instanceof', function () {
    var n = 0
    for (var i = 0; i < 100; i++) {
      n += (a[i] instanceof Array) ? 1 : 0
    }
  })

})
