function isObject(obj) {
  return obj && typeof obj === "object" && obj.constructor === Object;
}

function isArray(arr) {
  return arr.constructor === Array;
}

function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

export default { isObject, isArray, isNumber };
