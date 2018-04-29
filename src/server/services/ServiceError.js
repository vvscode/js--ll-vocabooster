/**
 * ServiceError
 *
 * @param {(Object|String)} params
 * @param {string} [params.message]
 * @param {integer} [params.code]
 * @param {*} [params.extra]
 *
 * @constructor
 */
export default function ServiceError(params) {
  let p = params;
  if (typeof params === 'string') {
    p = {};
    p.message = params;
  }
  this.name = this.constructor.name;
  this.code = p.code || undefined;
  this.message = p.message;
  this.extra = p.extra || undefined;
  // todo: think about the necessity of the stack (available in browser)
  this.stack = new Error().stack;
}

ServiceError.prototype = Object.create(Error.prototype);
ServiceError.prototype.constructor = ServiceError;
