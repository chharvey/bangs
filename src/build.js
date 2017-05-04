let fs = require('fs')
let path = require('path')
let Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  fs.writeFile(`${__dirname}/../build/_width.less`                , Bangs.generateTrackFracs ('w'  , (val) => `width: (${val} * 100%)`                     ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_width.less`, (function (prop) {
    let property = Bangs.DATA.properties.find((p) => p.name===prop)
    let unique_values = []
    for (value of property.values) {
      let unique_item = unique_values.find((el) => el.qty===value.name)
      if (unique_item) {
        unique_item.codes.push(value.code)
      } else {
        unique_values.push({ qty: value.name, codes: [value.code] })
      }
    }
    function queryblock(suffix) {
      let rulesets = []
      for (let item of unique_values) {
        let canonical = property.values.find((v) => v.code===item.codes[0])
        let classes = item.codes.map((c) => `.-${property.code}-${c}${(suffix) ? `-${suffix}` : ''}`).join(', ')
        let declaration = (suffix) ? `.-${property.code}-${canonical.code}` : `${canonical.use || canonical.name} !important`
        rulesets.push(`${classes} { ${declaration}; }`)
      }
      return (suffix) ? `
        @media ${Bangs.DATA.global.media.find((m) => m.code===suffix).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }
    return [''].concat(Bangs.DATA.global.media.map((m) => m.code)).map(queryblock).join('')
  })('width'), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_flex.less`                 , Bangs.generateTrackFracs ('x'  , (val) => `.flex(${val} * 100%)`                       ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_column-count.less`         , Bangs.generateTrackCounts('cc' , (val) => `.column-count(${val})`                      ), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_grid-template-columns.less`, Bangs.generateTrackCounts('gtc', (val) => `.grid-template-columns(repeat(${val}, 1fr))`), function (err, data) { if (err) throw err })
  fs.writeFile(`${__dirname}/../build/_grid-template-rows.less`   , Bangs.generateTrackCounts('gtr', (val) => `.grid-template-rows(repeat(${val}, 1fr))`   ), function (err, data) { if (err) throw err })
})
