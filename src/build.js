let fs = require('fs')
let Docs = require('../docs/_models/Docs.class.js')

fs.mkdir('build/', function (err, data) {
  Docs.generatePercentsAsync('w', function (val) { return `width: (${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_width.less', data, function (err, data) { if (err) throw err })
  })
  Docs.generatePercentsAsync('cw', function (val) { return `.column-width(${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_column-width.less', data, function (err, data) { if (err) throw err })
  })
  Docs.generatePercentsAsync('x', function (val) { return `.flex(${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_flex.less', data, function (err, data) { if (err) throw err })
  })
  Docs.generateCountsAsync('cc', function (val) { return `.column-count(${val})` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_column-count.less', data, function (err, data) { if (err) throw err })
  })
  Docs.generateCountsAsync('gtc', function (val) { return `.grid-template-columns(repeat(${val}, 1fr))` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_grid-template-columns.less', data, function (err, data) { if (err) throw err })
  })
  Docs.generateCountsAsync('gtr', function (val) { return `.grid-template-rows(repeat(${val}, 1fr))` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile('build/_grid-template-rows.less', data, function (err, data) { if (err) throw err })
  })
})
