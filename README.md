# <a href="http://lighter.io/benches" style="font-size:40px;text-decoration:none;color:#000">Benches</a>
[![Chat](https://badges.gitter.im/chat.svg)](//gitter.im/lighterio)
[![Version](https://img.shields.io/npm/v/benches.svg)](//www.npmjs.com/package/benches)
[![Downloads](https://img.shields.io/npm/dm/benches.svg)](//www.npmjs.com/package/benches)
[![Build](https://img.shields.io/travis/lighterio/benches.svg)](//travis-ci.org/lighterio/benches)
[![Coverage](https://img.shields.io/coveralls/lighterio/benches/master.svg)](//coveralls.io/r/lighterio/benches)
[![Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](//github.com/feross/standard)

Benches is a curated collection of benchmark tests, aimed at educating
JavaScript developers on the performance characteristics of different coding
patterns. This module is not meant to be depended upon, but rather to use as
a reference when deciding between multiple possible implementations of an
algorithm.

Contributions are encouraged, but this is not meant to be an exhaustive set of
benchmarks. For that, feel free to use something like [jsperf](jsperf.com).

## Quick Start

Install `benches` globally:
```bash
npm install -g benches
```

Run benches:
```bash
benches
```

## How Does it Work?

Benches uses the [Exam](http://lighter.io/exam) test runner's `bench` function
to set up competing benchmarks. You can use the same functionality in your own
projects by installing [Exam with npm](https://npmjs.org/package/exam).

## How Can I Help?

Get your own Benches development environment set up, and start adding your own
tests!

  1. Fork [Benches on GitHub](https://github.com/lighterio/benches).
  1. Clone your repository.
      ```bash
      git clone https://github.com/$GITHUB_USER/benches
      cd benches
      ```
  1. Run tests.
      ```bash
      npm test
      ```
  1. Add well-crafted tests to the `test` directory, and submit a pull request.


## Acknowledgements

We would like to thank all of the amazing people who use, support,
promote, enhance, document, patch, and submit comments & issues.
Benches couldn't exist without you.

Additionally, huge thanks go to [eBay](http://www.ebay.com) for employing
and supporting [Benches](http://lighter.io/benches) project maintainers,
and for being an epically awesome place to work (and play).
