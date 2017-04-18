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
   * The style guide site for this project.
   * @type {Page}
   */
  Docs.DOCS = new Page({ name: 'Bangs!', url: '/docs/' })
    .title('Bangs! by Chris Harvey')
    .description('Unopinionated, single-responsibility CSS class selectors marked with !important.')
    .add(new Page({ name: 'Bangs!', url: '/docs/index.html' })
      .description('This file lists information about each property and its supported values.')
      .add(new Page({ name: 'Layout', url: '/docs/index.html#ss-layout' })
        .add(new Page({ name: 'display'        , url: '/docs/index.html#display' }))
        .add(new Page({ name: 'flex-direction' , url: '/docs/index.html#flex-direction' }))
        .add(new Page({ name: 'flex-wrap'      , url: '/docs/index.html#flex-wrap' }))
        .add(new Page({ name: 'flex'           , url: '/docs/index.html#flex' }))
        .add(new Page({ name: 'order'          , url: '/docs/index.html#order' }))
        .add(new Page({ name: 'column-count'     , url: '/docs/index.html#column-count' }))
        .add(new Page({ name: 'column-width'     , url: '/docs/index.html#column-width' }))
        .add(new Page({ name: 'page-break-before', url: '/docs/index.html#page-break-before' }))
        .add(new Page({ name: 'page-break-after' , url: '/docs/index.html#page-break-after' }))
        .add(new Page({ name: 'justify-content', url: '/docs/index.html#justify-content' }))
        .add(new Page({ name: 'align-content'  , url: '/docs/index.html#align-content' }))
        .add(new Page({ name: 'justify-items'    , url: '/docs/index.html#justify-items' }))
        .add(new Page({ name: 'align-items'    , url: '/docs/index.html#align-items' }))
        .add(new Page({ name: 'justify-self'     , url: '/docs/index.html#justify-self' }))
        .add(new Page({ name: 'align-self'     , url: '/docs/index.html#align-self' }))
        .add(new Page({ name: 'position'       , url: '/docs/index.html#position' }))
        .add(new Page({ name: 'top'            , url: '/docs/index.html#top' }))
        .add(new Page({ name: 'bottom'         , url: '/docs/index.html#bottom' }))
        .add(new Page({ name: 'left'           , url: '/docs/index.html#left' }))
        .add(new Page({ name: 'right'          , url: '/docs/index.html#right' }))
        .add(new Page({ name: 'float'          , url: '/docs/index.html#float' }))
        .add(new Page({ name: 'clear'          , url: '/docs/index.html#clear' }))
        .add(new Page({ name: 'z-index'        , url: '/docs/index.html#z-index' }))
      )
      .add(new Page({ name: 'Box Model', url: '/docs/index.html#ss-box-model' })
        .add(new Page({ name: 'box-sizing'        , url: '/docs/index.html#box-sizing' } ))
        .add(new Page({ name: 'width'             , url: '/docs/index.html#width' } ))
        .add(new Page({ name: 'margin'            , url: '/docs/index.html#margin' } ))
        .add(new Page({ name: 'margin-vertical'   , url: '/docs/index.html#margin-vertical' } ))
        .add(new Page({ name: 'margin-horizontal' , url: '/docs/index.html#margin-horizontal' } ))
        .add(new Page({ name: 'padding'           , url: '/docs/index.html#padding' } ))
        .add(new Page({ name: 'padding-vertical'  , url: '/docs/index.html#padding-vertical' } ))
        .add(new Page({ name: 'padding-horizontal', url: '/docs/index.html#padding-horizontal' } ))
        .add(new Page({ name: 'overflow'             , url: '/docs/index.html#overflow' }))
        .add(new Page({ name: 'text-overflow'      , url: '/docs/index.html#text-overflow' }))
      )
      .add(new Page({ name: 'Typography', url: '/docs/index.html#ss-typography' })
        .add(new Page({ name: 'font-family'      , url: '/docs/index.html#font-family' }))
        .add(new Page({ name: 'font-weight'      , url: '/docs/index.html#font-weight' }))
        .add(new Page({ name: 'font-stretch'       , url: '/docs/index.html#font-stretch' }))
        .add(new Page({ name: 'font-style'       , url: '/docs/index.html#font-style' }))
        .add(new Page({ name: 'font-size'        , url: '/docs/index.html#font-size' }))
        .add(new Page({ name: 'font-kerning'     , url: '/docs/index.html#font-kerning' }))
        .add(new Page({ name: 'font-variant'     , url: '/docs/index.html#font-variant' }))
        .add(new Page({ name: 'line-height'      , url: '/docs/index.html#line-height' }))
        .add(new Page({ name: 'text-transform'     , url: '/docs/index.html#text-transform' }))
        .add(new Page({ name: 'white-space'      , url: '/docs/index.html#white-space' }))
        .add(new Page({ name: 'overflow-wrap'    , url: '/docs/index.html#overflow-wrap' }))
        .add(new Page({ name: 'text-align'       , url: '/docs/index.html#text-align' }))
        .add(new Page({ name: 'text-justify'       , url: '/docs/index.html#text-justify' }))
        .add(new Page({ name: 'vertical-align' , url: '/docs/index.html#vertical-align' }))
        .add(new Page({ name: 'word-spacing'     , url: '/docs/index.html#word-spacing' }))
        .add(new Page({ name: 'letter-spacing'   , url: '/docs/index.html#letter-spacing' }))
        .add(new Page({ name: 'text-indent'      , url: '/docs/index.html#text-indent' }))
      )
      .add(new Page({ name: 'Box Cosmetics', url: '/docs/index.html#ss-box-cosmetics' })
        .add(new Page({ name: 'background-image'     , url: '/docs/index.html#background-image' }))
        .add(new Page({ name: 'background-position'  , url: '/docs/index.html#background-position' }))
        .add(new Page({ name: 'background-size'      , url: '/docs/index.html#background-size' }))
        .add(new Page({ name: 'background-repeat'    , url: '/docs/index.html#background-repeat' }))
        .add(new Page({ name: 'background-attachment', url: '/docs/index.html#background-attachment' }))
        .add(new Page({ name: 'background-origin'    , url: '/docs/index.html#background-origin' }))
        .add(new Page({ name: 'background-clip'      , url: '/docs/index.html#background-clip' }))
        .add(new Page({ name: 'background-color'     , url: '/docs/index.html#background-color' }))
        .add(new Page({ name: 'border-style'         , url: '/docs/index.html#border-style' }))
        .add(new Page({ name: 'border-color'         , url: '/docs/index.html#border-color' }))
        .add(new Page({ name: 'box-shadow'           , url: '/docs/index.html#box-shadow' }))
        .add(new Page({ name: 'opacity'              , url: '/docs/index.html#opacity' }))
        .add(new Page({ name: 'visibility'           , url: '/docs/index.html#visibility' }))
      )
      .add(new Page({ name: 'Text Cosmetics', url: '/docs/index.html#ss-text-cosmetics' })
        .add(new Page({ name: 'color'              , url: '/docs/index.html#color' }))
        .add(new Page({ name: 'text-decoration'    , url: '/docs/index.html#text-decoration' }))
        .add(new Page({ name: 'text-shadow'        , url: '/docs/index.html#text-shadow' }))
        .add(new Page({ name: 'quotes'             , url: '/docs/index.html#quotes' }))
      )
      .add(new Page({ name: 'Miscellaneous', url: '/docs/index.html#ss-misc' })
        .add(new Page({ name: 'list-style-type'    , url: '/docs/index.html#list-style-type' }))
        .add(new Page({ name: 'list-style-position', url: '/docs/index.html#list-style-position' }))
        .add(new Page({ name: 'list-style-image'   , url: '/docs/index.html#list-style-image' }))
      )
    )

  /**
   * This project’s data as JSON.
   * @type {Object}
   */
  Docs.DATA = require('../../bangs.json')

  return Docs
})()
