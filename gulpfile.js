var del = require('del');
var gulp = require('gulp');
var loadPlugins = require('gulp-load-plugins');
var isparta = require('isparta');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");

// Load all of our Gulp plugins
var $ = loadPlugins();

function _registerBabel() {
  require('babel-core/register');
}

// Clean up
gulp.task('clean', function(){
  del.sync(['./dist','./dist.zip']);
});

// Lint
gulp.task('lint', function() {
  return gulp.src('./src/main.js')
    .pipe($.plumber())
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});



// Build
gulp.task('build', ['clean'], function () {
    del.sync('./docs');

    webpack(webpackConfig, function(err, stats) {
        if(err) throw new Error("webpack", err);

        console.log('webpack build done...');

        gulp.src('./src/main.js')
            .pipe($.babel()) //this will also handle react transformations
            .pipe(gulp.dest('./dist'));

        gulp.src('./src/examples/dist/src/examples/dist/bundle.js')
            .pipe(gulp.dest('./docs/dist'));

        gulp.src('./dist/main.js')
            .pipe(gulp.dest('./docs'));

        gulp.src('./src/examples/index.html')
            .pipe(gulp.dest('./docs/'));

        gulp.src('./src/css/main.css')
            .pipe(gulp.dest('./dist/css'));
    });

});

// Build the example into 'docs' so we can ghpages it
gulp.task('build-example', ['build'], function () {
  del.sync('./docs');

  webpack(webpackConfig, function(err, stats) {
    if(err) throw new Error("webpack", err);

    console.log('webpack build done...');

    gulp.src('./src/examples/dist/src/examples/dist/bundle.js')
      .pipe(gulp.dest('./docs/dist'));

    gulp.src('./dist/main.js')
      .pipe(gulp.dest('./docs'));

    gulp.src('./src/examples/index.html')
      .pipe(gulp.dest('./docs/'));

      gulp.src('./src/css/main.css')
          .pipe(gulp.dest('./dist/css'));
  });
});
