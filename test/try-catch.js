bench('Try-catch', function () {

  this.sampleRuns = 1e2;
  this.minimumPasses = 1e3;

  var a = 1;

  function multiply() {
    a *= 2;
  }

  it('omitted', function () {
    multiply();
  });

  it('inside a method', function () {
    try {
      multiply();
    }
    catch (e) {
    }
  });

  try {
    it('outside a method', function () {
      multiply();
    });
  }
  catch (e) {
  }

});
