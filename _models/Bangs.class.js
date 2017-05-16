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
    /**
     * Automate counts.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {string} source name of source array from which to take counts; must be a member of `data.global.common`
     * @param  {?function(number)=string} namefn function determining the value name
     * @param  {?function(number)=string} codefn function determining the value code
     * @param  {?function(number)=string} usefn  function determining the value use
     */
    function generateCounts(namefn, codefn, usefn) {
      // REVIEW TODO abstract this function and `generateCountValues` function
      const COUNT = data.global.common.count_max
      for (let i = 1; i <= COUNT; i++) {
        let newvalue_pos = {
          name: (namefn) ? namefn.call(null, i) : i.toString()
        , code: (codefn) ? codefn.call(null, i) : i.toString()
        , use : (usefn ) ?  usefn.call(null, i) : ''
        }
        this.values.push(newvalue_pos)
      }
      for (let i = 1; i <= COUNT; i++) {
        let newvalue_neg = {
          name: (namefn) ? namefn.call(null, -i) : (-i).toString()
        , code: (codefn) ? codefn.call(null, -i) : (-i).toString()
        , use : (usefn ) ?  usefn.call(null, -i) : ''
        }
        this.values.push(newvalue_neg)
      }
    }
    /**
     * Automate line widths.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {?function(number)=string} namefn function determining the value name
     * @param  {?function(number)=string} codefn function determining the value code
     * @param  {?function(number)=string} usefn  function determining the value use
     */
    function generateLineWidths(namefn, codefn, usefn) {
      const WIDTHS = data.global.common.line_widths
      for (let w of WIDTHS) {
        let newvalue = {
          name: (namefn) ? namefn.call(null, w) : w.toString()
        , code: (codefn) ? codefn.call(null, w) : w.toString()
        , use : (usefn ) ?  usefn.call(null, w) : ''
        }
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
      for (let value of Bangs.DATA.global.values.concat(property.values)) {
        let codes_arr = value.codes || [value.code || Bangs.DATA.global.values.find((v) => v.name===value.name).code]
        let selector = codes_arr.map((c) => `.-${property.code}-${c}${(suffix) ? `-${suffix}` : ''}`).join(', ')
        let rules = (suffix) ? `.-${property.code}-${codes_arr[0]};`
        : (function () {
            /**
             * Return a CSS/Less declaration string.
             * The string will be one of the following forms:
             * - `property: value`  - if the property has no vendor fallback
             * - the result of calling the property’s vendor fallback function, with `val` as the argument
             * @param  {string} val a string representing a CSS value
             * @return {string}     a string representing a CSS declaration
             */
            function declaration(val) {
              return (property.fallback) ?
                new Function(...property.fallback).call(null, val) : `${property.name}: ${val}`
            }
            let global_fallback = ({
              'initial': (function () {
                if (!property.initial) return ''
                let initial_val = property.values.find((v) => v.name===property.initial)
                return (initial_val) ? `.-${property.code}-${initial_val.code};` : `${declaration(property.initial)} !important;`
              })()
            , 'unset': (function () {
                let val_code = Bangs.DATA.global.values.find((v) => v.name===(
                  (property.inherited) ? 'inherit' : 'initial'
                )).code
                return `.-${property.code}-${val_code};`
              })()
            })[value.name]
            return (
              ((global_fallback) ? global_fallback + ' ' : '')
            + `${(value.use) ? value.use : declaration(value.name)} !important;`
            )
          })()
        rulesets.push(`${selector} { ${rules} }`)
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
