'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');

//gulp.task('clean', () => {
//    return gulp.src('./client/**/*.js')
//    .pipe(clean());
//});

gulp.task('sass', () => {
  return gulp.src('./client/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client'));
});
 
gulp.task('sass:watch', () => {
  gulp.watch('./client/**/*.scss', ['sass']);
});

gulp.task('ts', () => {
    return gulp.src('./client/app/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./client/app'));
});

gulp.task('build', ['sass', 'ts'], () => {
    gulp.watch('./client/app/**/*.scss', ['sass']);

    var watcher = gulp.watch('./client/app/*.js', ['ts']);
    watcher.on('change', (event) => {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
