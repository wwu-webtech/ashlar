(function () {

  'use strict';

  const path = require('path');
  const gulp = require('gulp');
  const run = require('gulp-run');
  const sass = require('gulp-sass');
  const sassGlob = require('gulp-sass-glob');
  const sourcemaps = require('gulp-sourcemaps');
  const uglify = require('gulp-uglify');
  const rename = require('gulp-rename');
  const concat = require('gulp-concat');
  const wrap = require('gulp-wrap');
  const tap = require('gulp-tap');
  const clean = require('gulp-clean');
  const source = require('vinyl-source-stream');
  const browserify = require('browserify');
  const runSequence = require('run-sequence');

  var config = {};

  config.patterns = {
    dir: './source/_patterns'
  };

  config.patternLab = {
    sassFile: 'wwu-styleguide.css',
    sassSrc: [
      './source/sass/**/*.scss'
    ],
    sassDest: './source/pattern-lab/css',
    jsFile: 'wwu-styleguide.js',
    jsSrc: [
      './source/js/*.js'
    ],
    jsDest: './source/pattern-lab/js',
    jsTemplate: {
      src: './source/js/patternlab.lodash'
    }
  };

  config.sass = {
    src: [
      './source/sass/*.scss',
      '!./source/sass/styleguide/*'
    ],
    dest: './build/css',
    watch: [
      './source/sass/**/*.scss',
      config.patterns.dir + '/**/*.scss',
    ],
    options: {
      includePaths: [
        './source/sass',
        './node_modules/shila-css',
        './node_modules/breakpoint-sass/stylesheets',
        './node_modules/sass-toolkit/stylesheets',
        './node_modules/singularitygs/stylesheets'
      ],
      outputStyle: 'expanded'
    }
  };

  config.js = {
    src: [
      './source/js/*.js'
    ],
    dest: './build/js',
    watch: [
      './source/js/**/*.js'
    ],
    template: {
      src: './source/js/behavior.lodash'
    },
    templateVariable: 'behavior',
    rename: {
      suffix: '.min'
    }
  };

  config.uglify = {
    compress: false,
    mangle: false,
    output: {
      beautify: true,
      braces: true,
      indent_level: 2,
    }
  };

  /**
   * Generate CSS.
   */
  gulp.task('sass', function () {
    return gulp.src(config.sass.src)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.sass.dest));
  });

  /**
   * Generate JS.
   */
  gulp.task('js', function () {
    return gulp.src(config.js.src)
    .pipe(tap(function (file) {
      var behaviorName = path.basename(file.path, '.js').split('.').pop();

      return gulp.src(file.path)
      .pipe(wrap(config.js.template, { name: behaviorName }, { variable: config.js.templateVariable }))
      .pipe(uglify(config.uglify))
      .pipe(rename(config.js.rename))
      .pipe(gulp.dest(config.js.dest));
    }));
  });

  /**
   * Generate Pattern Lab CSS.
   */
  gulp.task('patternlab:sass', function () {
    return gulp.src(config.patternLab.sassSrc)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(concat(config.patternLab.sassFile))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.patternLab.sassDest));
  });

  /**
   * Generate Pattern Lab JS: concatenate, wrap, and format.
   */
  gulp.task('patternlab:js:pre', function () {
    return gulp.src(config.patternLab.jsSrc)
    .pipe(sourcemaps.init())
    .pipe(concat(config.patternLab.jsFile))
    .pipe(wrap(config.patternLab.jsTemplate))
    .pipe(uglify(config.uglify))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.patternLab.jsDest));
  });

  /**
   * Generate Pattern Lab JS: browserify (include "required" libraries).
   */
  gulp.task('patternlab:js:post', ['patternlab:js:pre'], function () {
    return browserify(config.patternLab.jsDest + '/' + config.patternLab.jsFile, { debug: true }).bundle()
    .pipe(source(config.patternLab.jsFile))
    .pipe(gulp.dest(config.patternLab.jsDest));
  });

  /**
   * Generate Pattern Lab JS: wrapper task.
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
    return gulp.src([config.sass.dest], { read: false })
    .pipe(clean());
  });

  /**
   * Clean generated JS files.
   */
  gulp.task('clean:js', function () {
    return gulp.src([config.js.dest], { read: false })
    .pipe(clean());
  });

  /**
   * Run clean tasks.
   */
  gulp.task('clean', ['clean:css', 'clean:js']);

  /**
   * Gulp default task.
   */
  gulp.task('default', function () {
    runSequence('sass', 'js');
  });

})();
