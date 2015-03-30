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
      tmp: ['tmp']
    },

    // Configuration to be run (and then tested).
    svgcss: {
      defaultOptions: {
        options: {
          eol: 'lf'
        },
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
          eol: 'lf',
          cssprefix: 'glyphicon-',
          previewhtml: 'cssprefix.html'
        },
        files: {
          'tmp/cssprefix.css': ['test/fixtures/*.svg']
        }
      },
      csstemplate: {
        options: {
          eol: 'lf',
          csstemplate: 'test/fixtures/css.hbs',
          previewhtml: 'csstemplate.html'
        },
        files: {
          'tmp/csstemplate.css': ['test/fixtures/*.svg']
        }
      },
      previewtemplate: {
        options: {
          eol: 'lf',
          previewtemplate: 'test/fixtures/preview.hbs',
          previewhtml: 'previewtemplate.html'
        },
        files: {
          'tmp/previewtemplate.css': ['test/fixtures/*.svg']
        }
      },
      noPreviewhtml: {
        options: {
          eol: 'lf',
          previewhtml: null
        },
        files: {
          'tmp/noPreviewhtml.css': ['test/fixtures/*.svg']
        }
      },
      minifycss: {
        options: {
          eol: 'lf',
          minifycss: true,
          csstemplate: 'test/fixtures/css.hbs',
          previewhtml: 'minifycss.html'
        },
        files: {
          'tmp/minifycss.css': ['test/fixtures/*.svg']
        }
      },
      banner: {
        options: {
          eol: 'lf',
          banner: [
            '/*!',
            ' * Grunt SVG CSS',
            ' * ',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' * ',
            ' */'
          ].join('\n'),
          previewhtml: 'banner.html'
        },
        files: {
          'tmp/banner.css': ['test/fixtures/*.svg']
        }
      },
      bannerminifycss: {
        options: {
          eol: 'lf',
          banner: [
            '/*!',
            ' * Grunt SVG CSS',
            ' * ',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' * ',
            ' */'
          ].join('\n'),
          minifycss: true,
          previewhtml: 'bannerminifycss.html'
        },
        files: {
          'tmp/bannerminifycss.css': ['test/fixtures/*.svg']
        }
      },
      footer: {
        options: {
          eol: 'lf',
          footer: [
            '/*!',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' */'
          ].join('\n'),
          previewhtml: 'footer.html'
        },
        files: {
          'tmp/footer.css': ['test/fixtures/*.svg']
        }
      },
      footerminifycss: {
        options: {
          eol: 'lf',
          footer: [
            '/*!',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' */'
          ].join('\n'),
          minifycss: true,
          previewhtml: 'footerminifycss.html'
        },
        files: {
          'tmp/footerminifycss.css': ['test/fixtures/*.svg']
        }
      },
      bannerfooter: {
        options: {
          eol: 'lf',
          banner: [
            '/*!',
            ' * Grunt SVG CSS',
            ' * ',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' * ',
            ' */'
          ].join('\n'),
          footer: [
            '/*!',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' */'
          ].join('\n'),
          previewhtml: 'bannerfooter.html'
        },
        files: {
          'tmp/bannerfooter.css': ['test/fixtures/*.svg']
        }
      },
      bannerfooterminifycss: {
        options: {
          eol: 'lf',
          banner: [
            '/*!',
            ' * Grunt SVG CSS',
            ' * ',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' * ',
            ' */'
          ].join('\n'),
          footer: [
            '/*!',
            ' * Licensed under the Apache v2.0 License',
            ' * http://www.apache.org/licenses/LICENSE-2.0',
            ' */'
          ].join('\n'),
          minifycss: true,
          previewhtml: 'bannerfooterminifycss.html'
        },
        files: {
          'tmp/bannerfooterminifycss.css': ['test/fixtures/*.svg']
        }
      },
      insertfinalnewline: {
        options: {
          eol: 'lf',
          previewhtml: 'insertfinalnewline.html',
          insertfinalnewline: true
        },
        files: {
          'tmp/insertfinalnewline.css': ['test/fixtures/*.svg']
        }
      },
      useViewBoxDimensions: {
        options: {
          eol: 'lf',
          previewhtml: null,
          cssprefix: 'icon-dims-',
          csstemplate: 'test/fixtures/css.hbs',
          useViewBoxDimensions: true
        },
        files: {
          'tmp/useViewBoxDimensions.css': ['test/fixtures/*.svg']
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
