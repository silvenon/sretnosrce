import gulp from 'gulp';
import {exec} from 'child_process';
import express from 'express';
import serveStatic from 'serve-static';
import webdriver from 'gulp-webdriver';

let server;

gulp.task('build', (done) => {
  exec('bundle exec jekyll build', done);
});

gulp.task('serve', ['build'], (done) => {
  server = express()
    .use(serveStatic('_site'))
    .listen(9000, done);
});

gulp.task('webdriver', ['serve'], () => {
  return gulp.src('test/specs/**/*.js', {read: false})
    .pipe(webdriver({
      desiredCapabilities: {
        browserName: 'phantomjs'
      },
      slow: 200
    }));
});

gulp.task('test', ['webdriver'], () => {
  server.close();
});
