module.exports = (function () {
  /**
   * Helper methods.
   * @constructor
   */
  function Util() {}

  /**
   * Deep freeze an object, and return the result.
   * Recursively call `Object.freeze()` on every property and sub-property of the given parameter.
   * @param  {(Object|Array)} obj any object or array to freeze
   * @return {(Object|Array)} the returned object or array, with everything frozen
   */
  Util.freezeDeep = function freezeDeep(obj) {
    Object.freeze(obj)
    if (Array.isArray(obj)) {
      for (let val of obj) {
        if (!Object.isFrozen(val)) Util.freezeDeep(val)
      }
    } else if (typeof obj === 'object') {
      for (let key in obj) {
        if (!Object.isFrozen(obj[key])) Util.freezeDeep(obj[key])
      }
    }
    return obj
  }

  /**
   * Deep clone an object, and return the result.
   * This method is recursively called, cloning properties and sub-properties of the given parameter.
   * The returned result is an object seemingly identical to the given parameter, except that
   * corresponding properties are not "equal" in the sense of `==` or `===`, unless they are primitive values.
   *
   * This method provides a deeper clone than `Object.assign()`: whereas `Object.assign()` only
   * copies the top-level properties, this method recursively clones into all sub-levels.
   *
   * // Example:
   * var x = { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * // Object.assign x into y
   * var y = Object.assign({}, x) // returns { first: x.first, second: x.second, third: x.third }
   *
   * // you can reassign properties of `y` without affecting `x`:
   * y.first  = 'one'
   * y.second = 2
   * console.log(y) // returns { first: 'one', second: 2, third: x.third }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * // however you cannot mutate properties of `y` without affecting `x`
   * y.third[0]    = 'one'
   * y.third[1]    = 2
   * y.third[2].v  = [3]
   * console.log(y) // returns { first: 'one', second: 2, third: ['one', 2, { v:[3] }] }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: ['one', 2, { v:[3] }] }
   *
   * // Util.cloneDeep x into y
   * var z = Util.cloneDeep(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', {v:3}] }
   *
   * // as with Object.assign, you can reassign properties of `z` without affecting `x`:
   * z.first  = 'one'
   * z.second = 2
   * console.log(z) // returns { first: 'one', second: 2, third: [1, '2', {v:3}] }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * // but unlike Object.assign, you can mutate properties of `z` without affectting `x`:
   * z.third[0]    = 'one'
   * z.third[1]    = 2
   * z.third[2].v  = [3]
   * console.log(z) // returns { first: 'one', second: 2, third: ['one', 2, { v:[3] }] }
   * console.log(x) // returns { first: 1, second: { value: 2 }, third: [1, '2', { v:3 }] }
   *
   * @param  {*} obj any value to clone
   * @return {*} an exact copy of the given value, but with nothing equal via `==` (unless the value given is primitive)
   */
  Util.cloneDeep = function cloneDeep(obj) {
    let result;
    if (Array.isArray(obj)) {
      result = []
      for (let val of obj) {
        result.push(Util.cloneDeep(val))
      }
    } else if (typeof obj === 'object' && obj !== null) {
      result = {}
      for (let key in obj) {
        result[key] = Util.cloneDeep(obj[key])
      }
    } else {
      result = obj
    }
    return result
  }

  return Util
})()
