let fs = require('fs')
let path = require('path')
let Bangs = require('../_models/Bangs.class.js')

fs.mkdir('build/', function (err, data) {
  [
    'display'
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
  , 'grid-column-gap'
  , 'grid-row-gap'
  , 'justify-content'
  , 'align-content'
  , 'justify-items'
  , 'align-items'
  , 'justify-self'
  , 'align-self'
  , 'position'
  , 'top'
  , 'bottom'
  , 'left'
  , 'right'
  , 'float'
  , 'clear'
  , 'z-index'
  , 'box-sizing'
  , 'width'
  , 'overflow'
  , 'text-overflow'
  , 'font-family'
  , 'font-weight'
  , 'font-style'
  , 'font-size'
  , 'font-variant'
  , 'line-height'
  , 'text-transform'
  , 'white-space'
  , 'text-align'
  , 'vertical-align'
  , 'word-spacing'
  , 'letter-spacing'
  , 'text-indent'
  , 'background-image'
  , 'background-position'
  , 'background-repeat'
  , 'background-origin'
  , 'background-clip'
  , 'background-size'
  , 'background-attachment'
  , 'background-color'
  , 'border-width'
  , 'border-style'
  , 'border-color'
  , 'border-radius'
  , 'box-shadow'
  , 'opacity'
  , 'visibility'
  , 'color'
  , 'text-decoration'
  , 'text-shadow'
  , 'quotes'
  ].forEach(function (prop) {
    fs.writeFile(`${__dirname}/../build/_${prop}.less`, Bangs.generateLess(prop), function (err, data) { if (err) throw err })
  })
})
