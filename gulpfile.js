(function () {

  'use strict';

  const path = require('path');
  const pump = require('pump');
  const sequence = require('run-sequence');
  const browserify = require('browserify');
  const source = require('vinyl-source-stream');
  const del = require('del');
  const gulp = require('gulp');
  const run = require('gulp-run');
  const tap = require('gulp-tap');
  const wrap = require('gulp-wrap');
  const iife = require('gulp-iife');
  const concat = require('gulp-concat');
  const rename = require('gulp-rename');
  const uglify = require('gulp-uglify');
  const sourcemaps = require('gulp-sourcemaps');
  const sass = require('gulp-sass');
  const sassGlob = require('gulp-sass-glob');

  function drupalBehaviorName(file) {
    return path.basename(file.path, '.js').split('.').pop();
  }

  var config = {};

  config.patternLab = {
    patterns: 'source/_patterns',
    sassFile: 'wwu-styleguide.css',
    sassSrc: [
      'source/sass/styleguide/normalize.scss',
      'source/sass/styleguide/pattern-scaffolding.scss',
      'source/sass/**/*.scss'
    ],
    sassDest: 'source/pattern-lab/css',
    jsFile: 'wwu-styleguide.js',
    jsSrc: [
      'source/js/*.js'
    ],
    jsDest: 'source/pattern-lab/js',
    jsTemplate: {
      src: 'source/js/patternlab.lodash'
    }
  };

  config.sass = {
    src: [
      'source/sass/*.scss',
      '!source/sass/styleguide/*'
    ],
    dest: 'build/css',
    watch: [
      'source/sass/**/*.scss',
      config.patternLab.patterns + '/**/*.scss',
    ],
    options: {
      includePaths: [
        'source/sass',
        'node_modules/breakpoint-sass/stylesheets',
        'node_modules/sass-toolkit/stylesheets',
        'node_modules/singularitygs/stylesheets'
      ],
      outputStyle: 'expanded'
    }
  };

  config.js = {
    src: [
      'source/js/*.js'
    ],
    dest: 'build/js',
    watch: [
      'source/js/**/*.js'
    ],
    template: {
      src: 'source/js/behavior.lodash'
    },
    templateVariable: 'behavior',
    rename: {
      suffix: '.min'
    },
    iife: {
      useStrict: true,
      trimCode: true,
      params: ['$', 'Drupal', 'window', 'document', 'undefined'],
      args: ['jQuery', 'Drupal', 'this', 'this.document']
    },
    uglify: {
      compress: false,
      mangle: false,
      output: {
        beautify: true,
        braces: true,
        comments: true,
        indent_level: 2
      }
    }
  };

  /**
   * Generate CSS.
   */
  gulp.task('sass', function (callback) {
    pump(
      gulp.src(config.sass.src),
      sassGlob(),
      sourcemaps.init(),
      sass(config.sass.options),
      sourcemaps.write(),
      gulp.dest(config.sass.dest),
      callback
    );
  });

  /**
   * Generate JS.
   */
  gulp.task('js', function (callback) {
    pump(
      gulp.src(config.js.src),
      tap(function (file) {
        return pump(
          gulp.src(file.path),
          wrap(config.js.template, { name: drupalBehaviorName(file) }, { variable: config.js.templateVariable }),
          iife(config.js.iife),
          uglify(config.js.uglify),
          gulp.dest(config.js.dest)
        );
      }),
      callback
    );
  });

  /**
   * Generate Pattern Lab CSS.
   */
  gulp.task('patternlab:sass', function (callback) {
    pump(
      gulp.src(config.patternLab.sassSrc),
      sassGlob(),
      sourcemaps.init(),
      sass(config.sass.options),
      concat(config.patternLab.sassFile),
      sourcemaps.write(),
      gulp.dest(config.patternLab.sassDest),
      callback
    );
  });

  /**
   * Generate Pattern Lab JS pre.
   */
  gulp.task('patternlab:js:pre', function (callback) {
    pump(
      gulp.src(config.patternLab.jsSrc),
      sourcemaps.init(),
      concat(config.patternLab.jsFile),
      wrap(config.patternLab.jsTemplate),
      uglify(config.js.uglify),
      sourcemaps.write(),
      gulp.dest(config.patternLab.jsDest),
      callback
    );
  });

  /**
   * Generate Pattern Lab JS post.
   */
  gulp.task('patternlab:js:post', ['patternlab:js:pre'], function (callback) {
    pump(
      browserify(config.patternLab.jsDest + '/' + config.patternLab.jsFile, { debug: true }).bundle(),
      source(config.patternLab.jsFile),
      gulp.dest(config.patternLab.jsDest),
      callback
    );
  });

  /**
   * Generate Pattern Lab JS.
   */
  gulp.task('patternlab:js', ['patternlab:js:post']);

  /**
   * Run Pattern Lab tasks.
   */
  gulp.task('patternlab', ['patternlab:sass', 'patternlab:js']);

  /**
   * Set watch tasks.
   */
  gulp.task('watch', function () {
    gulp.watch(config.sass.watch, ['sass', 'patternlab:sass']);
    gulp.watch(config.js.watch, ['js', 'patternlab:js']);
  });

  /**
   * Clean generated CSS files.
   */
  gulp.task('clean:css', function () {
    return del([config.sass.dest]);
  });

  /**
   * Clean generated JS files.
   */
  gulp.task('clean:js', function () {
    return del([config.js.dest]);
  });

  /**
   * Clean generated Pattern Lab files.
   */
  gulp.task('clean:patternlab', function () {
    return del([config.patternLab.sassDest, config.patternLab.jsDest]);
  });

  /**
   * Run clean tasks.
   */
  gulp.task('clean', ['clean:css', 'clean:js', 'clean:patternlab']);

  /**
   * Gulp default task.
   */
  gulp.task('default', ['sass', 'js']);

})();
