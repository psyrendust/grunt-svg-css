'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.test = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  defaultOptions: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/defaultOptions.css');
    var expectedHtml = grunt.file.read('test/expected/preview.html');
    test.equal(grunt.file.read('tmp/defaultOptions.css'), expectedCss, 'default defaultOptions.css');
    test.equal(grunt.file.read('tmp/preview.html'), expectedHtml, 'default preview.html');
    test.done();
  },
  toCr: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/toCr.css');
    var expectedHtml = grunt.file.read('test/expected/toCr.html');
    test.equal(grunt.file.read('tmp/toCr.css'), expectedCss, 'toCr.css');
    test.equal(grunt.file.read('tmp/toCr.html'), expectedHtml, 'toCr.html');
    test.done();
  },
  toLf: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/toLf.css');
    var expectedHtml = grunt.file.read('test/expected/toLf.html');
    test.equal(grunt.file.read('tmp/toLf.css'), expectedCss, 'toLf.css');
    test.equal(grunt.file.read('tmp/toLf.html'), expectedHtml, 'toLf.html');
    test.done();
  },
  toCrlf: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/toCrlf.css');
    var expectedHtml = grunt.file.read('test/expected/toCrlf.html');
    test.equal(grunt.file.read('tmp/toCrlf.css'), expectedCss, 'toCrlf.css');
    test.equal(grunt.file.read('tmp/toCrlf.html'), expectedHtml, 'toCrlf.html');
    test.done();
  },
  cssprefix: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/cssprefix.css');
    var expectedHtml = grunt.file.read('test/expected/cssprefix.html');
    test.equal(grunt.file.read('tmp/cssprefix.css'), expectedCss, 'cssprefix.css');
    test.equal(grunt.file.read('tmp/cssprefix.html'), expectedHtml, 'cssprefix.html');
    test.done();
  },
  csstemplate: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/csstemplate.css');
    var expectedHtml = grunt.file.read('test/expected/csstemplate.html');
    test.equal(grunt.file.read('tmp/csstemplate.css'), expectedCss, 'csstemplate.css');
    test.equal(grunt.file.read('tmp/csstemplate.html'), expectedHtml, 'csstemplate.html');
    test.done();
  },
  previewtemplate: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/previewtemplate.css');
    var expectedHtml = grunt.file.read('test/expected/previewtemplate.html');
    test.equal(grunt.file.read('tmp/previewtemplate.css'), expectedCss, 'previewtemplate.css');
    test.equal(grunt.file.read('tmp/previewtemplate.html'), expectedHtml, 'previewtemplate.html');
    test.done();
  },
  noPreviewhtml: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/noPreviewhtml.css');
    test.equal(grunt.file.read('tmp/noPreviewhtml.css'), expectedCss, 'noPreviewhtml.css');
    test.ok(!grunt.file.exists('test/expected/noPreviewhtml.html'), 'noPreviewhtml.html should not exist');
    test.done();
  }
};
