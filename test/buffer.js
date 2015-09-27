bench('Reading', function () {

  var request = new Buffer('GET / HTTP/1.1\r\n' +
    'Host: localhost:8124\r\n' +
    'Connection: keep-alive\r\n' +
    'Cache-Control: max-age=0\r\n' +
    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\r\n' +
    'Upgrade-Insecure-Requests: 1\r\n' +
    'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36\r\n' +
    'Accept-Encoding: gzip, deflate, sdch\r\n' +
    'Accept-Language: en-US,en;q=0.8\r\n' +
    '\r\n', 'utf8')

  it('split', function () {
    var buffer = request
    var lines = ('' + buffer).split('\r\n')
  })

  it('for loop', function () {
    var buffer = request
    var data = ''
    for (var i = 0, l = buffer.length; i < l; i++) {
      data += buffer[i]
    }
  })

})
