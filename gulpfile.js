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

  config.patternsDir = './dist/_patterns';

  config.sass = {
    srcFiles: [
      './dist/sass/*.scss'
    ],
    watchFiles: [
      './dist/sass/**/*.scss',
      config.patternsDir + '/**/*.scss',
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
   * Processes Sass files.
   */
  gulp.task('sass', function () {
    return gulp.src(config.sass.srcFiles)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.destDir));
  });

  /**
   * Lints Sass files.
   */
  gulp.task('sass:lint', function () {
    return gulp.src(config.sass.srcFiles)
    .pipe(sassLint())
    .pipe(sassLint.format());
  });

  /**
   * Copies CSS files to Pattern Lab's public dir.
   */
  gulp.task('pl:css', function () {
    if (isDirectory(config.patternLab.dir)) {
      return gulp.src(config.sass.destDir + '/**/*.css')
      .pipe(gulp.dest(config.patternLab.publicCssDir));
    }
    else {
      return false;
    }
  });

  /**
   * Generates Pattern Lab front-end.
   */
  gulp.task('pl:generate', function () {
    if (isDirectory(config.patternLab.dir)) {
      return run('php ' + config.patternLab.dir + '/core/console --generate').exec();
    }
    else {
      return false;
    }
  });

  /**
   * Sets watch tasks.
   */
  gulp.task('watch', function () {
    gulp.watch(config.sass.watchFiles, function () {
      runSequence('sass', 'pl:css');
    });
    gulp.watch(config.patternLab.watchFiles, ['pl:generate']);
  });

  /**
   * Clean generated CSS files.
   */
  gulp.task('clean:css', function () {
    return gulp.src([config.sass.destDir, config.patternLab.publicCssDir], {read: false})
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
    runSequence('sass', 'pl:generate', 'watch');
  });

}());
