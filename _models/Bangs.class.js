const Ajv = require('ajv')
const xjs = require('extrajs')

const PropertySpec = require('../class/PropertySpec.class.js')
const GLOBAL       = require('../global-data.json')

const DATA = (function (raw_data) {
  const SCHEMA = (function (raw_schema) {
      let ajv = new Ajv()
      let is_schema_valid = ajv.validateSchema(raw_schema)
      if (!is_schema_valid) {
        console.error(ajv.errors)
        throw new Error('Schema is not a valid schema!')
      }
      return raw_schema
  })(require('../bangs.schema.json'))
      let ajv = new Ajv()
      let is_data_valid = ajv.validate(SCHEMA, raw_data)
      if (!is_data_valid) {
        console.error(ajv.errors)
        throw new Error('Data does not valiate against schema!')
      }
      return raw_data.map((propertyspec) => new PropertySpec(propertyspec))
})(require('../bangs.json'))

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
   * @constant {!Object}
   */
  static get DATA() { return DATA }
}

module.exports = Bangs
