var fs = require('fs')

var gulp = require('gulp')
var rename = require('gulp-rename')
var pug = require('gulp-pug')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var clean_css = require('gulp-clean-css')

var Bangs = require('./_models/Bangs.class.js')

gulp.task('pug:docs', function () {
  return gulp.src('docs/{index,props}.pug')
    .pipe(pug({
      basedir: './'
    , locals: {
        Docs: require('./docs/_models/Docs.class.js')
      , Bangs: Bangs
      }
    }))
    .pipe(gulp.dest('./docs/'))
})

gulp.task('lessc:docs', function () {
  return gulp.src('docs/styles/docs.less')
    .pipe(less())
    .pipe(autoprefixer({
      grid: true
    , cascade: false
    }))
    .pipe(gulp.dest('./docs/styles/'))
})

gulp.task('src:less', function () {
  fs.mkdir(`${__dirname}/build/`, function (err, data) {
    Bangs.DATA.properties.filter((p) => ![
      'font-stretch' // TODO v0.15.0
    , 'font-kerning' // TODO v0.15.0
    , 'text-justify' // TODO v0.15.0
    ].includes(p.name)).forEach(function (property) {
      fs.writeFile(`${__dirname}/build/_${property.name}.less`, Bangs.generateLess(property), function (err, data) { if (err) throw err })
    })
  })
  return;
  // return gulp.src('build/*.less')
  //   .pipe(less())
  //   .pipe(gulp.dest('build/'))
})

gulp.task('lessc:bangs', ['src:less'], function () {
  return gulp.src('bangs.less')
    .pipe(less())
    .pipe(autoprefixer({
      grid: true
    , cascade: false
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('minify', ['lessc:bangs'], function () {
  return gulp.src('bangs.css')
    .pipe(clean_css())
    .pipe(rename('bangs.min.css')) // TODO: use a SourceMap!
    .pipe(gulp.dest('./'))
})

gulp.task('build', ['pug:docs', 'lessc:docs', 'minify'])
