/*
 * grunt-svg-css
 * https://github.com/psyrendust/grunt-svg-css
 *
 * Copyright (c) 2013 Larry Gordon
 * Licensed under the MIT license.
 */


'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        config: '.eslintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    svgcss: {
      defaultOptions: {
        files: {
          'tmp/defaultOptions.css': ['test/fixtures/*.svg']
        }
      },
      toLf: {
        options: {
          eol: 'lf',
          previewhtml: 'toLf.html'
        },
        files: {
          'tmp/toLf.css': ['test/fixtures/*.svg']
        }
      },
      toCrlf: {
        options: {
          eol: 'crlf',
          previewhtml: 'toCrlf.html'
        },
        files: {
          'tmp/toCrlf.css': ['test/fixtures/*.svg']
        }
      },
      toCr: {
        options: {
          eol: 'cr',
          previewhtml: 'toCr.html'
        },
        files: {
          'tmp/toCr.css': ['test/fixtures/*.svg']
        }
      },
      cssprefix: {
        options: {
          cssprefix: 'glyphicon-',
          previewhtml: 'cssprefix.html'
        },
        files: {
          'tmp/cssprefix.css': ['test/fixtures/*.svg']
        }
      },
      csstemplate: {
        options: {
          csstemplate: 'test/fixtures/css.hbs',
          previewhtml: 'csstemplate.html'
        },
        files: {
          'tmp/csstemplate.css': ['test/fixtures/*.svg']
        }
      },
      previewtemplate: {
        options: {
          previewtemplate: 'test/fixtures/preview.hbs',
          previewhtml: 'previewtemplate.html'
        },
        files: {
          'tmp/previewtemplate.css': ['test/fixtures/*.svg']
        }
      },
      noPreviewhtml: {
        options: {
          previewhtml: null
        },
        files: {
          'tmp/noPreviewhtml.css': ['test/fixtures/*.svg']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      options: {
        reporter: 'verbose'
      },
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['eslint', 'clean', 'svgcss', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
