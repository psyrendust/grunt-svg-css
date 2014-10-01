'use strict';
/*
 * grunt-eol
 * https://github.com/psyrendust/grunt-eol
 *
 * Copyright (c) 2013 Larry Gordon
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {

  var fs = require('fs');
  var path = require('path');
  var Handlebars = require('handlebars');
  var DOMParser = require('xmldom').DOMParser;
  var root = path.dirname(__dirname);

  var commentsReg = /<\!\-\-(.*(?=\-\->))\-\->/gmi;
  var newlineReg = /[\r\n]/gmi;
  var newlineEndOfFileReg = /(\r\n|\n|\r)$/;
  var newlinesReg = /\r\n|\n|\r/gi;
  var pxReg = /([\d\.]+)\D*/;
  var singleQuoteReg = /'/gmi;
  var tabReg = /\t/gmi;
  var whitespaceReg = /\s/gm;
  var trailingSemicolon = /;}/gm;
  var svgdatauri = 'data:image/svg+xml;charset=US-ASCII,';

  function getEOL(eol) {
    if (eol === 'lf') {
      return '\n';
    }
    if (eol === 'crlf') {
      return '\r\n';
    }
    if (eol === 'cr') {
      return '\r';
    }
    return grunt.util.linefeed;
  }

  /**
   * Returns base64 string of svg file.
   * @method  buildSVGDataURI
   * @param   {String}         data  Contents of svg file.
   */
  function buildSVGDataURI(data) {
    return svgdatauri + encodeURIComponent(data
      .toString('utf-8')
      .replace(newlineReg, '')
      .replace(tabReg, ' ')
      .replace(commentsReg, '')
      .replace(singleQuoteReg, '\\i'));
  }

  function processFile(options, filepath) {
    var data = fs.readFileSync(filepath).toString() || '';
    var doc = new DOMParser().parseFromString(data ,'text/xml');
    var svgel = doc.getElementsByTagName('svg')[0];
    var width = svgel.getAttribute('width');
    var height = svgel.getAttribute('height');

    if (!width) {
      width = options.defaultWidth;
    }
    if (!height) {
      height = options.defaultHeight;
    }

    return {
      name: path.basename(filepath, '.svg'),
      datauri: buildSVGDataURI(data),
      prefix: '.' + options.cssprefix,
      prefixClass: options.cssprefix,
      width: width.replace(pxReg, '$1px'),
      height: height.replace(pxReg, '$1px')
    };
  }

  function createFile(isCss, options, data, destination, callback) {
    var hbsTemplate = isCss ? options.csstemplate : options.previewtemplate;
    var template = Handlebars.compile(grunt.file.read(path.normalize(hbsTemplate)));
    var eol = getEOL(options.eol);
    var file = template(data);

    // Only minify css
    if (isCss && options.minifycss) {
      file = file
        .replace(newlinesReg, '')
        .replace(whitespaceReg, '')
        .replace(trailingSemicolon, '}');
    } else {
      file = file
        .replace(newlinesReg, eol)
        .replace(newlineEndOfFileReg, '');
    }

    // Only add banner and footer to css
    if (isCss) {
      if (options.banner && options.banner.length > 0) {
        file = options.banner + eol + file;
      }
      if (options.footer && options.footer.length > 0) {
        file = file + eol + options.footer;
      }
    }
    // Insert final newline
    if (options.insertfinalnewline) {
      file = file + eol;
    }

    // Write the destination file.
    grunt.log.write('Creating '.cyan + destination + '...');
    grunt.file.write(destination, file);
    grunt.log.ok();
    if (callback) {
      callback();
    }
  }

  grunt.registerMultiTask('svgcss', 'Convert a folder of SVG files into a single file using data-uri.', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      eol: null,
      cssprefix: 'icon-',
      csstemplate: path.join(root, 'templates', 'css.hbs'),
      defaultWidth: '400px',
      defaultHeight: '300px',
      previewhtml: 'preview.html',
      previewtemplate: path.join(root, 'templates', 'preview.hbs'),
      minifycss: false,
      banner: '',
      footer: '',
      insertfinalnewline: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var results = {
        icons: [],
        cssfile: path.basename(f.dest)
      };
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {
        if (grunt.file.isFile(filepath)) {
          results.icons.push(processFile(options, filepath));
        }
      });

      // Create CSS file
      createFile(true, options, results, f.dest, function() {
        // Create preview.html file
        if (options.previewhtml) {
          createFile(false, options, results, path.join(path.dirname(f.dest), options.previewhtml), done);
        } else {
          done();
        }
      });


    });

  });

};
