module.exports = (function () {
  /**
   * A set of static members used for the site.
   * Similar to a utility class.
   * @constructor
   */
  function Bangs() {}

  /**
   * This project’s data as JSON.
   * @type {Object}
   */
  Bangs.DATA = require('../bangs.json')

  /**
   * Automate track fractions.
   * Fractions can be percentages, or in another unit such as `vw`.
   * @param  {string} prop abbreviation for css property
   * @param  {function(number)=string} mixin function outputting the css value
   */
  Bangs.generateTrackFracs = function generateTrackFracs(prop, mixin) {
    /**
     * Return a media query containing rulesets.
     * If no suffix is given, the media query will be ommitted (equivalent to `@media all`).
     * @param  {string=''} suffix media query code, e.g. ('-sK')
     * @return {string} complete css media query as a string
     */
    function media(suffix) {
      suffix = suffix || ''
      const DENOMS = Bangs.DATA.global.common.tracks
      let unique_values = []
      let rulesets = []
      for (let i = 0; i < DENOMS.length; i++) {
        for (let j = 1; j <= DENOMS[i]; j++) {
          let fraction = j/DENOMS[i]
          let classname = `.-${prop}-${j}o${DENOMS[i]}${(suffix) ? `-${suffix}` : ''}`
          let unique_item = unique_values.find(function (el) { return el.value === fraction })
          if (unique_item) {
            unique_item.classes.push(classname)
          } else {
            unique_values.push({ value: fraction, classes: [classname] })
          }
        }
      }
      for (let item of unique_values) {
        // if suffix, include non-suffixed class; else, write new declaration
        let declaration = (suffix) ? item.classes[0].split('-').slice(0,-1).join('-') : `${mixin.call(null, item.value)} !important`
        rulesets.push(`${item.classes.join(', ')} { ${declaration}; }`)
      }
      return (suffix) ? `
        @media ${Bangs.DATA.global.media.find(function (el) { return el.code === suffix}).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }
    return [''].concat(Bangs.DATA.global.media.map(function (el) { return el.code })).map(media).join('')
  }

  /**
   * Automate track counts (column-count, grid-template-columns, etc).
   * @param  {string} prop abbreviation for css property
   * @param  {function(number)=string} mixin function outputting the css value
   */
  Bangs.generateTrackCounts = function generateTrackCounts(prop, mixin) {
    /**
     * Return a media query containing rulesets.
     * If no suffix is given, the media query will be ommitted (equivalent to `@media all`).
     * @param  {string=''} suffix media query code, e.g. ('-sK')
     * @return {string} complete css media query as a string
     */
    function media(suffix) {
      suffix = suffix || ''
      const DENOMS = Bangs.DATA.global.common.tracks
      let rulesets = []
      for (let i = 0; i < DENOMS.length; i++) {
        let classname = `.-${prop}-${DENOMS[i]}${(suffix) ? `-${suffix}` : ''}`
        // if suffix, include non-suffixed class; else, write new declaration
        let declaration = (suffix) ? classname.split('-').slice(0,-1).join('-') : `${mixin.call(null, DENOMS[i])} !important`
        rulesets.push(`${classname} { ${declaration}; }`)
      }
      return (suffix) ? `
        @media ${Bangs.DATA.global.media.find(function (el) { return el.code === suffix}).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }
    return [''].concat(Bangs.DATA.global.media.map(function (el) { return el.code })).map(media).join('')
  }

  return Bangs
})()
