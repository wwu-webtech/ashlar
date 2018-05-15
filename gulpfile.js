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
  const browserSync = require('browser-sync').create();
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

  config.browserSync = {
    proxyTarget: 'localhost:8080',
    proxyReqHeaders: {
      host: 'www.shila.test'
    },
    open: false
  };

  config.patternsDir = './dist/_patterns';

  config.sass = {
    srcFiles: [
      './dist/sass/*.scss'
    ],
    watchFiles: [
      './dist/sass/**/*.scss',
      path.join(config.patternsDir, '**/*.scss'),
      './node_modules/shila-css/**/*.scss'
    ],
    options: {
      includePaths: [
        './dist/sass',
        './node_modules/shila-css',
        './node_modules/breakpoint-sass/stylesheets',
        './node_modules/sass-toolkit/stylesheets',
        './node_modules/singularitygs/stylesheets'
      ],
      outputStyle: 'expanded'
    },
    destDir: './dist/css'
  };

  config.patternLab = {
    dir: './pattern-lab',
    watchFiles: [
      config.patternsDir + '/**/*.twig',
      config.patternsDir + '/**/*.json',
      config.patternsDir + '/**/*.yml'
    ],
    publicCssDir: './pattern-lab/public/css'
  };

  /**
   * Lints Sass files.
   */
  gulp.task('lint:sass', function () {
    return gulp.src(config.sass.srcFiles)
    .pipe(sassLint())
    .pipe(sassLint.format());
  });

  /**
   * Copies CSS files to Pattern Lab's public dir.
   */
  gulp.task('copy-css', function () {
    if (isDirectory(config.patternLab.dir)) {
      return gulp.src(config.sass.destDir + '/**/*.css')
      .pipe(gulp.dest(config.patternLab.publicCssDir))
      .pipe(browserSync.stream());
    }
  });

  /**
   * Generates Pattern Lab front-end.
   */
  gulp.task('pl:generate', function () {
    if (isDirectory(config.patternLab.dir)) {
      return run('php ' + config.patternLab.dir + '/core/console --generate').exec();
    }
  });

  /**
   * Calls Browsersync reload.
   */
  gulp.task('bs:reload', function () {
    browserSync.reload();
  });

  /**
   * Processes Sass files and updates Browsersync.
   */
  gulp.task('sass', function () {
    return gulp.src(config.sass.srcFiles)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.destDir))
    .pipe(browserSync.stream({match: '**/*.css'}));
  });

  /**
   * Task sequence to run when Sass files have changed.
   */
  gulp.task('sass-change', function () {
    runSequence('sass', 'copy-css');
  });

  /**
   * Task sequence to run when pattern files have changed.
   */
  gulp.task('patterns-change', function () {
    runSequence('pl:generate', 'bs:reload');
  });

  /**
   * Sets up Browsersync and watchers.
   */
  gulp.task('watch', function () {
    browserSync.init({
      proxy: {
        target: config.browserSync.proxyTarget,
        reqHeaders: config.browserSync.proxyReqHeaders
      },
      open: config.browserSync.open
    });
    gulp.watch(config.sass.watchFiles, ['sass-change']);
    gulp.watch(config.patternLab.watchFiles, ['patterns-change']);
  });

  /**
   * Gulp default task.
   */
  gulp.task('default', function () {
    runSequence('sass', 'pl:generate', 'watch');
  });

}());
