var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack', function() {
    return gulp.src('dist/js/src/index.js')
    .pipe(webpack({
        output: {
            filename: 'build.js',
        }
    }))
    .pipe(gulp.dest('.'));
});
