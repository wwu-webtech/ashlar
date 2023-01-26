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

  /**
   * Process the name of the input JS file to be used as the object key for a
   * Drupal JS Behavior.
   */
  function drupalBehaviorName(file) {
    return path.basename(file.path, ".js").split(".").pop().replace(/-/g, "_");
  }

  var config = {};

  /**
   * Pattern Lab configuration.
   *
   * patterns: The patterns source directory.
   * sassFile: The file name to be used for compiled CSS.
   * sassSrc: The source patterns for Sass to be compiled for Pattern Lab.
   * SassDest: The outpt directory for compiled CSS.
   * jsFile: The file name to be used for compiled JS.
   * jsSrc: The source patterns for JS to be compiled for Pattern Lab.
   * jsDest: The output directory for compiled JS.
   * jsTemplate: The template used to wrap all compiled JS.
   * imagesSrc: The source patterns for image files.
   * imagesDest: The destination directory for image files.
   */
  config.patternLab = {
    patterns: "source/_docs/patterns",
    sassFile: "wwu-styleguide.css",
    sassSrc: [
      "source/sass/styleguide/normalize.scss",
      "source/sass/styleguide/pattern-scaffolding.scss",
      "source/sass/styleguide/ultimenu-extras.scss",
      "source/sass/styleguide/ultimenu.scss",
      "source/sass/**/*.scss",
    ],
    sassDest: "source/pattern-lab/css",
    jsFile: "wwu-styleguide.js",
    jsSrc: [
      "source/_docs/patterns/**/*.js",
      "dist/js/*.js",
      "!dist/js/acalog.js",
      "source/js/menu-extras.js",
    ],
    jsDest: "source/pattern-lab/js",
    jsTemplate: {
      src: "source/js/patternlab.lodash",
    },
    imagesSrc: ["source/images/**/*.{jpg,jpeg,gif,png,svg}"],
    imagesDest: "source/pattern-lab/images",
    fontSrc: ["source/fonts/*.woff2"],
    fontDest: "source/pattern-lab/fonts",
  };

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
    watch: ["source/sass/**/*.scss", config.patternLab.patterns + "/**/*.scss"],
    options: {
      includePaths: [
        "node_modules/breakpoint-sass/stylesheets",
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
    ],
    dest: "build/css/components",
    watch: [
      "source/_docs/patterns/00-utilities/**/*.scss",
      "source/_docs/patterns/01-atoms/**/*.scss",
      "source/_docs/patterns/02-molecules/**/*.scss",
      "source/_docs/patterns/03-organisms/**/*.scss",
      "source/_docs/patterns/04-templates/**/*.scss",
      config.patternLab.patterns + "/**/*.scss",
    ],
    options: {
      includePaths: [
        "node_modules/breakpoint-sass/stylesheets",
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
    src: ["source/js/**/*.js", "source/_docs/patterns/**/*.js"],
    dest: "build/js",
    watch: ["source/js/**/*.js", "source/_docs/patterns/**/*.js"],
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
      params: ["$", "window", "document", "undefined"],
      args: ["jQuery", "this", "this.document"],
    },
    iifeNoJquery: {
      useStrict: true,
      trimCode: true,
      params: ["$", "window", "document", "undefined"],
      args: ["this", "this.document"],
    },
    terser: {
      compress: false,
      mangle: false,
      output: {
        beautify: true,
        braces: true,
        comments: true,
        indent_level: 2,
      },
    },
  };

  /**
   * Images configuration.
   *
   * src: Source pattern for image files.
   * dest: Output pattern for image files.
   */
  config.images = {
    src: ["source/images/**/*.{jpg,jpeg,gif,png,svg}"],
    dest: "build/images",
  };

  /**
   * Fonts configuration.
   *
   * src: Source pattern for font files.
   * dest: Output pattern for font files.
   */
  config.fonts = {
    src: ["source/fonts/*.woff2"],
    dest: "build/fonts",
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
      callback
    );
  });

  /**
   * Generate JS.
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
   * Check js for errors
   */
  gulp.task('lint', function() {
    return gulp.src(config.js.src)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  /**
   * Generate wordpress friendly JS
   */
   gulp.task("minify", function (callback) {
    pump(
      gulp.src(config.js.src),
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
      gulp.dest(config.js.dest),
      callback
    );
  });

  /**
   * Minify images.
   */
  gulp.task("images", function (callback) {
    pump(gulp.src(config.images.src), gulp.dest(config.images.dest), callback);
  });

  /**
   * Put fonts in the right spot.
   */
  gulp.task("fonts", function (callback) {
    pump(gulp.src(config.fonts.src), gulp.dest(config.fonts.dest), callback);
  });

  /**
   * Generate Pattern Lab CSS.
   */
  gulp.task("patternlab:sass", function (callback) {
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
  gulp.task("patternlab:js:pre", function (callback) {
    pump(
      gulp.src(config.patternLab.jsSrc),
      sourcemaps.init(),
      concat(config.patternLab.jsFile),
      wrap(config.patternLab.jsTemplate),
      terser(config.js.terser),
      sourcemaps.write(),
      gulp.dest(config.patternLab.jsDest),
      callback
    );
  });

  /**
   * Generate Pattern Lab JS post.
   */
  gulp.task(
    "patternlab:js:post",
    gulp.series(["patternlab:js:pre"], function (callback) {
      pump(
        browserify(config.patternLab.jsDest + "/" + config.patternLab.jsFile, {
          debug: true,
        }).bundle(),
        source(config.patternLab.jsFile),
        gulp.dest(config.patternLab.jsDest),
        callback
      );
    })
  );

  /**
   * Generate Pattern Lab JS.
   */
  gulp.task("patternlab:js", gulp.series(["patternlab:js:post"]));

  /**
   * Generate Pattern Lab images.
   */
  gulp.task("patternlab:images", function (callback) {
    pump(
      gulp.src(config.patternLab.imagesSrc),
      gulp.dest(config.patternLab.imagesDest),
      callback
    );
  });

  /**
   * Generate Pattern Lab Fonts.
   */
  gulp.task("patternlab:fonts", function (callback) {
    pump(
      gulp.src(config.patternLab.fontSrc),
      gulp.dest(config.patternLab.fontDest),
      callback
    );
  });

  /**
   * Run Pattern Lab tasks.
   */
  gulp.task(
    "patternlab",
    gulp.parallel([
      "patternlab:sass",
      "patternlab:js",
      "patternlab:images",
      "patternlab:fonts",
    ])
  );

  /**
   * Run js build without drupal behaviors via js-wp-cdn
   */
   gulp.task(
    "wp-cdn",
    gulp.parallel([
      "sass",
      "sassComponents",
      "minify",
      "images",
      "fonts",
    ])
  );
   
  /**
   * Set watch tasks.
   */
  gulp.task("watch", function () {
    gulp.watch(config.sass.watch, gulp.series(["sass:dev", "patternlab:sass"]));
    gulp.watch(config.js.watch, gulp.series(["js", "patternlab:js"]));
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
   * Clean generated Pattern Lab files.
   */
  gulp.task("clean:patternlab", function () {
    return del([
      config.patternLab.sassDest,
      config.patternLab.jsDest,
      config.patternLab.imagesDest,
    ]);
  });

  /**
   * Run clean tasks.
   */
  gulp.task(
    "clean",
    gulp.parallel(["clean:css", "clean:js", "clean:images", "clean:patternlab"])
  );

  /**
   * Gulp default task.
   */
  gulp.task(
    "default",
    gulp.parallel(["sass", "sassComponents", "js", "images", "fonts"])
  );
})();
