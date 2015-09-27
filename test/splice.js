bench('Splicing the 10th element from a 120-element array 100 times', function () {
  this.timeout(6e4)

  function run (fn) {
    var i = 110
    var a = new Array(i)
    while (i--) {
      a[i] = i
    }
    i = 100
    while (i--) {
      fn(a, 5)
    }
    //is.same(a, [0, 1, 2, 3, 4, 105, 106, 107, 108, 109])
  }

  it('with array.splice()', function () {
    run(function (a, i) {
      a.splice(i, 1)
    })
  })

  it('with spliceOne', function () {
    run(function (a, i) {
      for (var j = i, k = j + 1, n = a.length; k < n; j += 1, k += 1) {
        a[j] = a[k]
      }
      a.pop()
    })
  })

  it('with while', function () {
    run(function (a, i) {
      var l = a.length - 1
      while (i < l) {
        a[i] = a[++i]
      }
      a.pop()
    })
  })

})
