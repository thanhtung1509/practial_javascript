var gulp = require('gulp');
/* link : https://github.com/ivogabe/gulp-typescript */
var ts = require('gulp-typescript');
var merge = require('merge2');
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-minify-css');
var connect = require('gulp-connect');
var del = require('del');

//If you want to add or overwrite certain settings in the tsconfig.json file, you can add desire properties to the second parameters.
var tsProject = ts.createProject('tsconfig.json', { noImplicitAny: true });

gulp.task('typescripts', function() {
    var tsResult = gulp.src('src/ts/**/*.ts')
        .pipe(tsProject());

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done.
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('connectDev', function () {
  connect.server({
    name: 'Dev App',
    root: ['src'],
    port: 8000,
    livereload: true
  });
});

gulp.task('connectDist', function () {
  connect.server({
    name: 'Dist App',
    root: 'dist',
    port: 8001,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('scss', function () {
	return sass('./src/scss/**/*.scss', { style: 'expanded' })
		.pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

//Watch on src folder. If it has any changes, gulp will update to dist directory and run immediately.
gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/scss/**/*.scss'], ['scss']);
  gulp.watch(['./src/ts/**/*.ts'], ['typescripts'])
});

//Clean dist directory
gulp.task('clean', function() {
	return del(['./dist/*']);
});

//Build app before lauching it.
gulp.task('build', ['scss', 'typescripts'], function() {
    gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
})

gulp.task('default', [/*'connectDist',*/ 'connectDist', 'watch']);