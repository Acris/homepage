var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')

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

function htmlMinify(cb) {
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

exports.clean = clean
exports.cssMinify = cssMinify
exports.htmlMinify = htmlMinify

var build = gulp.series(clean, gulp.parallel(cssMinify, htmlMinify))

gulp.task('default', build)