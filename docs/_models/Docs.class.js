var Page = require('sitepage').Page

module.exports = (function () {
  // CONSTRUCTOR
  /**
   * A set of static members used for the site.
   * Similar to a utility class.
   * @constructor
   */
  function Docs() {}

  // METHODS

  // STATIC MEMBERS
  /**
   * The style guide site for this project.
   * @type {Page}
   */
  Docs.DOCS = new Page({ name: 'Bangs!', url: '/docs/' })
    .title('Bangs! by Chris Harvey')
    .description('Unopinionated, single-responsibility CSS class selectors marked with !important.')
    .add(new Page({ name: 'Bangs!', url: '/docs/index.html' })
      .description('This file lists information about each property and its supported values.')
    )

  /**
   * This project’s data as JSON.
   * @type {Object}
   */
  Docs.DATA = require('../../bangs.json')

  return Docs
})()
