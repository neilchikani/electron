var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var sass = require('gulp-sass');
// var useref = require('gulp-useref');
// var gulpIf = require('gulp-if');
// var uglify = require('gulp-uglify');
// var notify = require("gulp-notify");


gulp.task('electron-app', function () {
  electron.start();
});


gulp.task('sass', function(){
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

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


// gulp.task('default', ['sass','less'], function (){
// 	gulp.watch('app/less/**/*.less', ['less']);
//   gulp.watch('app/scss/**/*.scss', ['sass']);
//   gulp.watch('app/*.html', browserSync.reload);
//   gulp.watch('app/js/**/*.js', browserSync.reload);
// });

gulp.task('default', ['electron-app','sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass',electron.reload]);
  gulp.watch('main.js', electron.restart);
  gulp.watch('app/index.html', electron.reload);
});
