var gulp = require('gulp');
var runSequence = require('run-sequence');
var concatCss = require('gulp-concat-css');
var del = require('del');
var argv = require('yargs').argv;
var PluginError = require('plugin-error');
var git = require('gulp-git');


gulp.task('clear-build', function () {
    return del([
        './build/**/*',
    ]);
});

gulp.task('concat-css', function () {
    gulp.src('./src/css/**/*.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest('build'))
});


gulp.task('default', function (callback) {
    runSequence(
        'clear-build',
        'concat-css',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Build finished successfully');
            }
            callback(error);
        });
});