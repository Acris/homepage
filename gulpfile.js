const gulp = require('gulp')
const del = require('del')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin')

function clean() {
    return del(['./dist'])
}

function cssMinify() {
    return gulp.src('./css/**/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie9'
        }))
        .pipe(gulp.dest('./dist/css'))
}

function htmlMinify() {
    return gulp.src(['./**/*.html', '!node_modules/**/*.html'])
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'))
}

exports.default = gulp.series(clean, gulp.parallel(cssMinify, htmlMinify))
