bench('Filling a 100-value array', function () {
  this.timeout(1e4)

  it('with array.push(n)', function () {
    var a = []
    for (var i = 0; i < 100; i++) {
      a.push(i)
    }
  })

  it('with array[i] = n', function () {
    var a = []
    for (var i = 0; i < 100; i++) {
      a[i] = i
    }
  })

  it('linked list', function () {
    var a = {}
    var o = a
    for (var i = 0; i < 100; i++) {
      o = o.next = {value: i}
    }
  })

})
