var gulp = require('gulp');
var nodemon = require('nodemon');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function () {

  // watch for any changes in sass files 
  gulp.watch('./public/sass/**/*.scss', ['sass']);

  // watch for any changes in js or html files 
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
})