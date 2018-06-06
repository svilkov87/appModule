'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin');

//livereload
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 8089,
    livereload: true
  });
});

//sass и css
gulp.task('sass', function () {
  return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
    .pipe(autoprefixer({
        browsers: ['last 15 versions']
    }))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('libs.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

//js
gulp.task('scripts', function() {
  return gulp.src('app/libs/main-min.js')
    // .pipe(concat('all.min.js'))
    // .pipe(uglify())
    // .pipe(gulp.dest('app/js'))
    .pipe(connect.reload());
});

//html
gulp.task('html', function () {
	gulp.src('app/*.html')
	.pipe(connect.reload());
});


//автом вызов галп при любом изменении css-файлов
gulp.task('watch', function () {
	gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass'])
	gulp.watch('app/libs/*.js', ['scripts'])
	gulp.watch('app/*.html', ['html']);
});

//удаление папки dist перед сборкой
gulp.task('clean', function() {
	return del.sync('dist');
});

//чистим кэш
gulp.task('clear', function (callback) {
	return cache.clearAll();
})

//задачи по-умолчанию
gulp.task('default', ['connect', 'watch','sass', 'html','scripts']);








