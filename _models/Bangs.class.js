var Ajv = require('ajv')
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
     * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data.global.common_data`
     */
    function generateFracs(transforms, options={}) {
      Util.arrayify(options.domain, data.global.common_data).forEach(function (den) {
        for (let num = 1; num <= den; num++) {
          let newvalue = {
            name: `${Math.round(10000 * (num/den))/100}%`,
            code: `${num}o${den}`,
            use : (transforms.usefn) ? transforms.usefn.call(null, `(${num}/${den} * 100%)`) : '',
          }
          let value = this.values.find((v) => v.name===newvalue.name)
          if (value) {
            if (typeof value.code === 'string') {
              value.code = [value.code]
            }
            value.code.push(newvalue.code)
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
     * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data.global.common_data`
     * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
     */
    function generateCounts(transforms, options={}) {
      let arr = Util.arrayify(options.domain, data.global.common_data)
      arr.forEach(function (ct) {
        this.values.push({
          name: (transforms.namefn) ? transforms.namefn.call(null, ct) : ct.toString(),
          code: (transforms.codefn) ? transforms.codefn.call(null, ct) : ct.toString(),
          use : (transforms.usefn)  ? transforms.usefn .call(null, ct) : '',
        })
      }, this)
      if (options.negative) {
        arr.forEach(function (i) {
          this.values.push({
            name: (transforms.namefn) ? transforms.namefn.call(null, -i) : (-i).toString(),
            code: (transforms.codefn) ? transforms.codefn.call(null, -i) : `_${i}`,
            use : (transforms.usefn ) ? transforms.usefn .call(null, -i) : '',
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
     * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data.global.common_data`
     * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
     */
    function generateSpaces(transforms, options={}) {
      const ABBR = {
        0.25: 'q'
      , 0.5 : 'h'
      }
      let arr = Util.arrayify(options.domain, data.global.common_data)
      arr.forEach(function (sp) {
        this.values.push({
          name: (transforms.namefn) ? transforms.namefn.call(null, sp) : sp.toString(),
          code: (transforms.codefn) ? transforms.codefn.call(null, sp) : `${ABBR[sp] || sp}`,
          use : (transforms.usefn ) ? transforms.usefn .call(null, sp) : '',
        })
      }, this)
      if (options.negative) {
        arr.forEach(function (sp) {
          this.values.push({
            name: (transforms.namefn) ? transforms.namefn.call(null, -sp) : (-sp).toString(),
            code: (transforms.codefn) ? transforms.codefn.call(null, -sp) : `_${ABBR[sp] || sp}`,
            use : (transforms.usefn ) ? transforms.usefn .call(null, -sp) : '',
          })
        }, this)
      }
    }

    /**
     * Add values from a Value Type to a property.
     * @param  {TransformObj} transforms a set of possible transformations
     * @param  {!Object={}} options a set of possible options
     * @param  {string=} options.name the name of the value type to inherit
     */
    function importValueType(transforms, options={}) {
      this.values.push(...data.global.types.find((el) => el.name===options.name).values)
    }

    return (function () {
      let ajv = new Ajv()
      let isValid = ajv.compile(require('../bangs.schema.json'))
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
      ;(function () {
        let ajv = new Ajv()
        let is_schema_valid = ajv.validateSchema(require('../bangs.schema.json'))
        if (!is_schema_valid) {
          console.error(ajv.errors)
          throw new Error('Schema is not a valid schema!')
        }
      })()
      ;(function () {
        let ajv = new Ajv()
        let is_data_valid = ajv.validate(require('../bangs.schema.json'), data)
        if (!is_data_valid) {
          console.error(ajv.errors)
          throw new Error('Data does not valiate against schema!')
        }
      })()
      return data
    })()
  })(Util.cloneDeep(require('../bangs.json')))

  /**
   * Generate Less from the compiled data.
   * @param  {!Object} property a CSS property JSON object
   */
  Bangs.generateLess = function generateLess(property) {
    let supported_media = Bangs.DATA.global.media.filter((m) => !(property.non_media || []).includes(m.name))
    let supported_pseudos = Bangs.DATA.global.pseudo.filter((p) => (property.pseudo || []).includes(p.name))
    /**
     * Output multiple CSS rulesets corresponding to a set of values.
     * @return {string} multiple rulesets concatenated into a string
     */
    function output() {
      let rulesets = []
      Bangs.DATA.global.values.concat(property.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code] // use this if cannot find value.code (shant, as it’s required) // || Bangs.DATA.global.values.find((v) => v.name===value.name).code
        let selector = codes_arr.map((c) => `.-${property.code}-${c}`).join(', ')
        let rules = (function () {
          /**
           * Return a CSS/Less declaration string.
           * The string will be one of the following forms:
           * - `property: value`  - if the property has no vendor fallback
           * - the result of calling the property’s vendor fallback function, with `val` as the argument
           * @param  {string} val a string representing a CSS value
           * @return {string}     a string representing a CSS declaration
           */
          function declaration(val) { return `${property.name}: ${val}` }
          let global_fallback = ({
            // TODO remove `initial` fallback once widely supported
            'initial': (function () {
              if (!property.initial) return '' // if the inital value is not specified by CSS specs
              let initial_val = property.values.find((v) => v.name===property.initial)
              return (initial_val) ? `.-${property.code}-${initial_val.code};` : `${declaration(property.initial)} !important;`
            })(),
            // TODO remove `unset` fallback once widely supported
            'unset': (function () {
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
      })
      return rulesets.join('\n')
    }
    /**
     * Similar to `output()`, but with a suffix for an at-rule.
     * @param  {string} suffix suffix appended to classname
     * @return {string}        multiple rulesets wrapped in an at-rule block
     */
    function atRule(suffix) {
      let rulesets = []
      Bangs.DATA.global.values.concat(property.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code]
        let selector = codes_arr.map((c) => `.-${property.code}-${c}-${suffix}`).join(', ')
        let rules = `.-${property.code}-${codes_arr[0]};`
        rulesets.push(`${selector} { ${rules} }`)
      })
      return `
        @media ${Bangs.DATA.global.media.find((m) => m.code===suffix).query} {
          ${rulesets.join('\n')}
        }
      `
    }
    /**
     * Similar to `output()`, but with a suffix for a pseudo-class.
     * @param  {string} suffix suffix appended to classname
     * @return {string}        multiple rulesets in a string
     */
    function pseudoClass(suffix) {
      let rulesets = []
      Bangs.DATA.global.values.concat(property.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code]
        let selector = codes_arr.map((c) => `.-${property.code}-${c}-${suffix}`).join(', ')
        let less_parent = Bangs.DATA.global.pseudo.find((p) => p.code===suffix).selectors.map((s) => `&${s}`).join(', ')
        let rules = `.-${property.code}-${codes_arr[0]};`
        rulesets.push(`${selector} { ${less_parent} { ${rules} } }`)
      })
      return rulesets.join('\n')
    }
    return output()
      + supported_media.map((m) => m.code).map(atRule).join('')
      + supported_pseudos.map((p) => p.code).map(pseudoClass).join('')
  }

  return Bangs
})()
