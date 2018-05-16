(function () {

  'use strict';

  const fs = require('fs');
  const gulp = require('gulp');
  const run = require('gulp-run');
  const sass = require('gulp-sass');
  const sassGlob = require('gulp-sass-glob');
  const sassLint = require('gulp-sass-lint');
  const sourcemaps = require('gulp-sourcemaps');
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
   * Run clean tasks.
   */
  gulp.task('clean', ['clean:css']);

  /**
   * Gulp default task.
   */
  gulp.task('default', function () {
    runSequence('sass');
  });

}());
