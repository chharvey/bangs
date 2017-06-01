var gulp = require('gulp')
var pug = require('gulp-pug')

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
