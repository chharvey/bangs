let fs = require('fs')
let Docs = require('../docs/_models/Docs.class.js')

fs.mkdir('build/', function (err, data) {
  Docs.generatePercentsFileAsync('w', function (val) { return `width: (${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_width.less', data, function (err, data) { if (err) throw err })
  })
  Docs.generatePercentsFileAsync('cw', function (val) { return `.column-width(${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_column-width.less', data, function (err, data) { if (err) throw err })
  })
  Docs.generatePercentsFileAsync('x', function (val) { return `.flex(${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_flex.less', data, function (err, data) { if (err) throw err })
  })
})