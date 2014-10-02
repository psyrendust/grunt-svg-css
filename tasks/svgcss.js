'use strict';
/*
 * grunt-svg-css
 * https://github.com/psyrendust/grunt-svg-css
 *
 * http://psyrendust.mit-license.org/2014/license.html
 */


module.exports = function(grunt) {

  var fs = require('fs');
  var path = require('path');
  var CleanCSS = require('clean-css');
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
  var svgdatauri = 'data:image/svg+xml;charset=US-ASCII,';

  /**
   * Returns the correct linefeed.
   *
   * @method  getEOL
   * @param   {String}  eol  A shortname used to determine the linefeed to return.
   * @return  {String}
   */
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
   * Minify css using `clean-css`.
   *
   * @method  minify
   * @param   {String}  source   The CSS to minify.
   * @param   {Object}  options  Options to pass to `clean-css`.
   * @return  {String}
   */
  function minify(source, options) {
    try {
      return new CleanCSS(options).minify(source);
    } catch (err) {
      grunt.log.error(err);
      grunt.fail.warn('CSS minification failed.');
    }
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

  /**
   * Reads an SVG file and returns an object that contains the name, datauri,
   * prefix, prefixClass, width and height.
   *
   * @method  processSvgFile
   * @param   {[type]}        filepath  The location of the SVG file to process.
   * @param   {Object}        options   Options to augment the return object.
   * @return  {Object}
   */
  function processSvgFile(filepath, options) {
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

  /**
   * Creates a new file.
   *
   * @method  createFile
   * @param   {Boolean}   isCss        Processes CSS specific options if true.
   * @param   {Object}    options      The options object from the grunt task.
   * @param   {Object}    data         The data used to populate the Handlebars template.
   * @param   {String}    destination  The location to save the file to.
   * @param   {Function}  callback     Call this function after the file has been created.
   */
  function createFile(isCss, options, data, destination, callback) {
    var hbsTemplate = isCss ? options.csstemplate : options.previewtemplate;
    var template = Handlebars.compile(grunt.file.read(path.normalize(hbsTemplate)));
    var eol = getEOL(options.eol);
    var file = template(data);

    // Only minify css
    if (isCss && options.minifycss) {
      file = minify(file, {
        keepSpecialComments: options.keepSpecialComments
      });
    } else {
      file = file.replace(newlinesReg, eol);
    }

    // Remove any newlines at the end of the file
    file = file.replace(newlineEndOfFileReg, '');

    // Only add banner and footer to css
    if (isCss) {
      if (options.banner && options.banner.length > 0) {
        file = options.banner + eol + file;
      }
      if (options.footer && options.footer.length > 0) {
        file = file + eol + options.footer;
      }
    }

    // Insert final newline if true
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
      insertfinalnewline: false,
      keepSpecialComments: '*'
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
          results.icons.push(processSvgFile(filepath, options));
        }
      });

      // Create CSS file
      createFile(true, options, results, path.join(f.dest), function() {
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
