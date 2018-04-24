var gulp = require('gulp');
var runSequence = require('run-sequence');
// var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var del = require('del');

gulp.task('clear-build', function() {
    return del([
        './build/**/*',
      ]);
});

gulp.task('concat-css', function () {
    gulp.src('./src/css/**/*.css')
        .pipe(concatCss("styles.css"))
        .pipe(gulp.dest('build'))
});


gulp.task('default', function (callback) {
    runSequence(
        'concat-css',
        'clear-build',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Build finished successfully');
            }
            callback(error);
        });
});