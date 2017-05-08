let fs = require('fs')
let path = require('path')
let Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  fs.writeFile(`${__dirname}/../build/_width.less`                , Bangs.generateLess('width'                ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_flex.less`                 , Bangs.generateLess('flex'                 ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_column-count.less`         , Bangs.generateLess('column-count'         ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_grid-template-columns.less`, Bangs.generateLess('grid-template-columns'), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_grid-template-rows.less`   , Bangs.generateLess('grid-template-rows'   ), function (err, data) { if (err) throw err })
})
