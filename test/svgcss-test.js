'use strict';

var grunt = require('grunt');
var path = require('path');

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
    var expectedCss = grunt.file.read(path.join('test/expected/defaultOptions.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/preview.html'));
    test.equal(grunt.file.read(path.join('tmp/defaultOptions.css')), expectedCss, 'default defaultOptions.css');
    test.equal(grunt.file.read(path.join('tmp/preview.html')), expectedHtml, 'default preview.html');
    test.done();
  },
  toCr: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/toCr.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/toCr.html'));
    test.equal(grunt.file.read(path.join('tmp/toCr.css')), expectedCss, 'toCr.css');
    test.equal(grunt.file.read(path.join('tmp/toCr.html')), expectedHtml, 'toCr.html');
    test.done();
  },
  toLf: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/toLf.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/toLf.html'));
    test.equal(grunt.file.read(path.join('tmp/toLf.css')), expectedCss, 'toLf.css');
    test.equal(grunt.file.read(path.join('tmp/toLf.html')), expectedHtml, 'toLf.html');
    test.done();
  },
  toCrlf: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/toCrlf.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/toCrlf.html'));
    test.equal(grunt.file.read(path.join('tmp/toCrlf.css')), expectedCss, 'toCrlf.css');
    test.equal(grunt.file.read(path.join('tmp/toCrlf.html')), expectedHtml, 'toCrlf.html');
    test.done();
  },
  cssprefix: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/cssprefix.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/cssprefix.html'));
    test.equal(grunt.file.read(path.join('tmp/cssprefix.css')), expectedCss, 'cssprefix.css');
    test.equal(grunt.file.read(path.join('tmp/cssprefix.html')), expectedHtml, 'cssprefix.html');
    test.done();
  },
  csstemplate: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/csstemplate.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/csstemplate.html'));
    test.equal(grunt.file.read(path.join('tmp/csstemplate.css')), expectedCss, 'csstemplate.css');
    test.equal(grunt.file.read(path.join('tmp/csstemplate.html')), expectedHtml, 'csstemplate.html');
    test.done();
  },
  previewtemplate: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/previewtemplate.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/previewtemplate.html'));
    test.equal(grunt.file.read(path.join('tmp/previewtemplate.css')), expectedCss, 'previewtemplate.css');
    test.equal(grunt.file.read(path.join('tmp/previewtemplate.html')), expectedHtml, 'previewtemplate.html');
    test.done();
  },
  noPreviewhtml: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/noPreviewhtml.css'));
    test.equal(grunt.file.read(path.join('tmp/noPreviewhtml.css')), expectedCss, 'noPreviewhtml.css');
    test.ok(!grunt.file.exists('test/expected/noPreviewhtml.html'), 'noPreviewhtml.html should not exist');
    test.done();
  },
  minifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/minifycss.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/minifycss.html'));
    test.equal(grunt.file.read(path.join('tmp/minifycss.css')), expectedCss, 'minifycss.css');
    test.equal(grunt.file.read(path.join('tmp/minifycss.html')), expectedHtml, 'minifycss.html');
    test.done();
  },
  banner: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/banner.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/banner.html'));
    test.equal(grunt.file.read(path.join('tmp/banner.css')), expectedCss, 'banner.css');
    test.equal(grunt.file.read(path.join('tmp/banner.html')), expectedHtml, 'banner.html');
    test.done();
  },
  bannerminifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/bannerminifycss.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/bannerminifycss.html'));
    test.equal(grunt.file.read(path.join('tmp/bannerminifycss.css')), expectedCss, 'bannerminifycss.css');
    test.equal(grunt.file.read(path.join('tmp/bannerminifycss.html')), expectedHtml, 'bannerminifycss.html');
    test.done();
  },
  footer: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/footer.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/footer.html'));
    test.equal(grunt.file.read(path.join('tmp/footer.css')), expectedCss, 'footer.css');
    test.equal(grunt.file.read(path.join('tmp/footer.html')), expectedHtml, 'footer.html');
    test.done();
  },
  footerminifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/footerminifycss.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/footerminifycss.html'));
    test.equal(grunt.file.read(path.join('tmp/footerminifycss.css')), expectedCss, 'footerminifycss.css');
    test.equal(grunt.file.read(path.join('tmp/footerminifycss.html')), expectedHtml, 'footerminifycss.html');
    test.done();
  },
  bannerfooter: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/bannerfooter.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/bannerfooter.html'));
    test.equal(grunt.file.read(path.join('tmp/bannerfooter.css')), expectedCss, 'bannerfooter.css');
    test.equal(grunt.file.read(path.join('tmp/bannerfooter.html')), expectedHtml, 'bannerfooter.html');
    test.done();
  },
  bannerfooterminifycss: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/bannerfooterminifycss.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/bannerfooterminifycss.html'));
    test.equal(grunt.file.read(path.join('tmp/bannerfooterminifycss.css')), expectedCss, 'bannerfooterminifycss.css');
    test.equal(grunt.file.read(path.join('tmp/bannerfooterminifycss.html')), expectedHtml, 'bannerfooterminifycss.html');
    test.done();
  },
  insertfinalnewline: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/insertfinalnewline.css'));
    var expectedHtml = grunt.file.read(path.join('test/expected/insertfinalnewline.html'));
    test.equal(grunt.file.read(path.join('tmp/insertfinalnewline.css')), expectedCss, 'insertfinalnewline.css');
    test.equal(grunt.file.read(path.join('tmp/insertfinalnewline.html')), expectedHtml, 'insertfinalnewline.html');
    test.done();
  },
  useViewBoxDimensions: function (test) {
    test.expect(2);
    var expectedCss = grunt.file.read(path.join('test/expected/useViewBoxDimensions.css'));
    test.equal(grunt.file.read(path.join('tmp/useViewBoxDimensions.css')), expectedCss, 'useViewBoxDimensions.css');
    test.ok(!grunt.file.exists('test/expected/useViewBoxDimensions.html'), 'useViewBoxDimensions.html should not exist');
    test.done();
  }
};
