var fs = require('fs')
var path = require('path')
var Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  Bangs.DATA.properties.filter((p) => ![
    'page-break-before' // CHANGED deprecated
  , 'page-break-after' // CHANGED deprecated
  , 'font-stretch' // TODO v0.14.0
  , 'font-kerning' // TODO v0.14.0
  , 'text-justify' // TODO v0.14.0
  ].includes(p.name)).forEach(function (property) {
    fs.writeFile(`${__dirname}/../build/_${property.name}.less`, Bangs.generateLess(property), function (err, data) { if (err) throw err })
  })
})
