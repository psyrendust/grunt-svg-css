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
  },
  minifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/minifycss.css');
    var expectedHtml = grunt.file.read('test/expected/minifycss.html');
    test.equal(grunt.file.read('tmp/minifycss.css'), expectedCss, 'minifycss.css');
    test.equal(grunt.file.read('tmp/minifycss.html'), expectedHtml, 'minifycss.html');
    test.done();
  },
  banner: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/banner.css');
    var expectedHtml = grunt.file.read('test/expected/banner.html');
    test.equal(grunt.file.read('tmp/banner.css'), expectedCss, 'banner.css');
    test.equal(grunt.file.read('tmp/banner.html'), expectedHtml, 'banner.html');
    test.done();
  },
  bannerminifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/bannerminifycss.css');
    var expectedHtml = grunt.file.read('test/expected/bannerminifycss.html');
    test.equal(grunt.file.read('tmp/bannerminifycss.css'), expectedCss, 'bannerminifycss.css');
    test.equal(grunt.file.read('tmp/bannerminifycss.html'), expectedHtml, 'bannerminifycss.html');
    test.done();
  },
  footer: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/footer.css');
    var expectedHtml = grunt.file.read('test/expected/footer.html');
    test.equal(grunt.file.read('tmp/footer.css'), expectedCss, 'footer.css');
    test.equal(grunt.file.read('tmp/footer.html'), expectedHtml, 'footer.html');
    test.done();
  },
  footerminifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/footerminifycss.css');
    var expectedHtml = grunt.file.read('test/expected/footerminifycss.html');
    test.equal(grunt.file.read('tmp/footerminifycss.css'), expectedCss, 'footerminifycss.css');
    test.equal(grunt.file.read('tmp/footerminifycss.html'), expectedHtml, 'footerminifycss.html');
    test.done();
  },
  bannerfooter: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/bannerfooter.css');
    var expectedHtml = grunt.file.read('test/expected/bannerfooter.html');
    test.equal(grunt.file.read('tmp/bannerfooter.css'), expectedCss, 'bannerfooter.css');
    test.equal(grunt.file.read('tmp/bannerfooter.html'), expectedHtml, 'bannerfooter.html');
    test.done();
  },
  bannerfooterminifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/bannerfooterminifycss.css');
    var expectedHtml = grunt.file.read('test/expected/bannerfooterminifycss.html');
    test.equal(grunt.file.read('tmp/bannerfooterminifycss.css'), expectedCss, 'bannerfooterminifycss.css');
    test.equal(grunt.file.read('tmp/bannerfooterminifycss.html'), expectedHtml, 'bannerfooterminifycss.html');
    test.done();
  },
  insertfinalnewline: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read('test/expected/insertfinalnewline.css');
    var expectedHtml = grunt.file.read('test/expected/insertfinalnewline.html');
    test.equal(grunt.file.read('tmp/insertfinalnewline.css'), expectedCss, 'insertfinalnewline.css');
    test.equal(grunt.file.read('tmp/insertfinalnewline.html'), expectedHtml, 'insertfinalnewline.html');
    test.done();
  }
};
