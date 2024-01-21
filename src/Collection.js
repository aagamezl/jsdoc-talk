/**
 * @class
 * @description Represent a collection of items
 * @template Type
 */
export default class Collection {
  /**
   * @type {Type[]}
   * @protected
   */
  items = []

  /**
   * @constructor
   * @param {Type[]} items
   */
  constructor (items) {
    this.items = items
  }

  all () {
    return this.items
  }
}
