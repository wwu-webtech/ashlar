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
  const buffer = require('vinyl-buffer');
  const browserify = require('browserify');
  const runSequence = require('run-sequence');

  var config = {};

  config.patterns = {
    dir: './source/_patterns'
  };

  config.patternLab = {
    cssDest: './source/pattern-lab/css',
    jsDest: './source/pattern-lab/js'
  };

  config.sass = {
    src: [
      './source/sass/*.scss'
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
      src: 'source/js/behavior.lodash'
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
   * Processes Sass files.
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
   * Uglify JavaScript.
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
   * Copies CSS files to Pattern Lab's public dir.
   */
  gulp.task('patternlab:sass', function () {
    return gulp.src(config.sass.src)
    .pipe(concat('wwu-styleguide.css'))
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.patternLab.cssDest));
  });

  /**
   * Generate Pattern Lab JavaScript.
   */
  gulp.task('patternlab:js', function () {
    gulp.src(config.js.src)
    .pipe(concat('wwu-styleguide.js'))
    .pipe(wrap('$(function () {\n<%= contents %>\n});'))
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest(config.patternLab.jsDest));
  });

  /**
   * Run Pattern Lab tasks.
   */
  gulp.task('patternlab', ['patternlab:css', 'patternlab:js']);

  /**
   * Sets watch tasks.
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
   * Clean uglified JS files.
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
