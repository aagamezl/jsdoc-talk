/** @type {string | number} */
// TypeScript: let id: string | number '123456789'
let id = '123456789'
id = 123456789

// TypeScript: import Collection from './Collection.ts'
/** @typedef {import('./Collection.js').default<string>} StringCollection */
/** @typedef {import('./Collection.js').default<number>} NumberCollection */

/*
TypeScript:

interface Pagination {
  items: Collection;
  total: number;
  perPage: number;
  currentPage: number;
  options: unknown[];
}

type Pagination = {
  items: Collection;
  total: number;
  perPage: number;
  currentPage: number;
  options: unknown[];
}
*/

/**
 * @typedef {Object} Pagination
 * @property {StringCollection} items - The collection of items for the current page.
 * @property {number} total - The total number of items across all pages.
 * @property {number} perPage - The number of items per page.
 * @property {number} currentPage - The current page number.
 * @property {unknown[]} options - Additional options for pagination.
 */

/*
TypeScript enum

const enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
*/

/**
 * @readonly
 * @enum {number}
 * @description Enumeration representing directions.
 * @readonly
 * @property {number} Up - The Up direction with a value of 1.
 * @property {number} Down - The Down direction with an automatically assigned value (2 in this case).
 * @property {number} Left - The Left direction with an automatically assigned value.
 * @property {number} Right - The Right direction with an automatically assigned value.
 */
const Direction = {
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4
}

/*
TypeScript Intersaction Types

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
*/

/**
 * @typedef {Object} Colorful
 * @property {string} color - The color property representing a color.
 * @description Interface for objects with a color property.
 */

/**
 * @typedef {Object} Circle
 * @property {number} radius - The radius property representing the radius of a circle.
 * @description Interface for objects with a radius property.
 */

/**
 * @typedef {Colorful & Circle} ColorfulCircle
 * @description Represents an object combining properties of Colorful and Circle.
 */

/** @type {ColorfulCircle} */
const circle = { color: 'blue', radius: 42 }
