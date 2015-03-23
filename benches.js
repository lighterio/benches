#!/usr/bin/env node
if (process.mainModule == module) {
  var fork = require('child_process').fork;
  var file = __dirname + '/node_modules/exam/exam.js';
  var args = process.argv.splice(2);
  fork(file, args);
  return;
}

var benches = module.exports;

/**
 * Expose the version to module users.
 */
benches.version = require('./package.json').version;
