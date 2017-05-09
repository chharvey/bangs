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
   * The function called on each CSS property is specified by items in its `generators` array.
   * See `/bangs.json` for more information
   * @type {Object}
   */
  Bangs.DATA = (function compileData(data) {
    /**
     * Automate track fractions.
     * Fractions can be percentages or any length unit, depending on the mixin passed.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {?function(string)=string} usefn  function determining the value use
     */
    function generateFracValues(usefn) {
      const _DENOMS = data.global.common.tracks
      for (let i = 0; i < _DENOMS.length; i++) {
        for (let j = 1; j <= _DENOMS[i]; j++) {
          let newvalue = {
            name: `${Math.round(10000 * (j/_DENOMS[i]))/100}%`
          , code: `${j}o${_DENOMS[i]}`
          }
          if (usefn) newvalue.use = usefn.call(null, `(${j}/${_DENOMS[i]} * 100%)`)
          let value = this.values.find((v) => v.name===newvalue.name)
          if (value) {
            if (!value.codes) { // type(codes) == Array<string>; type(code) == <string>
              value.codes = [value.code]
              value.code = ''
            }
            value.codes.push(newvalue.code)
          } else {
            this.values.push(newvalue)
          }
        }
      }
    }
    /**
     * Automate counts.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {?function(number)=string} namefn function determining the value name
     * @param  {?function(number)=string} usefn  function determining the value use
     */
    function generateCountValues(namefn, usefn) {
      const _DENOMS = data.global.common.tracks
      for (let i = 0; i < _DENOMS.length; i++) {
        let newvalue = {
          name: (namefn) ? namefn.call(null, _DENOMS[i]) : _DENOMS[i].toString()
        , code: _DENOMS[i].toString()
        }
        if (usefn) newvalue.use = usefn.call(null, _DENOMS[i])
        this.values.push(newvalue)
      }
    }
    for (let property of data.properties) {
      for (let generator of (property.generators || [])) {
        eval(generator.name).call(property, ...generator.args.map((el) => (el) ? new Function(...el) : null))
      }
    }
    return data
  })(Util.cloneDeep(require('../bangs.json')))

  /**
   * Generate Less from the compiled data.
   * @param  {string} prop css property name
   */
  Bangs.generateLess = function generateLess(prop) {
    let property = Bangs.DATA.properties.find((p) => p.name===prop)
    return [''].concat(Bangs.DATA.global.media.map((m) => m.code)).map(function queryblock(suffix) {
      let rulesets = []
      for (let value of property.values) {
        let codes_arr = value.codes || [value.code || Bangs.DATA.global.values.find((v) => v.name===value.name).code]
        let classes = codes_arr.map((c) => `.-${property.code}-${c}${(suffix) ? `-${suffix}` : ''}`).join(', ')
        let declaration = (suffix) ? `.-${property.code}-${codes_arr[0]}` : `${value.use || `${property.name}: ${value.name}`} !important`
        rulesets.push(`${classes} { ${declaration}; }`)
      }
      return (suffix) ? `
        @media ${Bangs.DATA.global.media.find((m) => m.code===suffix).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }).join('')
  }

  return Bangs
})()
