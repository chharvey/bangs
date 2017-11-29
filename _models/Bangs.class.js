const Ajv = require('ajv')
const xjs = require('extrajs')

const PropertySpec = require('../class/PropertySpec.class.js')
const GLOBAL       = require('../global-data.json')

const DATA = (function compileData(data) {

  return (function () {
    ;(function () {
      let ajv = new Ajv()
      let is_schema_valid = ajv.validateSchema(require('../bangs.schema.json'))
      if (!is_schema_valid) {
        console.error(ajv.errors)
        throw new Error('Schema is not a valid schema!')
      }
    })()
    data.properties = data.properties.map((propertyspec) => new PropertySpec(propertyspec))
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
})(xjs.Object.cloneDeep(require('../bangs.json')))

/**
 * Static class for this project.
 */
class Bangs {
  /** @private */ constructor() {}

  /**
   * JSON data reused throughout the project.
   * @constant {!Object}
   */
  static get GLOBAL() { return GLOBAL }

  /**
   * This project’s data, compiled from raw JSON.
   * See `/bangs.json` for more information
   * @type {Object}
   */
  static get DATA() { return DATA }

  /**
   * Generate Less from the compiled data.
   * @param  {!Object} property a CSS property JSON object
   */
  static generateLess(property) {
    let supported_media = Bangs.GLOBAL.media.filter((m) => !(property.non_media || []).includes(m.name))
    let supported_pseudos = Bangs.GLOBAL.pseudo.filter((p) => (property.pseudo || []).includes(p.name))

    /**
     * Output multiple CSS rulesets corresponding to a set of values.
     * @return {string} multiple rulesets concatenated into a string
     */
    function output() {
      let rulesets = []
      Bangs.GLOBAL.values.concat(property.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code] // use this if cannot find value.code (shant, as it’s required) // || Bangs.GLOBAL.values.find((v) => v.name===value.name).code
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
              let val_code = Bangs.GLOBAL.values.find((v) => v.name===(
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
      Bangs.GLOBAL.values.concat(property.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code]
        let selector = codes_arr.map((c) => `.-${property.code}-${c}-${suffix}`).join(', ')
        let rules = `.-${property.code}-${codes_arr[0]};`
        rulesets.push(`${selector} { ${rules} }`)
      })
      return `
        @media ${Bangs.GLOBAL.media.find((m) => m.code===suffix).query} {
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
      Bangs.GLOBAL.values.concat(property.values).forEach(function (value) {
        let codes_arr = (Array.isArray(value.code)) ? value.code : [value.code]
        let selector = codes_arr.map((c) => `.-${property.code}-${c}-${suffix}`).join(', ')
        let less_parent = Bangs.GLOBAL.pseudo.find((p) => p.code===suffix).selectors.map((s) => `&${s}`).join(', ')
        let rules = `.-${property.code}-${codes_arr[0]};`
        rulesets.push(`${selector} { ${less_parent} { ${rules} } }`)
      })
      return rulesets.join('\n')
    }

    return output()
      + supported_media.map((m) => m.code).map(atRule).join('')
      + supported_pseudos.map((p) => p.code).map(pseudoClass).join('')
  }
}

module.exports = Bangs
