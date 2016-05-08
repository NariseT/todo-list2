var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');
gulp.task('scripts', function() {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        tsResult.js
            .pipe(sourcemaps.write('../sourcemaps'))
            .pipe(gulp.dest('dist/js')),
        tsResult.dts
            .pipe(gulp.dest('dist/dts'))
    ]);
});
