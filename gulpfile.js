var gulp = require('gulp')
var pug = require('gulp-pug')
var less = require('gulp-less')

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

gulp.task('lessc:all', ['lessc:bangs', 'lessc:docs'])
