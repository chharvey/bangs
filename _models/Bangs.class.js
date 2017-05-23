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
     * A `TransformObj` object defines 3 nullable functions that determine how to transform a pure data value
     * into a css `<value>` type (the type used to denote values of css properties).
     * Each function takes 1 argument (of unknown type, depending on the function that requires it as a parameter),
     * and returns a string.
     * @typedef  {!Object} TransformObj
     * @property {?function(?):string} TransformObj.namefn a function returning the value.name
     * @property {?function(?):string} TransformObj.codefn a function returning the value.code
     * @property {?function(?):string} TransformObj.usefn  a function returning the value.use
     */
    /**
     * Automate track fractions.
     * Fractions can be percentages or any length unit, depending on the mixin passed.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {TransformObj} transforms a set of possible transformations
     * @param  {!Object={}} options a set of possible options
     * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data.common`
     */
    function generateFracs(transforms, options={}) {
      Util.arrayify(options.domain, data.common).forEach(function (den) {
        for (let num = 1; num <= den; num++) {
          let newvalue = {
            name: `${Math.round(10000 * (num/den))/100}%`
          , code: `${num}o${den}`
          , use : (transforms.usefn) ? transforms.usefn.call(null, `(${num}/${den} * 100%)`) : ''
          }
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
      }, this)
    }
    /**
     * Automate counts.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {TransformObj} transforms a set of possible transformations
     * @param  {!Object={}} options a set of possible options
     * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data.common`
     * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
     */
    function generateCounts(transforms, options={}) {
      let arr = Util.arrayify(options.domain, data.common)
      arr.forEach(function (ct) {
        this.values.push({
          name: (transforms.namefn) ? transforms.namefn.call(null, ct) : ct.toString()
        , code: (transforms.codefn) ? transforms.codefn.call(null, ct) : ct.toString()
        , use : (transforms.usefn)  ? transforms.usefn .call(null, ct) : ''
        })
      }, this)
      if (options.negative) {
      arr.forEach(function (i) {
        this.values.push({
          name: (transforms.namefn) ? transforms.namefn.call(null, -i) : (-i).toString()
        , code: (transforms.codefn) ? transforms.codefn.call(null, -i) : `_${i}`
        , use : (transforms.usefn ) ? transforms.usefn .call(null, -i) : ''
        })
      }, this)
      }
    }
    /**
     * Automate spacing.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {TransformObj} transforms a set of possible transformations
     * @param  {!Object={}} options a set of possible options
     * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data.common`
     * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
     */
    function generateSpaces(transforms, options={}) {
      const ABBR = {
        0.25: 'q'
      , 0.5 : 'h'
      }
      let arr = Util.arrayify(options.domain, data.common)
      arr.forEach(function (sp) {
        this.values.push({
          name: (transforms.namefn) ? transforms.namefn.call(null, sp) : sp.toString()
        , code: (transforms.codefn) ? transforms.codefn.call(null, sp) : `${ABBR[sp] || sp}`
        , use : (transforms.usefn ) ? transforms.usefn .call(null, sp) : ''
        })
      }, this)
      if (options.negative) {
      arr.forEach(function (sp) {
        this.values.push({
          name: (transforms.namefn) ? transforms.namefn.call(null, -sp) : (-sp).toString()
        , code: (transforms.codefn) ? transforms.codefn.call(null, -sp) : `_${ABBR[sp] || sp}`
        , use : (transforms.usefn ) ? transforms.usefn .call(null, -sp) : ''
        })
      }, this)
      }
    }
    /**
     * Automate line widths.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {TransformObj} transforms a set of possible transformations
     * @param  {!Object={}} options a set of possible options
     */
    function generateLineWidths(transforms, options={}) {
      this.values.push(...data.global.types.find((el) => el.name==='<line-width>').values)
    }
    /**
     * Automate line styles.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {TransformObj} transforms a set of possible transformations
     * @param  {!Object={}} options a set of possible options
     */
    function generateLineStyles(transforms, options={}) {
      this.values.push(...data.global.types.find((el) => el.name==='<line-style>').values)
    }
    /**
     * Automate colors.
     * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
     * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
     * @param  {TransformObj} transforms a set of possible transformations
     * @param  {!Object={}} options a set of possible options
     */
    function generateColors(transforms, options={}) {
      this.values.push(...data.global.types.find((el) => el.name==='<color>').values)
    }
    data.properties.forEach(function (property) {
      (property.generators || []).forEach(function (generator) {
        eval(generator.name).call(property, (function () {
          let t = {}
          ;['namefn','codefn','usefn'].forEach(function (key) {
            t[key] = (generator.transforms && generator.transforms[key]) ? new Function(...generator.transforms[key]) : null
          })
          return t
        })(), generator.options)
      })
    })
    return data
  })(Util.cloneDeep(require('../bangs.json')))

  /**
   * Generate Less from the compiled data.
   * @param  {string} prop css property name
   */
  Bangs.generateLess = function generateLess(prop) {
    let property = Bangs.DATA.properties.find((p) => p.name===prop)
    let supported_media = Bangs.DATA.global.media.filter((m) => !(property.non_media || []).includes(m.name))
    return [''].concat(supported_media.map((m) => m.code)).map(function atRule(suffix) {
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
