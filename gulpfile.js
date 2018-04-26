var gulp = require('gulp');
var runSequence = require('run-sequence');
var concatCss = require('gulp-concat-css');
var del = require('del');
var git = require('gulp-git');
var cleanCSS = require('gulp-clean-css');

// Empties the build folder
gulp.task('clear-build', function () {
    return del([
        './build/**/*',
    ]);
});

gulp.task('build-css', function () {
    gulp.src('./src/css/**/*.css')
        // Concatinates CSS files
        .pipe(concatCss("style.css"))
        // Minifies CSS
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'))
});

// Runs tasks
gulp.task('default', function (callback) {
    runSequence(
        'clear-build',
        'build-css',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Build finished successfully');
            }
            callback(error);
        });
});