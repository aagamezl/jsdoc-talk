/**
 * Generic identity function that returns the same argument.
 *
 * @function
 * @template Type
 * @param {Type} arg - The argument of any type.
 * @returns {Promise<Type>} - The same argument passed to the function.
 */
const selfResolved = (arg) => {
  return Promise.resolve(arg)
}

const stringData = selfResolved('asas')
const numberData = selfResolved(123)
