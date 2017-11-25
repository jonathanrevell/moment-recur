var gulp = require('gulp');

var karma = require('karma').server;
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  return karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test continually
 */
gulp.task('test:dev', function (done) {
  return karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done);
});

gulp.task('compress', function(done) {
  return gulp.src('moment-recur.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
});

gulp.task('default', function() {
  return runSequence('test','compress')
});
