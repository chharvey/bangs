const fs           = require('fs')
const gulp         = require('gulp')
const pug          = require('gulp-pug')
const less         = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const clean_css    = require('gulp-clean-css')
const sourcemaps   = require('gulp-sourcemaps')
const Bangs        = require('./_models/Bangs.class.js')

gulp.task('pug:docs', function () {
  return gulp.src('./docs/{index,props}.pug')
    .pipe(pug({
      basedir: './',
      locals: {
        Xmeter: require('xmeter'),
        Docs: require('./docs/_models/Docs.class.js'),
        Bangs: Bangs,
      }
    }))
    .pipe(gulp.dest('./docs/'))
})

gulp.task('lessc:docs', function () {
  return gulp.src('./docs/css/docs.less')
    .pipe(less())
    .pipe(autoprefixer({
      grid: true,
      cascade: false,
    }))
    .pipe(gulp.dest('./docs/css/'))
})

gulp.task('src:less', function () {
  fs.mkdir(`${__dirname}/css/dist/`, function (err, data) {
    Bangs.DATA.properties.forEach(function (property) {
      fs.writeFile(`${__dirname}/css/dist/_${property.name}.less`, Bangs.generateLess(property), function (err, data) { if (err) throw err })
    })
  })
  return;
  // if we want each less file compiled separately:
  // return gulp.src('./css/dist/*.less')
  //   .pipe(less())
  //   .pipe(gulp.dest('./css/dist/'))
})

gulp.task('lessc:bangs', ['src:less'], function () {
  return gulp.src('./css/src/bangs.less')
    .pipe(less())
    .pipe(autoprefixer({
      grid: true,
      cascade: false,
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(sourcemaps.init())
    .pipe(clean_css({
      level: {
        1: {
          optimizeFontWeight: false, // browsers may not always map `{ normal: 400, bold: 700 }`
        },
        2: {
          overrideProperties: false, // need fallbacks for `initial` and `unset`
          restructureRules: true, // combines selectors having the same rule (akin to `&:extend()`) // REVIEW be careful here
        },
      }
    }))
    .pipe(sourcemaps.write('./')) // writes to an external .map file
    .pipe(gulp.dest('./css/'))
})

gulp.task('build', ['pug:docs', 'lessc:docs', 'lessc:bangs'])
