var gulp = require('gulp')
var rename = require('gulp-rename')
var pug = require('gulp-pug')
var less = require('gulp-less')
var clean_css = require('gulp-clean-css')

gulp.task('pug:docs', function () {
  return gulp.src('docs/{index,props}.pug')
    .pipe(pug({
      basedir: './'
    , locals: {
        Docs: require('./docs/_models/Docs.class.js')
      , Bangs: require('./_models/Bangs.class.js')
      }
    }))
    .pipe(gulp.dest('./docs/'))
})

gulp.task('lessc:bangs', function () {
  return gulp.src('bangs.less')
    .pipe(less())
    .pipe(gulp.dest('./'))
})

gulp.task('lessc:docs', function () {
  return gulp.src('docs/styles/docs.less')
    .pipe(less())
    .pipe(gulp.dest('docs/styles/'))
})

gulp.task('minify', ['lessc:bangs'], function () {
  return gulp.src('bangs.css')
    .pipe(clean_css())
    .pipe(rename('bangs.min.css')) // TODO: use a SourceMap!
    .pipe(gulp.dest('./'))
})

gulp.task('build', ['pug:docs', 'lessc:docs', 'minify'])
