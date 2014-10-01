# grunt-svg-css [![NPM version](https://badge.fury.io/js/grunt-svg-css.svg)](http://badge.fury.io/js/grunt-svg-css) [![Build Status](https://travis-ci.org/psyrendust/grunt-svg-css.svg)](https://travis-ci.org/psyrendust/grunt-svg-css)

> Convert a folder of SVG files into a single file using data-uri.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svg-css --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg-css');
```

## The "svgcss" task

### Overview
In your project's Gruntfile, add a section named `svgcss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svgcss: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      options: {
        // Target-specific options go here.
      },
      // Target-specific file lists and/or options go here.
    },
  }
})
```

### Options

#### options.eol
Type: `String`  
Default value: `null`  

The line ending you would like to convert to. Defaults to system line endings returned by `grunt.util.linefeed`.

| Optional Values | Converts To |
|-----------------|-------------|
| `'lf'`          | `\n`        |
| `'crlf'`        | `\r\n`      |
| `'cr'`          | `\r`        |


#### options.cssprefix
Type: `String`  
Default value: `icon-`  

A string to prefix all css classes with.


#### options.csstemplate

Type: `String`
Default value: Goes to the `templates/css.hbs` file

Location of a handlebars template that will allow you to structure your CSS file the way that you choose. See [Handlebars Variables](#handlebars-variables) for details on available variables.

Example of `css.hbs` file contents:

```handlebars
{{#each icons}}
{{#with this}}
{{prefix}}{{name}} { background-image: url("{{datauri}}"); background-repeat: no-repeat; }
{{/with}}
{{/each}}
```


#### options.defaultWidth
Type: `String`  
Default: `"400px"`  

A string that MUST be defined in px that will be the size of the PNG if there is no width given in the SVG element.


#### options.defaultHeight
Type: `String`  
Default: `"300px"`  

Similar to defaultWidth, but for height.


#### options.previewhtml
Type: `String`  
Default value: `"preview.html"`  

The name of the generated HTML file containing svg data uris. No preview html file will be generated if set to `null`.


#### options.previewtemplate

Type: `String`  
Default value: Goes to the `templates/preview.hbs` file  

Takes a path to the template that will be used for the `preview.html`. See [Handlebars Variables](#handlebars-variables) for details on available variables.

Example of `preview.hbs` file contents:

```handlebars
<!doctype HTML>
<html>
<head>
  <title>Icons Preview!</title>
  <style>
    body {
      background-image: linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(transparent 75%, #eee 75%), linear-gradient(transparent 75%, #eee 75%);
      width: 100%;
      background-size: 10px 10px;
    }
  </style>
  <link href="{{cssfile}}" rel="stylesheet">
</head>
<body>
{{#each icons}}
  {{#with this}}
  <pre><code>{{prefix}}{{name}}:</code></pre><div class="{{prefixClass}}{{name}}" style="width: {{width}}; height: {{height}};" ></div><hr/>
  {{/with}}
{{/each}}
</body>
</html>
```


#### options.banner
Type: `String`  
Default: `""`  

Prepend the specified string to the output file. Useful for licensing information.


#### options.footer
Type: `String`  
Default: `""`  

Append the specified string to the output file.


#### options.footer
Type: `String`  
Default: `""`  

Append the specified string to the output file.


#### options.insertfinalnewline
Type: `Boolean`  
Default: `false`  

If `true` output files will end with a newline.


### Handlebars Variables

These are the variables that are made available to the Handlebars template for the CSS and Preview templates.

An `drag-handle.svg` will generate the following `icons` object.

```js
icons: [
    {
        name: 'drag-handle',
        datauri: 'data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%20Tiny%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11-tiny.dtd%22%3E%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22tiny%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20viewBox%3D%220%200%206%2010%22%20xml%3Aspace%3D%22preserve%22%3E%3Crect%20fill%3D%22%23CDCCCC%22%20width%3D%222%22%20height%3D%222%22%2F%3E%3Crect%20x%3D%224%22%20fill%3D%22%23CDCCCC%22%20width%3D%222%22%20height%3D%222%22%2F%3E%3Crect%20y%3D%224%22%20fill%3D%22%23CDCCCC%22%20width%3D%222%22%20height%3D%222%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%224%22%20fill%3D%22%23CDCCCC%22%20width%3D%222%22%20height%3D%222%22%2F%3E%3Crect%20y%3D%228%22%20fill%3D%22%23CDCCCC%22%20width%3D%222%22%20height%3D%222%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%228%22%20fill%3D%22%23CDCCCC%22%20width%3D%222%22%20height%3D%222%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        prefix: '.icon-',
        prefixClass: 'icon-',
        width: '6px',
        height: '10px'
    }
]
```

* __icons__: An array of icons.
    - __name__: SVG name without the extension.
    - __datauri__: The datauri of the svg.
    - __prefix__: The prefix to use for the class name in the css file.
    - __prefixClass__: The prefix to use for hte class name in the preview file.
    - __width__: The width of the SVG, defaults to '400px' if it's undefined.
    - __height__: The height of the SVB, defaults to '300px' if it's undefined.


### Usage Examples

#### Default Options
In this example, the default options are used to convert a folder of SVG's to a single css file.

```js
grunt.initConfig({
  svgcss: {
    defaultOptions: {
      files: {
        'tmp/defaultOptions.css': ['test/fixtures/*.svg']
      }
    }
  }
})
```

#### Custom Options
In this example, custom options are used to convert all files to `crlf`.

```js
grunt.initConfig({
  svgcss: {
    toCrlf: {
      options: {
        eol: 'crlf',
        previewhtml: 'toCrlf.html'
      },
      files: {
        'tmp/toCrlf.css': ['test/fixtures/*.svg']
      }
    }
  }
})
```

See this packages `Gruntfile.js` for more usage examples.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
