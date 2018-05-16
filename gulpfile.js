(function () {

  'use strict';

  const fs = require('fs');
  const path = require('path');
  const gulp = require('gulp');
  const run = require('gulp-run');
  const sass = require('gulp-sass');
  const sassGlob = require('gulp-sass-glob');
  const sassLint = require('gulp-sass-lint');
  const sourcemaps = require('gulp-sourcemaps');
  const uglify = require('gulp-uglify');
  const rename = require('gulp-rename');
  const wrap = require('gulp-wrap');
  const tap = require('gulp-tap');
  const clean = require('gulp-clean');
  const runSequence = require('run-sequence');

  function isDirectory(dir) {
    try {
      return fs.statSync(dir).isDirectory();
    }
    catch (e) {
      return false;
    }
  }

  var config = {};

  config.patterns = {
    dir: './source/_patterns'
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

  config.patternLab = {
    dir: './pattern-lab',
    watch: [
      config.patterns.dir + '/**/*.twig',
      config.patterns.dir + '/**/*.json',
      config.patterns.dir + '/**/*.yml'
    ],
    publicCssDir: './pattern-lab/public/css'
  };

  config.js = {
    src: [
      './source/js/*.js'
    ],
    dest: './build/js',
    watch: [
      './source/js/**/*.js'
    ],
    options: {}
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
   * Lints Sass files.
   */
  gulp.task('sass:lint', function () {
    return gulp.src(config.sass.src)
    .pipe(sassLint())
    .pipe(sassLint.format());
  });

  /**
   * Copies CSS files to Pattern Lab's public dir.
   */
  gulp.task('patternlab:css', function () {
    if (isDirectory(config.patternLab.dir)) {
      return gulp.src(config.sass.dest + '/**/*.css')
      .pipe(gulp.dest(config.patternLab.publicCssDir));
    }
    else {
      return false;
    }
  });

  /**
   * Uglify JavaScript.
   */
  gulp.task('js', function () {
    return gulp.src(config.js.src)
    .pipe(tap(function (file) {
      var behaviorName = path.basename(file.path, '.js').split('.').pop();
      var templateVariable = 'behavior';

      return gulp.src(file.path)
      .pipe(wrap({ src: 'source/js/behavior.lodash' }, { name: behaviorName }, { variable: templateVariable }))
      .pipe(uglify(config.uglify))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(config.js.dest));
    }));
  });

  /**
   * Sets watch tasks.
   */
  gulp.task('watch', function () {
    gulp.watch(config.sass.watch, function () {
      runSequence('sass', 'patternlab:css');
    });
  });

  /**
   * Clean generated CSS files.
   */
  gulp.task('clean:css', function () {
    return gulp.src([config.sass.dest, config.patternLab.publicCssDir], {read: false})
    .pipe(clean());
  });

  /**
   * Clean uglified JS files.
   */
  gulp.task('clean:js', function () {
    return gulp.src([config.uglify.dest], {read: false})
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
    runSequence('sass');
  });

})();
