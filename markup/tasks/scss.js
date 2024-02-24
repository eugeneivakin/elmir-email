const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const path = require('../config/path.js');

const scss = () => {
  return gulp.src(path.scss.src)
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.scss.dest))
}


module.exports = scss;