var gulp = require('gulp');
var nodemon = require('nodemon');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

gulp.task('sass', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('typescript', function () {
    gulp.src('./Controllers/*.ts')
		.pipe(ts({
			declaration: true,
			noExternalResolve: true
		}))
        .pipe(gulp.dest('./Controllers'));
});

gulp.task('default', function () {

  // watch for any changes in sass files 
  gulp.watch('./public/sass/**/*.scss', ['sass']);
  gulp.watch('./Controllers/*.ts', ['typescript']);  
  
  // watch for any changes in js or html files 
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});