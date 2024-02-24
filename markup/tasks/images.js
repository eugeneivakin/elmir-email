const gulp = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const path = require('../config/path.js');

const images = () => {
  return gulp.src(path.images.src)
    .pipe(plumber())
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(gulp.dest(path.images.dest))
}


module.exports = images;