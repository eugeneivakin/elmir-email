const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const plumber = require('gulp-plumber');
const path = require('../config/path.js');

const html = () => {
  return gulp.src(path.html.src)
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(gulp.dest(path.root))
}


module.exports = html;