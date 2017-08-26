'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');

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
