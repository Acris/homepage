var gulp = require('gulp');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

// 压缩 css 
gulp.task('minify-css', function (cb) {
    pump([
            gulp.src('./css/**/*.css'),
            cleanCSS({compatibility: 'ie9'}),
            gulp.dest('./dist/css')
        ],
        cb
    );
});
// 压缩 html
gulp.task('minify-html', function (cb) {
    pump([
            gulp.src(['./**/*.html', '!node_modules/**/*.html']),
            htmlmin({
                removeComments: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
                collapseWhitespace: true
            }),
            gulp.dest('./dist')
        ],
        cb
    );
});
// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-html', 'minify-css'
]);
