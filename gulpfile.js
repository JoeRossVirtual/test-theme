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
        .pipe(concatCss("styles.css"))
        .pipe(gulp.dest('build'))
});

gulp.task('commit-changes', function () {
    if (!argv.m) {
        var err = new PluginError('test', {
            message: '\n\nPLEASE INCLUDE COMMIT MESSAGE\nExample: gulp -m "commit message"'
        });
        throw (err);
    }
    return gulp.src('./*')
        .pipe(git.add())
        .pipe(git.commit(argv.m));
});

gulp.task('push-changes', function () {
    git.push('origin', 'master', function (err) {
        if (err){
            console.log('err')
            console.log(err)
            throw err;
        }
    });
});

gulp.task('default', function (callback) {
    runSequence(
        'concat-css',
        'clear-build',
        'commit-changes',
        // 'push-changes',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Build finished successfully');
            }
            callback(error);
        });
});