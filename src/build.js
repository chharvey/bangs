let fs = require('fs')
let path = require('path')
let Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  [
  , 'width'
  , 'column-count'
  , 'column-width'
  , 'column-gap'
  , 'column-rule-width'
  , 'column-rule-style'
  , 'column-rule-color'
  , 'column-fill'
  , 'column-span'
  , 'flex-direction'
  , 'flex-wrap'
  , 'flex'
  , 'order'
  , 'grid-template-columns'
  , 'grid-template-rows'
  ].forEach(function (prop) {
    fs.writeFile(`${__dirname}/../build/_${prop}.less`, Bangs.generateLess(prop), function (err, data) { if (err) throw err })
  })
})
