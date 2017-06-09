var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require("fs"); 

// Basic usage 
gulp.task('index', function() {
    // Single entry point to browserify 
    browserify("./index.js")
  .transform("babelify")
  .bundle()
  .pipe(fs.createWriteStream("./build/js/index.js"));
});


gulp.task('test', function() {
    // Single entry point to browserify 
    browserify("./test.js",{
      sourcemap:false
    })
  .transform("babelify")
  .bundle()
  .pipe(fs.createWriteStream("./build/js/test.js"));
});

gulp.task('default',['index']);


gulp.task('watch',function () {
  gulp.watch('test.js',['test']);
})
