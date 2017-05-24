module.exports = (function () {
  /**
   * Helper methods.
   * @constructor
   */
  function Util() {}

  /**
   * Return the type of a thing.
   * Similar to the `typeof` primitive operator, but more refined.
   *
   * NOTE! passing undeclared variables will throw a `ReferenceError`!
   * ```
   * var x;          // declare `x`
   * typeof x;       // 'undefined'
   * typeof y;       // 'undefined'
   * Util.typeOf(x); // 'undefined'
   * Util.typeOf(y); // Uncaught ReferenceError: y is not defined
   * ```
   * Credit to @zaggino.
   *
   * @see https://github.com/zaggino/z-schema/blob/bddb0b25daa0c96119e84b121d7306b1a7871594/src/Utils.js#L12
   * @param  {*} thing anything
   * @return {string} the type of the thing
   */
  Util.typeOf = function typeOf(thing) {
    var type = typeof thing
    if (type === 'object') {
      if (thing === null)       return 'null'
      if (Array.isArray(thing)) return 'array'
      return type // 'object'
    }
    if (type === 'number') {
      if (Number.isNaN(thing))     return 'NaN'
      if (!Number.isFinite(thing)) return 'infinite'
      return type // 'number'
    }
    return type // 'undefined', 'boolean', 'string', 'function'
  }

  /**
   * Specify the type of number given.
   * If the number is finite, return one of the following strings:
   * - `'integer'` : the number is an integer, that is, `num % 1 === 0`
   * - `'float'`   : the number is not an integer
   * Else, throw a RangeError (the argument is of the correct type but does not qualify).
   * @param  {number} num the given number
   * @return {string} one of the strings described above
   */
  Util.typeOfNumber = function typeOfNumber(num) {
    if (Util.typeOf(num) === 'number') {
      return (Number.isInteger(num)) ? 'integer' : 'float'
    } else throw new RangeError('The number is not finite.')
  }

  /**
   * Deep freeze an object, and return the result.
   * If an array or object is passed,
   * Recursively call `Object.freeze()` on every property and sub-property of the given parameter.
   * Else, return the given argument.
   * @param  {*} thing any value to freeze
   * @return {*} the returned value, with everything frozen
   */
  Util.freezeDeep = function freezeDeep(thing) {
    Object.freeze(thing)
    if (Util.typeOf(thing) === 'array') {
      for (let val of thing) {
        if (!Object.isFrozen(val)) Util.freezeDeep(val)
      }
    } else if (Util.typeOf(thing) === 'object') {
      for (let key in thing) {
        if (!Object.isFrozen(thing[key])) Util.freezeDeep(thing[key])
      }
    }
    return thing
  }

  /**
   * Deep clone an object, and return the result.
   * If an array or object is passed,
   * This method is recursively called, cloning properties and sub-properties of the given parameter.
   * The returned result is an object seemingly identical to the given parameter, except that
   * corresponding properties are not "equal" in the sense of `==` or `===`, unless they are primitive values.
   * Else, the original argument is returned.
   *
   * This method provides a deeper clone than `Object.assign()`: whereas `Object.assign()` only
   * copies the top-level properties, this method recursively clones into all sub-levels.
   *
   * // ==== Example ====
   * var x = { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * // Object.assign x into y:
   * var y = Object.assign({}, x) // returns { first: x.first, second: x.second, third: x.third }
   *
   * // you can reassign properties of `y` without affecting `x`:
   * y.first  = 'one'
   * y.second = 2
   * console.log(y) // returns { first: 'one', second: 2, third: x.third }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * // however you cannot mutate properties of `y` without affecting `x`:
   * y.third[0]    = 'one'
   * y.third[1]    = 2
   * y.third[2].v  = [3]
   * console.log(y) // returns { first: 'one', second: 2, third: ['one', 2, { v:[3] }] }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: ['one', 2, { v:[3] }] }
   *
   * // Util.cloneDeep x into y:
   * var z = Util.cloneDeep(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', {v:3}] }
   *
   * // as with Object.assign, you can reassign properties of `z` without affecting `x`:
   * z.first  = 'one'
   * z.second = 2
   * console.log(z) // returns { first: 'one', second: 2, third: [1, '2', {v:3}] }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * // but unlike Object.assign, you can mutate properties of `z` without affecting `x`:
   * z.third[0]    = 'one'
   * z.third[1]    = 2
   * z.third[2].v  = [3]
   * console.log(z) // returns { first: 'one', second: 2, third: ['one', 2, { v:[3] }] }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * @param  {*} obj any value to clone
   * @return {*} an exact copy of the given value, but with nothing equal via `==` (unless the value given is primitive)
   */
  Util.cloneDeep = function cloneDeep(thing) {
    let result;
    if (Util.typeOf(thing) === 'array') {
      result = []
      for (let val of thing) {
        result.push(Util.cloneDeep(val))
      }
    } else if (Util.typeOf(thing) === 'object') {
      result = {}
      for (let key in thing) {
        result[key] = Util.cloneDeep(thing[key])
      }
    } else {
      result = thing
    }
    return result
  }

  /**
   * “Convert” an array, number, or string into an array. (Doesn’t really convert.)
   * - If the argument is an array, it is returned unchanged.
   * - If the argument is a number `n`, an array of length `n`, filled with increasing integers,
   *   starting with 1, is returned. (E.g. if `n===5` then `[1,2,3,4,5]` is returned.)
   * - If the argument is a string, that string is checked as an **own property** of the given database.
   *   If the value of that property *is* a string, then *that* string is checked, and so on,
   *   until an array or number is found. If no entry is found, an empty array is returned.
   * @param  {(number|Array|string)} arg the argument to convert
   * @param  {!Object={}} database a database to check against
   * @return {Array} an array
   */
  Util.arrayify = function arrayify(arg, database={}) {
    if (Util.typeOf(arg) === 'array') {
      return arg
    } else if (Util.typeOf(arg) === 'number') {
      let array = []
      for (let n = 1; n <= arg; n++) { array.push(n) }
      return array
    } else if (Util.typeOf(arg) === 'string') {
      return Util.arrayify(database[arg], database)
    } else {
      return []
    }
  }

  return Util
})()
