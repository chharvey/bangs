let fs = require('fs')
let path = require('path')
let Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  fs.writeFile(`${__dirname}/../build/_width.less`                , Bangs.generateTrackFracs ('w'  , (val) => `width: (${val} * 100%)`                     ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_flex.less`                 , Bangs.generateTrackFracs ('x'  , (val) => `.flex(${val} * 100%)`                       ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_column-count.less`         , Bangs.generateTrackCounts('cc' , (val) => `.column-count(${val})`                      ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_grid-template-columns.less`, Bangs.generateTrackCounts('gtc', (val) => `.grid-template-columns(repeat(${val}, 1fr))`), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_grid-template-rows.less`   , Bangs.generateTrackCounts('gtr', (val) => `.grid-template-rows(repeat(${val}, 1fr))`   ), function (err, data) { if (err) throw err })
})
