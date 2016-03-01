var gulp = require('gulp');
var webserver = require('gulp-webserver');
var babel = require("gulp-babel");
var clean = require('gulp-clean');

var config = {
  devServer: {
    port: 8000,
    livereload: true,
    directoryListing: true
  }
};

gulp.task('clean-js', function () {
  return gulp.src('public/*.js')
    .pipe(clean());
});

gulp.task('watch-js', ['clean-js'] , function () {
  return gulp.watch('src/*.js', ['babelify']);
});

gulp.task('babelify', function () {
  return gulp.src(['src/components.js', 'src/lifecycle.js'])
    .pipe(babel())
    .pipe(gulp.dest("public"));
});

gulp.task('serve', ['watch-js'], function () {
  gulp.src('src/public')
    .pipe(webserver(config.devServer));
});

gulp.task('default', ['serve'], function () {
  console.log('default task');
});
