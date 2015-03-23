describe('Array', function () {

  describe('.length', function () {

    it('counts the elements', function () {
      var a = ['a', 'b', 'c'];
      is(a.length, 3);
      is.same(a, ['a', 'b', 'c']);
    });

  });

});

bench('Building strings from 2 pieces', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    return ['a', 'b'].join('');
  });

  it('with concatenation', function () {
    return 'a' + 'b';
  });

});

bench('Building strings from 3 pieces', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    return ['a', 'b', 'c'].join('');
  });

  it('with concatenation', function () {
    return 'a' + 'b' + 'c';
  });

});

bench('Building strings from 4 pieces', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    return ['a', 'b', 'c', 'd'].join('');
  });

  it('with concatenation', function () {
    return 'a' + 'b' + 'c' + 'd';
  });

});

bench('Building strings from 5 pieces', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    return ['a', 'b', 'c', 'd', 'e'].join('');
  });

  it('with concatenation', function () {
    return 'a' + 'b' + 'c' + 'd' + 'e';
  });

});

bench('Building strings from 6 pieces', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    return ['a', 'b', 'c', 'd', 'e', 'f'].join('');
  });

  it('with concatenation', function () {
    return 'a' + 'b' + 'c' + 'd' + 'e' + 'f';
  });

});

bench('Building strings from 7 pieces', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g'].join('');
  });

  it('with concatenation', function () {
    return 'a' + 'b' + 'c' + 'd' + 'e' + 'f' + 'g';
  });

});

bench('Building strings from 10 pieces', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].join('');
  });

  it('with concatenation', function () {
    return 'a' + 'b' + 'c' + 'd' + 'e' + 'f' + 'g' + 'i' + 'j';
  });

});

bench('Building strings from 10 pieces in a loop', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  it('with Array.join', function () {
    var a = new Array(10);
    for (var i = 0; i < 10; i++) {
      a[i] = 'a';
    }
    return a.join('');
  });

  it('with concatenation', function () {
    var a = '';
    for (var i = 0; i < 10; i++) {
      a[i] = 'a';
    }
    return ;
  });

});
