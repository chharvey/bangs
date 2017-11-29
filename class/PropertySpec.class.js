const xjs = require('extrajs')

/**
 * @classdesc The potential of a css property.
 * An instance of this class represents the *potential* of a property,
 * having a name, possible values, and other characteristics such as
 * its initial value and whether it is inherited.
 */
class PropertySpec {
  constructor(data) {
    const data_global = require('../bangs.json').global // TODO separate global data into another json file
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
   * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data_global.common_data`
   */
  generateFracs(transforms, options={}) {
    xjs.Array.toArray(options.domain, data_global.common_data).forEach(function (den) {
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
   * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data_global.common_data`
   * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
   */
  generateCounts(transforms, options={}) {
    let arr = xjs.Array.toArray(options.domain, data_global.common_data)
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
   * @param  {(number|Array<number>|string)=1} options.domain if {number}, use 1–n tracks; if {Array}, use those entries; if {string}, get own property of `data_global.common_data`
   * @param  {boolean=} options.negative if true, generate negative values as well (parallelling positive values)
   */
  generateSpaces(transforms, options={}) {
    const ABBR = {
      0.25: 'q'
    , 0.5 : 'h'
    }
    let arr = xjs.Array.toArray(options.domain, data_global.common_data)
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
    this.values.push(...data_global.types.find((el) => el.name===options.name).values)
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
}

module.exports = PropertySpec
