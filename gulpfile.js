var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

// Minify JS
gulp.task('minify-js', function() {
  gulp.src(['./app.js', './pages/**/*.js', './components/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch(
    ['./pages/**/*.js', './components/**/*.js', './app.js'],
    ['minify-js']
  )
});