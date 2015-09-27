bench('Domains vs. Try-catch', function () {

  this.sampleRuns = 1e2
  this.minimumPasses = 1e3

  var domain = require('domain')
  var a = 1

  function multiply () {
    a *= 1
  }

  it('try-catch', function () {
    try {
      multiply()
    } catch (e) {
      console.error(e.stack)
    }
  })

  it('domains', function () {
    var d = domain.create()
    d.on('error', function (e) {
      console.error(e.stack)
    })
    d.run(function () {
      multiply()
    })
  })

})
