bench('Reading', function () {

  var request = 'GET / HTTP/1.1\r\n' +
    'Host: localhost:8124\r\n' +
    'Connection: keep-alive\r\n' +
    'Cache-Control: max-age=0\r\n' +
    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\r\n' +
    'Upgrade-Insecure-Requests: 1\r\n' +
    'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36\r\n' +
    'Accept-Encoding: gzip, deflate, sdch\r\n' +
    'Accept-Language: en-US,en;q=0.8\r\n' +
    '\r\n'

  it('split', function () {
    var headers = {}
    var string = request
    var lines = string.split('\r\n')
    for (var i = 0, l = lines.length; i < l; i++) {
      if (i) {
        var line = lines[i]
        var colon = line.indexOf(':')
        var name = line.substr(0, colon).toLowerCase()
        var value = line.substr(colon + 1).trim()
        headers[name] = value
      }
    }
  })

  it('split-replace', function () {
    var headers = {}
    var string = request
    var lines = string.split('\r\n')
    for (var i = 0, l = lines.length; i < l; i++) {
      if (i) {
        lines[i].replace(/^([^:]+):\s*(.*)$/, function (match, name, value) {
          name = name.toLowerCase()
          headers[name] = value
        })
      }
    }
  })

  it('replace', function () {
    var headers = {}
    var string = request
    var i = 0
    string.replace(/(.*?)\r\n/g, function (match, line) {
      if (i) {
        var colon = line.indexOf(':')
        var name = line.substr(0, colon).toLowerCase()
        var value = line.substr(colon + 1).trim()
        headers[name] = value
      }
      i++
    })
  })

  it('match', function () {
    var headers = {}
    var string = request
    var matches = string.match(/(.*?)\r\n/g)
    for (var i = 0, l = matches.length; i < l; i++) {
      if (i) {
        var line = matches[i]
        var colon = line.indexOf(':')
        var name = line.substr(0, colon).toLowerCase()
        var value = line.substr(colon + 1).trim()
        headers[name] = value
      }
    }
  })

})
