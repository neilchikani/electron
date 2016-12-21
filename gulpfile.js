var gulp = require('gulp');
var electron = require('electron-connect').server.create();
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var less = require('gulp-less');
// var nodemon = require('gulp-nodemon');
// var useref = require('gulp-useref');
// var gulpIf = require('gulp-if');
// var uglify = require('gulp-uglify');
// var cssnano = require('gulp-cssnano');
// var notify = require("gulp-notify");

gulp.task('test', function(){
  console.log("testing gulp application");
});

gulp.task('serve', function () {

  // Start browser process
  electron.start();


});


// gulp.task('sass', function(){
//   return gulp.src('app/scss/main.scss')
//     .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });
//
// gulp.task('start-server', function () {
//   nodemon({
//     script: 'app.js'
//     , ext: 'js'
//     , env: { 'NODE_ENV': 'development' }
//   })
// });
//
//
// gulp.task('less', function(){
//   return gulp.src('app/less/style.less')
//   	// .pipe(notify("Start compiling the less files"))
//     .pipe(less()) // Using gulp-sass
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });
//
// gulp.task('useref', function(){
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'))
// });
//
// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'app'
//     },
//   })
// });

gulp.task('default', ['browserSync','sass','less'], function (){
	gulp.watch('app/less/**/*.less', ['less']); 
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
