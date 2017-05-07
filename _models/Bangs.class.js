var Util = require('./Util.class.js')

module.exports = (function () {
  /**
   * A set of static members used for the site.
   * Similar to a utility class.
   * @constructor
   */
  function Bangs() {}

  /**
   * This project’s data, compiled from raw JSON.
   * NOTE: WARNING: IMPURE FUNCTION (modifies parameter).
   * Call functions on CSS properties, pushing entries to their `values` arrays.
   * The function called on each CSS property is specified by its `generator` property.
   * See `/bangs.json` for more information
   * @type {Object}
   */
  Bangs.DATA = (function compileData(data) {
    /**
     * Automate track fractions.
     * Fractions can be percentages or any length unit, depending on the mixin passed.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * @param  {Object} property the css property
     * @param  {?function(string)=string} mixin function outputting the css value
     */
    function generateFracValues(property, mixin) {
      const _DENOMS = data.global.common.tracks
      for (let i = 0; i < _DENOMS.length; i++) {
        for (let j = 1; j <= _DENOMS[i]; j++) {
          let newvalue = {
            name: `${Math.round(10000 * (j/_DENOMS[i]))/100}%`
          , code: `${j}o${_DENOMS[i]}`
          }
          if (mixin) newvalue.use = mixin.call(null, `(${j}/${_DENOMS[i]})`)
          let value = property.values.find((v) => v.name===newvalue.name)
          if (value) {
            if (!value.codes) { // type(codes) == Array<string>; type(code) == <string>
              value.codes = [value.code]
              value.code = ''
            }
            value.codes.push(newvalue.code)
          } else {
            property.values.push(newvalue)
          }
        }
      }
    }
    for (let property of data.properties) {
      for (let generator of (property.generators || [])) {
        eval(generator.name).call(null, property, ...generator.args.map(eval))
      }
    }
    return data
  })(Util.cloneDeep(require('../bangs.json')))

  /**
   * Automate track fractions.
   * Fractions can be percentages, or in another unit such as `vw`.
   * @param  {string} prop css property name
   */
  Bangs.generateTrackFracs = function generateTrackFracs(prop) {
    let property = Bangs.DATA.properties.find((p) => p.name===prop)
    let unique_values = []
    /**
     * Return a media query containing rulesets.
     * If no suffix is given, the media query will be ommitted (equivalent to `@media all`).
     * @param  {string=''} suffix media query code, e.g. ('-sK')
     * @return {string} complete css media query as a string
     */
    function queryblock(suffix) {
      let rulesets = []
      for (let value of property.values) {
        if (!value.codes) {
          value.codes = [value.code || Bangs.DATA.global.values.find((v) => v.name===value.name).code]
        }
        let classes = value.codes.map((c) => `.-${property.code}-${c}${(suffix) ? `-${suffix}` : ''}`).join(', ')
        let declaration = (suffix) ? `.-${property.code}-${value.codes[0]}` : `${value.use || value.name} !important`
        rulesets.push(`${classes} { ${declaration}; }`)
      }
      return (suffix) ? `
        @media ${Bangs.DATA.global.media.find((m) => m.code===suffix).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }
    return [''].concat(Bangs.DATA.global.media.map((m) => m.code)).map(queryblock).join('')
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
