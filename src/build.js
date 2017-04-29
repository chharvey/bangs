let fs = require('fs')
let path = require('path')
let Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  Bangs.generateTrackFracsAsync('w', function (val) { return `width: (${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile(`${__dirname}/../build/_width.less`, data, function (err, data) { if (err) throw err })
  })
  Bangs.generateTrackFracsAsync('cw', function (val) { return `.column-width(${val} * 100vw)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile(`${__dirname}/../build/_column-width.less`, data, function (err, data) { if (err) throw err })
  })
  Bangs.generateTrackFracsAsync('x', function (val) { return `.flex(${val} * 100%)` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile(`${__dirname}/../build/_flex.less`, data, function (err, data) { if (err) throw err })
  })
  Bangs.generateTrackCountsAsync('cc', function (val) { return `.column-count(${val})` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile(`${__dirname}/../build/_column-count.less`, data, function (err, data) { if (err) throw err })
  })
  Bangs.generateTrackCountsAsync('gtc', function (val) { return `.grid-template-columns(repeat(${val}, 1fr))` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile(`${__dirname}/../build/_grid-template-columns.less`, data, function (err, data) { if (err) throw err })
  })
  Bangs.generateTrackCountsAsync('gtr', function (val) { return `.grid-template-rows(repeat(${val}, 1fr))` }, function (err, data) {
    if (err) console.error(err)
    else fs.writeFile(`${__dirname}/../build/_grid-template-rows.less`, data, function (err, data) { if (err) throw err })
  })
})
