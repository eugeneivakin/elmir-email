// const notify = require('gulp-notify');
const gulp = require('gulp');
// const fileInclude = require('gulp-file-include');
// const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const path = require('./config/path.js');
const html = require('./tasks/html.js');
const scss = require('./tasks/scss.js');
const clear = require('./tasks/clear.js');
const images = require('./tasks/images.js');

const watcher = () => {
  gulp.watch(path.html.watch, html).on('all', browserSync.reload);
  gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
  gulp.watch(path.images.watch, images).on('all', browserSync.reload);
}

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

exports.html = html;
exports.scss = scss;
exports.images = images;
exports.watch = watcher;

exports.dev = gulp.series(
  clear,
  images,
  html,
  scss,
  gulp.parallel(watcher, server)
);