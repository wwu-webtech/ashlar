(function () {
  "use strict";

  const path = require("path");
  const pump = require("pump");
  const sequence = require("run-sequence");
  const browserify = require("browserify");
  const source = require("vinyl-source-stream");
  const del = require("del");
  const gulp = require("gulp");
  const flatten = require("gulp-flatten");
  const flatmap = require("gulp-flatmap");
  const wrap = require("gulp-wrap");
  const iife = require("gulp-iife");
  const concat = require("gulp-concat");
  const rename = require("gulp-rename");
  const terser = require("gulp-terser");
  const sourcemaps = require("gulp-sourcemaps");
  const sass = require('gulp-sass')(require('sass'));
  const sassGlob = require("gulp-sass-glob");
  const group = require("gulp-group-css-media-queries");
  const cleancss = require("gulp-clean-css");
  const minify = require("gulp-minify");
  const jshint = require('gulp-jshint');
  const plumber = require('gulp-plumber');
  const replace = require('gulp-replace');

  /**
   * Process the name of the input JS file to be used as the object key for a
   * Drupal JS Behavior.
   */
  function drupalBehaviorName(file) {
    return path.basename(file.path, ".js").split(".").pop().replace(/-/g, "_");
  }

  var config = {};

  /**
   * Sass configuration.
   *
   * src: The source patterns for Sass files.
   * dest: The output directory for compiled CSS.
   * watch: The watch pattern for Sass file changes.
   * options: Options map to pass to the Sass compiler.
   */
  config.sass = {
    src: ["source/sass/**/*.scss", "!source/sass/styleguide/*"],
    dest: "build/css",
    cdndest: "cdn/css",
    watch: ["source/sass/**/*.scss"],
    options: {
      includePaths: [
        "node_modules/sass-toolkit/stylesheets",
        "node_modules/singularitygs/stylesheets",
      ],
      outputStyle: "expanded",
    },
    cleancss: {
      format: "beautify",
      inline: ["all"],
      level: {
        1: { all: true },
        2: { all: true },
      },
      sourceMap: true,
    },
  };
  config.sassComponents = {
    src: [
      "source/_docs/patterns/00-utilities/**/*.scss",
      "source/_docs/patterns/01-atoms/**/*.scss",
      "source/_docs/patterns/02-molecules/**/*.scss",
      "source/_docs/patterns/03-organisms/**/*.scss",
      "source/_docs/patterns/04-templates/**/*.scss",
      "source/_docs/patterns/05-sites/**/*.scss",
    ],
    dest: "build/css/components",
    cdndest: "cdn/css/components",
    watch: [
      "source/_docs/patterns/00-utilities/**/*.scss",
      "source/_docs/patterns/01-atoms/**/*.scss",
      "source/_docs/patterns/02-molecules/**/*.scss",
      "source/_docs/patterns/03-organisms/**/*.scss",
      "source/_docs/patterns/04-templates/**/*.scss",
      "source/_docs/patterns/05-sites/**/*.scss",
    ],
    options: {
      includePaths: [
        "node_modules/sass-toolkit/stylesheets",
        "node_modules/singularitygs/stylesheets",
      ],
      outputStyle: "expanded",
    },
    cleancss: {
      format: "beautify",
      inline: ["all"],
      level: {
        1: { all: true },
        2: { all: true },
      },
      sourceMap: true,
    },
  };

  /**
   * JS configuration.
   *
   * src: The source patterns for JS files.
   * dest: The output directory for compiled JS files.
   * watch: The watch pattern for JS file changes.
   * template: The template file for Drupal JS behaviors.
   * templateVariable: The variable used in the template file to store all
   *   properties.
   * rename: Options map to pass to the rename plugin.
   * iife: Options map to pass to the iife plugin.
   * terser: Options map to pass to the terser plugin.
   */
  config.js = {
    src: ["source/_docs/patterns/**/!(*.cy)*.js"],
    dest: "build/js",
    cdndest: "cdn/js",
    watch: ["source/_docs/patterns/**/*.js"],
    template: {
      src: "source/js/behavior.lodash",
    },
    templateVariable: "behavior",
    rename: {
      suffix: ".min",
    },
    iife: {
      useStrict: true,
      trimCode: true,
      params: ["window", "document", "undefined"],
      args: ["this", "this.document"],
    },
    terser: {
      compress: true,
      mangle: false,
      output: {
        beautify: true,
        braces: true,
        comments: true,
        indent_level: 2,
      },
    },
  };
  config.jquery = {
    src: ["source/js/**/*.js"],
    watch: ["source/js/**/*.js"],
    iife: {
      useStrict: true,
      trimCode: true,
      params: ["$", "window", "document", "undefined"],
      args: ["jQuery", "this", "this.document"],
    },
  };

  /**
   * Images configuration.
   *
   * src: Source pattern for image files.
   * dest: Output pattern for image files.
   */
  config.images = {
    src: ["source/images/**/*.{jpg,jpeg,gif,png,svg,webp}"],
    dest: "build/images",
    cdndest: "cdn/images",
  };

  /**
   * Generate CSS.
   */
  gulp.task("sass", function (callback) {
    pump(
      gulp.src(config.sass.src),
      // Parse globbing patterns in @include statements.
      sassGlob(),
      // Initialize source maps.
      sourcemaps.init(),
      // Compile Sass.
      sass(config.sass.options),
      // Group media queries.
      group(),
      // Optimize css.
      cleancss(config.sass.cleancss),
      // Output source maps.
      sourcemaps.write(),
      // Flatten filepath globs.
      flatten(),
      gulp.dest(config.sass.dest),
      gulp.dest(config.sass.cdndest),
      callback
    );
  });
  gulp.task("sassComponents", function (callback) {
    pump(
      gulp.src(config.sassComponents.src),
      // Parse globbing patterns in @include statements.
      sassGlob(),
      // Initialize source maps.
      sourcemaps.init(),
      // Compile Sass.
      sass(config.sassComponents.options),
      // Group media queries.
      group(),
      // Optimize css.
      cleancss(config.sassComponents.cleancss),
      // Output source maps.
      sourcemaps.write(),
      // Flatten filepath globs.
      flatten(),
      gulp.dest(config.sassComponents.dest),
      gulp.dest(config.sassComponents.cdndest),
      callback
    );
  });

  /**
   * Generate unoptimized CSS.
   */
  gulp.task("sass:dev", function (callback) {
    pump(
      gulp.src(config.sass.src),
      sassGlob(),
      sourcemaps.init(),
      sass(config.sass.options),
      sourcemaps.write(),
      flatten(),
      gulp.dest(config.sass.dest),
      gulp.dest(config.sass.cdndest),
      callback
    );
  });

  /**
   * Generate JS
   */
  gulp.task("js", function (callback) {
    pump(
      gulp.src(config.js.src),
      // Process each file in the source stream.
      flatmap(function (stream, file) {
        return pump(
          stream,
          // Wrap the JS in Drupal JS Behavior boilerplate.
          wrap(
            config.js.template,
            { name: drupalBehaviorName(file) },
            { variable: config.js.templateVariable }
          ),
          // Remove HTML comments
          replace(/<!--.*-->/g, ''),
          // Wrap the JS in an immediately-invoked function expression.
          iife(config.js.iife),
          // Format the source.
          terser(config.js.terser)          
        );
      }),
      // Flatten file path globs.
      flatten(),
      gulp.dest(config.js.dest),
      callback
    );
  });

  /**
   * Generate jQuery
   */
  gulp.task("jquery", function (callback) {
    pump(
      gulp.src(config.jquery.src),
      // Process each file in the source stream.
      flatmap(function (stream, file) {
        return pump(
          stream,
          // Wrap the JS in Drupal JS Behavior boilerplate.
          wrap(
            config.js.template,
            { name: drupalBehaviorName(file) },
            { variable: config.js.templateVariable }
          ),
          // Remove HTML comments
          replace(/<!--.*-->/g, ''),
          // Wrap the JS in an immediately-invoked function expression.
          iife(config.jquery.iife),
          // Format the source.
          terser(config.js.terser)          
        );
      }),
      // Flatten file path globs.
      flatten(),
      gulp.dest(config.js.dest),
      callback
    );
  });

  /**
   * Check JS for errors
   */
  gulp.task('lint', function() {
    return gulp.src(config.js.src)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  /**
   * Check jQuery for errors
   */
  gulp.task('lint', function() {
    return gulp.src(config.jquery.src)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  /**
   * Generate JS for non-drupal applications
   */
   gulp.task("js-no-wrap", function (callback) {
    pump(
      gulp.src(config.js.src),
      // Process each file in the source stream.
      flatmap(function (stream, file) {
        return pump(
          stream,
          // Expose external stylesheets
          replace('<!--link', '<link'),
          replace('/-->', '/>'),
          
          // Wrap the JS in an immediately-invoked function expression.
          iife(config.js.iife),
          // Format the source.
          terser(config.js.terser)
        );
      }),
      // Flatten file path globs.
      flatten(),
      gulp.dest(config.js.cdndest),
      callback
    );
  });

  /**
   * Generate query for non-drupal applications
   */
   gulp.task("jq-no-wrap", function (callback) {
    pump(
      gulp.src(config.jquery.src),
      // Process each file in the source stream.
      flatmap(function (stream, file) {
        return pump(
          stream,          
          // Wrap the JS in an immediately-invoked function expression.
          iife(config.js.iife),
          // Format the source.
          terser(config.js.terser)
        );
      }),
      // Flatten file path globs.
      flatten(),
      gulp.dest(config.js.cdndest),
      callback
    );
  });

  /**
   * Minify images.
   */
  gulp.task("images", function (callback) {
    pump(gulp.src(config.images.src), gulp.dest(config.images.dest), gulp.dest(config.images.cdndest), callback);
  });

  /**
   * Set watch tasks.
   */
  gulp.task("watch", function () {
    gulp.watch(config.sass.watch, gulp.series(["sass:dev"]));
    gulp.watch(config.js.watch, gulp.series(["js"]));
  });

  /**
   * Clean generated CSS files.
   */
  gulp.task("clean:css", function () {
    return del([config.sass.dest]);
  });

  /**
   * Clean generated JS files.
   */
  gulp.task("clean:js", function () {
    return del([config.js.dest]);
  });

  /**
   * Clean generated image files.
   */
  gulp.task("clean:images", function () {
    return del([config.images.dest]);
  });

  /**
   * Run clean tasks.
   */
  gulp.task(
    "clean",
    gulp.parallel(["clean:css", "clean:js", "clean:images"])
  );

  /**
   * Gulp default task.
   */
  gulp.task(
    "default",
    gulp.parallel(["sass", "sassComponents", "js", "jquery", "js-no-wrap", "jq-no-wrap", "images"])
  );

})();
