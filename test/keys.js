bench('Key iteration', function () {

  this.timeout(1e4)
  this.sampleSize = 1e4
  this.minimumPasses = 1e2
  this.z = 10

  var o = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
    s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }

  it('for...in', function () {
    var n = 0
    for (var k in o) {
      n += o[k]
    }
  })

  it('for, over Object.keys()', function () {
    var n = 0
    var a = Object.keys(o)
    for (var i = 0, l = a.length; i < l; i++) {
      var k = a[i]
      n += o[k]
    }
  })

  var a = Object.keys(o)

  it('for, over cached keys', function () {
    var n = 0
    for (var i = 0, l = a.length; i < l; i++) {
      var k = a[i]
      n += o[k]
    }
  })

  it('forEach, over cached keys', function () {
    var n = 0
    for (var i = 0, l = a.length; i < l; i++) {
      var k = a[i]
      n += o[k]
    }
  })

})
