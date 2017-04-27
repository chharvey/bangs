module.exports = (function () {
  /**
   * A set of static members used for the site.
   * Similar to a utility class.
   * @constructor
   */
  function Bangs() {}

  /**
   * This project’s data as JSON.
   * @type {Object}
   */
  Bangs.DATA = require('../bangs.json')

  /**
   * Automate track percentages.
   * @param  {string} prop abbreviation for css property
   * @param  {function(number)=string} mixin function outputting the css value
   * @param  {Function} callback callback function to call after execution. standard callback params.
   */
  Bangs.generateTrackPercentsAsync = function generatePercentsAsync(prop, mixin, callback) {
    /**
     * Return a media query containing rulesets.
     * If no suffix is given, the media query will be ommitted (equivalent to `@media all`).
     * @param  {string=''} suffix media query code, e.g. ('-sK')
     * @return {string} complete css media query as a string
     */
    function media(suffix) {
      suffix = suffix || ''
      const DENOMS = Bangs.DATA.global.common.tracks
      let unique_values = []
      let rulesets = []
      for (let i = 0; i < DENOMS.length; i++) {
        for (let j = 1; j <= DENOMS[i]; j++) {
          let fraction = j/DENOMS[i]
          let classname = `.-${prop}-${j}o${DENOMS[i]}${(suffix) ? `-${suffix}` : ''}`
          let selector = unique_values.find(function (el) { return el.value === fraction })
          if (selector) {
            selector.classes.push(classname)
          } else {
            unique_values.push({ value: fraction, classes: [classname] })
          }
        }
      }
      for (let selector of unique_values) {
        let rule = (suffix) ? selector.classes[0].split('-').slice(0,-1).join('-') : `${mixin.call(null, selector.value)} !important`
        rulesets.push(`${selector.classes.join(', ')} { ${rule}; }`)
      }
      return (suffix) ? `
        @media ${Bangs.DATA.global.media.find(function (el) { return el.code === suffix}).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }
    try {
      callback.call(null, null, [''].concat(Bangs.DATA.global.media.map(function (el) { return el.code })).map(media).join(''))
    } catch (e) {
      callback.call(null, e, null)
    }
  }

  /**
   * Automate track counts (column-count, grid-template-columns, etc).
   * @param  {string} prop abbreviation for css property
   * @param  {function(number)=string} mixin function outputting the css value
   * @param  {Function} callback callback function to call after execution. standard callback params.
   */
  Bangs.generateTrackCountsAsync = function generateCountsAsync(prop, mixin, callback) {
    /**
     * Return a media query containing rulesets.
     * If no suffix is given, the media query will be ommitted (equivalent to `@media all`).
     * @param  {string=''} suffix media query code, e.g. ('-sK')
     * @return {string} complete css media query as a string
     */
    function media(suffix) {
      suffix = suffix || ''
      const DENOMS = Bangs.DATA.global.common.tracks
      let rulesets = []
      for (let i = 0; i < DENOMS.length; i++) {
        let classname = `.-${prop}-${DENOMS[i]}${(suffix) ? `-${suffix}` : ''}`
        let rule = (suffix) ? classname.split('-').slice(0,-1).join('-') : `${mixin.call(null, DENOMS[i])} !important`
        rulesets.push(`${classname} { ${rule}; }`)
      }
      return (suffix) ? `
        @media ${Bangs.DATA.global.media.find(function (el) { return el.code === suffix}).query} {
          ${rulesets.join('\n')}
        }
      ` : rulesets.join('\n')
    }
    try {
      callback.call(null, null, [''].concat(Bangs.DATA.global.media.map(function (el) { return el.code })).map(media).join(''))
    } catch (e) {
      callback.call(null, e, null)
    }
  }

  return Bangs
})()