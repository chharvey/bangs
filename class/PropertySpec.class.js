const xjs = require('extrajs')

const GLOBAL = require('../global-data.json') // TODO once Bangs.class doesn’t require this class, set this const to Bangs.GLOBAL

/**
 * @classdesc The potential of a css property.
 * An instance of this class represents the *potential* of a property,
 * having a name, possible values, and other characteristics such as
 * its initial value and whether it is inherited.
 */
class PropertySpec {
  /**
   * Construct a new PropertySpec object.
   * @param   {!Object} data JSON data to parse
   */
  constructor(data) {
    /**
     * @summary A named list of possible generator functions.
     * @description Each function takes a {@link TransformObj} and an options object,
     * and generates values to add to this property. It returns undefined.
     * @type {Object<function(TransformObj,!Object)>}
     */
    const GENERATOR = {
  /**
   * NOTE: type definition
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
   * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `GLOBAL.common_data`
   */
  generateFracs(transforms, options={}) {
    xjs.Array.toArray(options.domain, GLOBAL.common_data).forEach(function (den) {
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
  },
  /**
   * Automate counts.
   * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
   * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
   * @param  {TransformObj} transforms a set of possible transformations
   * @param  {!Object={}} options a set of possible options
   * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `GLOBAL.common_data`
   * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
   */
  generateCounts(transforms, options={}) {
    let arr = xjs.Array.toArray(options.domain, GLOBAL.common_data)
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
  },
  /**
   * Automate spacing.
   * NOTE: WARNING: STATEFUL FUNCTION (uses `data` parameter above).
   * NOTE: METHOD FUNCTION. This function uses `this`, so must be called on an object.
   * @param  {TransformObj} transforms a set of possible transformations
   * @param  {!Object={}} options a set of possible options
   * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `GLOBAL.common_data`
   * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
   */
  generateSpaces(transforms, options={}) {
    const ABBR = {
      0.25: 'q'
    , 0.5 : 'h'
    }
    let arr = xjs.Array.toArray(options.domain, GLOBAL.common_data)
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
  },
  /**
   * Add values from a Value Type to a property.
   * @param  {TransformObj} transforms a set of possible transformations
   * @param  {!Object={}} options a set of possible options
   * @param  {string=} options.name the name of the value type to inherit
   */
  importValueType(transforms, options={}) {
    this.values.push(...GLOBAL.types.find((el) => el.name===options.name).values)
  },
    }

    this.name      = data.name
    this.code      = data.code
    this.summary   = data.summary
    this.url       = data.url
    this.inherited = data.inherited
    this.initial   = data.initial
    this.stability = data.stability
    this.values    = data.values
    this.pseudo    = data.pseudo

    ;(data.generators || []).forEach(function (g) {
      GENERATOR[g.name].call(this, (function (transforms_data) {
        // convert the `transforms` json data into a `TransformObj` object.
        let transform_obj = {}
        ;['namefn','codefn','usefn'].forEach(function (key) {
          transform_obj[key] = (transforms_data[key]) ? new Function(...transforms_data[key]) : null
        })
        return transform_obj
      })(g.transforms || {}), g.options)
    }, this)
  }

  /**
   * Generate Less from this object.
   * @returns {string} a Less stylesheet for this property
   */
  generateLess() {
    let supported_media   = GLOBAL.media .filter((m) => !(this.non_media || []).includes(m.name))
    let supported_pseudos = GLOBAL.pseudo.filter((p) =>  (this.pseudo    || []).includes(p.name))

    /**
     * Output multiple CSS rulesets corresponding to a set of values.
     * @return {string} multiple rulesets concatenated into a string
     */
    let output = () => {
      let rulesets = []
      GLOBAL.values.concat(this.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code] // use this if cannot find value.code (shant, as it’s required) // || GLOBAL.values.find((v) => v.name===value.name).code
        let selector = codes_arr.map((c) => `.-${this.code}-${c}`).join(', ')
        let rules = (() => {
          /**
           * Return a CSS/Less declaration string.
           * The string will be one of the following forms:
           * - `property: value`  - if the property has no vendor fallback
           * - the result of calling the property’s vendor fallback function, with `val` as the argument
           * @param  {string} val a string representing a CSS value
           * @return {string}     a string representing a CSS declaration
           */
          let declaration = (val) => `${this.name}: ${val}`
          let global_fallback = ({
            // TODO remove `initial` fallback once widely supported
            'initial': (() => {
              if (!this.initial) return '' // if the inital value is not specified by CSS specs
              let initial_val = this.values.find((v) => v.name===this.initial)
              return (initial_val) ? `.-${this.code}-${initial_val.code};` : `${declaration(this.initial)} !important;`
            })(),
            // TODO remove `unset` fallback once widely supported
            'unset': (() => {
              let val_code = GLOBAL.values.find((v) => v.name===(
                (this.inherited) ? 'inherit' : 'initial'
              )).code
              return `.-${this.code}-${val_code};`
            })()
          })[value.name]
          return (
            ((global_fallback) ? `${global_fallback} ` : '')
            + `${(value.use) ? value.use : declaration(value.name)} !important;`
          )
        })()
        rulesets.push(`${selector} { ${rules} }`)
      }, this)
      return rulesets.join('\n')
    }

    /**
     * Similar to `output()`, but with a suffix for an at-rule.
     * @param  {string} suffix suffix appended to classname
     * @return {string}        multiple rulesets wrapped in an at-rule block
     */
    function atRule(suffix) {
      let rulesets = []
      GLOBAL.values.concat(this.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code]
        let selector = codes_arr.map((c) => `.-${this.code}-${c}-${suffix}`).join(', ')
        let rules = `.-${this.code}-${codes_arr[0]};`
        rulesets.push(`${selector} { ${rules} }`)
      }, this)
      return `
        @media ${GLOBAL.media.find((m) => m.code===suffix).query} {
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
      GLOBAL.values.concat(this.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code]
        let selector = codes_arr.map((c) => `.-${this.code}-${c}-${suffix}`).join(', ')
        let less_parent = GLOBAL.pseudo.find((p) => p.code===suffix).selectors.map((s) => `&${s}`).join(', ')
        let rules = `.-${this.code}-${codes_arr[0]};`
        rulesets.push(`${selector} { ${less_parent} { ${rules} } }`)
      }, this)
      return rulesets.join('\n')
    }

    return output()
      + supported_media  .map((m) => m.code).map(atRule     , this).join('')
      + supported_pseudos.map((p) => p.code).map(pseudoClass, this).join('')
  }
}

module.exports = PropertySpec
