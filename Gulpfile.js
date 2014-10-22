var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename');

gulp.task('less', function() {
	return gulp.src('less/caffeine.less')
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(gulp.dest(''))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest(''))
		.pipe(notify({
			message: 'Styles task complete'
		}));
});