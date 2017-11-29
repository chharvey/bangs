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
    data = data.map((propertyspec) => new PropertySpec(propertyspec))
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
}

module.exports = Bangs
