let fs = require('fs')
let path = require('path')
let Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  [
  , 'width'
  , 'flex'
  , 'column-count'
  , 'column-width'
  , 'column-gap'
  , 'column-rule-width'
  , 'grid-template-columns'
  , 'grid-template-rows'
  ].forEach(function (prop) {
    fs.writeFile(`${__dirname}/../build/_${prop}.less`, Bangs.generateLess(prop), function (err, data) { if (err) throw err })
  })
})
