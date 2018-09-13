/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
  /* your logic here...*/
  //if ((typeof data === "object") && (data !== null) && (!isArray(data))) return true;
  if (Object.prototype.toString.call(data) === "[object Object]") return true;

  return false;
};

export default isObject;
