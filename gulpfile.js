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

gulp.task('check-message', function () {
    if (!argv.m) {
        var err = new PluginError('test', {
            message: '\n\nPLEASE INCLUDE COMMIT MESSAGE\nExample: gulp -m "commit message"'
        });
        throw (err);
    }
});

gulp.task('git-add', function () {
    return gulp.src('./*')
    .pipe(git.add({quiet: true}));
});

gulp.task('git-commit', function () {
    return gulp.src('./*')
    .pipe(git.commit(argv.m));
});

gulp.task('git-push', function () {
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
        'check-message',
        'git-add',
        // 'git-commit',
        // 'git-push',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Build finished successfully');
            }
            callback(error);
        });
});