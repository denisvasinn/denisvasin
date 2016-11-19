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
  return gulp.src('./client/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client'));
});
 
gulp.task('sass:watch', () => {
    gulp.watch('./client/*.scss', ['sass']);
});

gulp.task('ts', () => {
    return gulp.src('./client/app/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./client/app'));
});

gulp.task('ts:watch', () => {
    gulp.watch('./client/app/*.ts', ['ts']);
});

gulp.task('default', ['sass', 'ts']);
gulp.task('watch', ['sass:watch', 'ts:watch']);
