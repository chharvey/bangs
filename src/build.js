let fs = require('fs')
let Docs = require('../docs/_models/Docs.class.js')

let content = [
  `
/*################################*\\
    bangs  |  _gen.less
\\*################################*/
  `
, Docs.generatePercents('w' , function (val) { return `width: (${val} * 100%)` })
, Docs.generatePercents('cw', function (val) { return `.column-width(${val} * 100%)` })
, Docs.generatePercents('x' , function (val) { return `.flex(${val} * 100%)` })
].join('\n')

fs.mkdir('build/', function (err, data) {
  fs.writeFile('build/_gen.less', content, function (err, data) {
    if (err) console.error(err)
  })
})
