var Page = require('sitepage').Page

module.exports = (function () {
  // CONSTRUCTOR
  /**
   * A set of static members used for the site.
   * Similar to a utility class.
   * @constructor
   */
  function Docs() {}

  // METHODS

  // STATIC MEMBERS
  /**
   * Documentation site for this project.
   * @type {Page}
   */
  Docs.DOCS = new Page({ name: 'Bangs!', url: '/docs/' })
    .title('Bangs! by Chris Harvey')
    .description('Unopinionated, single-responsibility CSS class selectors marked with !important.')
    .add(new Page({ name: 'Home', url: '/docs/index.html' })
      .add(new Page({ name: 'Introduction' , url: '/docs/index.html#introduction' }))
      .add(new Page({ name: 'Global Values', url: '/docs/index.html#global-values' }))
      .add(new Page({ name: 'Fallbacks'    , url: '/docs/index.html#fallbacks' }))
      .add(new Page({ name: 'Extensions'   , url: '/docs/index.html#extensions' }))
      .add(new Page({ name: 'Trends'       , url: '/docs/index.html#trends' }))
    )
    .add(new Page({ name: 'Properties', url: '/docs/props.html' })
      .description('This file lists information about each property and its supported values.')
      .add(new Page({ name: 'Layout', url: '/docs/props.html#ss-layout' })
        .add(new Page({ name: 'display'          , url: '/docs/props.html#display' }))
        .add(new Page({ name: 'flex-direction'   , url: '/docs/props.html#flex-direction' }))
        .add(new Page({ name: 'flex-wrap'        , url: '/docs/props.html#flex-wrap' }))
        .add(new Page({ name: 'flex'             , url: '/docs/props.html#flex' }))
        .add(new Page({ name: 'order'            , url: '/docs/props.html#order' }))
        .add(new Page({ name: 'column-count'     , url: '/docs/props.html#column-count' }))
        .add(new Page({ name: 'column-width'     , url: '/docs/props.html#column-width' }))
        .add(new Page({ name: 'page-break-before', url: '/docs/props.html#page-break-before' }))
        .add(new Page({ name: 'page-break-after' , url: '/docs/props.html#page-break-after' }))
        .add(new Page({ name: 'justify-content'  , url: '/docs/props.html#justify-content' }))
        .add(new Page({ name: 'align-content'    , url: '/docs/props.html#align-content' }))
        .add(new Page({ name: 'justify-items'    , url: '/docs/props.html#justify-items' }))
        .add(new Page({ name: 'align-items'      , url: '/docs/props.html#align-items' }))
        .add(new Page({ name: 'justify-self'     , url: '/docs/props.html#justify-self' }))
        .add(new Page({ name: 'align-self'       , url: '/docs/props.html#align-self' }))
        .add(new Page({ name: 'position'         , url: '/docs/props.html#position' }))
        .add(new Page({ name: 'top'              , url: '/docs/props.html#top' }))
        .add(new Page({ name: 'bottom'           , url: '/docs/props.html#bottom' }))
        .add(new Page({ name: 'left'             , url: '/docs/props.html#left' }))
        .add(new Page({ name: 'right'            , url: '/docs/props.html#right' }))
        .add(new Page({ name: 'float'            , url: '/docs/props.html#float' }))
        .add(new Page({ name: 'clear'            , url: '/docs/props.html#clear' }))
        .add(new Page({ name: 'z-index'          , url: '/docs/props.html#z-index' }))
      )
      .add(new Page({ name: 'Box Model', url: '/docs/props.html#ss-box-model' })
        .add(new Page({ name: 'box-sizing'        , url: '/docs/props.html#box-sizing' } ))
        .add(new Page({ name: 'width'             , url: '/docs/props.html#width' } ))
        .add(new Page({ name: 'margin'            , url: '/docs/props.html#margin' } ))
        .add(new Page({ name: 'margin-vertical'   , url: '/docs/props.html#margin-vertical' } ))
        .add(new Page({ name: 'margin-horizontal' , url: '/docs/props.html#margin-horizontal' } ))
        .add(new Page({ name: 'padding'           , url: '/docs/props.html#padding' } ))
        .add(new Page({ name: 'padding-vertical'  , url: '/docs/props.html#padding-vertical' } ))
        .add(new Page({ name: 'padding-horizontal', url: '/docs/props.html#padding-horizontal' } ))
        .add(new Page({ name: 'overflow'          , url: '/docs/props.html#overflow' }))
        .add(new Page({ name: 'text-overflow'     , url: '/docs/props.html#text-overflow' }))
      )
      .add(new Page({ name: 'Typography', url: '/docs/props.html#ss-typography' })
        .add(new Page({ name: 'font-family'   , url: '/docs/props.html#font-family' }))
        .add(new Page({ name: 'font-weight'   , url: '/docs/props.html#font-weight' }))
        .add(new Page({ name: 'font-stretch'  , url: '/docs/props.html#font-stretch' }))
        .add(new Page({ name: 'font-style'    , url: '/docs/props.html#font-style' }))
        .add(new Page({ name: 'font-size'     , url: '/docs/props.html#font-size' }))
        .add(new Page({ name: 'font-kerning'  , url: '/docs/props.html#font-kerning' }))
        .add(new Page({ name: 'font-variant'  , url: '/docs/props.html#font-variant' }))
        .add(new Page({ name: 'line-height'   , url: '/docs/props.html#line-height' }))
        .add(new Page({ name: 'text-transform', url: '/docs/props.html#text-transform' }))
        .add(new Page({ name: 'white-space'   , url: '/docs/props.html#white-space' }))
        .add(new Page({ name: 'overflow-wrap' , url: '/docs/props.html#overflow-wrap' }))
        .add(new Page({ name: 'text-align'    , url: '/docs/props.html#text-align' }))
        .add(new Page({ name: 'text-justify'  , url: '/docs/props.html#text-justify' }))
        .add(new Page({ name: 'vertical-align', url: '/docs/props.html#vertical-align' }))
        .add(new Page({ name: 'word-spacing'  , url: '/docs/props.html#word-spacing' }))
        .add(new Page({ name: 'letter-spacing', url: '/docs/props.html#letter-spacing' }))
        .add(new Page({ name: 'text-indent'   , url: '/docs/props.html#text-indent' }))
      )
      .add(new Page({ name: 'Box Cosmetics', url: '/docs/props.html#ss-box-cosmetics' })
        .add(new Page({ name: 'background-image'     , url: '/docs/props.html#background-image' }))
        .add(new Page({ name: 'background-position'  , url: '/docs/props.html#background-position' }))
        .add(new Page({ name: 'background-size'      , url: '/docs/props.html#background-size' }))
        .add(new Page({ name: 'background-repeat'    , url: '/docs/props.html#background-repeat' }))
        .add(new Page({ name: 'background-attachment', url: '/docs/props.html#background-attachment' }))
        .add(new Page({ name: 'background-origin'    , url: '/docs/props.html#background-origin' }))
        .add(new Page({ name: 'background-clip'      , url: '/docs/props.html#background-clip' }))
        .add(new Page({ name: 'background-color'     , url: '/docs/props.html#background-color' }))
        .add(new Page({ name: 'border-style'         , url: '/docs/props.html#border-style' }))
        .add(new Page({ name: 'border-color'         , url: '/docs/props.html#border-color' }))
        .add(new Page({ name: 'box-shadow'           , url: '/docs/props.html#box-shadow' }))
        .add(new Page({ name: 'opacity'              , url: '/docs/props.html#opacity' }))
        .add(new Page({ name: 'visibility'           , url: '/docs/props.html#visibility' }))
      )
      .add(new Page({ name: 'Text Cosmetics', url: '/docs/props.html#ss-text-cosmetics' })
        .add(new Page({ name: 'color'          , url: '/docs/props.html#color' }))
        .add(new Page({ name: 'text-decoration', url: '/docs/props.html#text-decoration' }))
        .add(new Page({ name: 'text-shadow'    , url: '/docs/props.html#text-shadow' }))
        .add(new Page({ name: 'quotes'         , url: '/docs/props.html#quotes' }))
      )
      .add(new Page({ name: 'Miscellaneous', url: '/docs/props.html#ss-misc' })
        .add(new Page({ name: 'list-style-type'    , url: '/docs/props.html#list-style-type' }))
        .add(new Page({ name: 'list-style-position', url: '/docs/props.html#list-style-position' }))
        .add(new Page({ name: 'list-style-image'   , url: '/docs/props.html#list-style-image' }))
      )
    )

  /**
   * This project’s data as JSON.
   * @type {Object}
   */
  Docs.DATA = require('../../bangs.json')

  /**
   * Automate percentages.
   * @param  {string} prop abbreviation for css property
   * @param  {function(number)=string} mixin function outputting the css value
   * @param  {Function} callback callback function to call after execution. standard callback params.
   */
  Docs.generatePercentsAsync = function generatePercentsAsync(prop, mixin, callback) {
    /**
     * Return a media query containing rulesets.
     * If no suffix is given, the media query will be ommitted (equivalent to `@media all`).
     * @param  {string=''} suffix media query code, e.g. ('-sK')
     * @return {string} complete css media query as a string
     */
    function media(suffix) {
      suffix = suffix || ''
      let denoms = [1, 2, 3, 4, 5, 6, 8, 10, 12]
      let unique_values = []
      let rulesets = []
      for (let i = 0; i < denoms.length; i++) {
        for (let j = 1; j <= denoms[i]; j++) {
          let fraction = j/denoms[i]
          let classname = `.-${prop}-${j}o${denoms[i]}${(suffix) ? `-${suffix}` : ''}`
          let selector = unique_values.find(function (el) { return el.value === fraction })
          if (selector) {
            selector.classes.push(classname)
          } else {
            unique_values.push({ value: fraction, classes: [classname] })
          }
        }
      }
      for (let selector of unique_values) {
        let rule = (suffix) ? selector.classes[0].split('-').slice(0,-1).join('-') : `${mixin.call(null, selector.value)} !important`
        rulesets.push(`${selector.classes.join(', ')} { ${rule}; }`)
      }
      return (suffix) ? `
        @media ${Docs.DATA.global.media.find(function (el) { return el.code === suffix}).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }
    try {
      callback.call(null, null, [''].concat(Docs.DATA.global.media.map(function (el) { return el.code })).map(media).join(''))
    } catch (e) {
      callback.call(null, e, null)
    }
  }

  return Docs
})()
