import { isArray, isObject, isNumber } from "./validations/validate.js";

// Factorial of all numbers in a given array
function factorial(value) {
  if (!value) {
    throw new Error("You must provide a value to this function.");
  }
  //check given value is array or not
  if (isArray(value)) {
    let ans = [];
    for (let i = 0; i < value.length; i++) {
      if (isNumber(value[i])) {
        ans.push(numFactorial(value[i]));
      } else {
        ans.push(value[i]);
      }
    }
    return ans;
  }

  //Check given value is object or not

  if (isObject(value)) {
    for (let num in value) {
      if (value.hasOwnProperty(num) && isNumber(num)) {
        value[num] = numFactorial(num);
      }
    }
    return value;
  }

  if (isNumber(value)) {
    return numFactorial(value);
  } else {
    return value;
  }

  function numFactorial(num) {
    if (num == 1) {
      return 1;
    }
    return num * numFactorial(num - 1);
  }
}

// Square root of all numbers in a given array

function square(arr) {
  return arr.map(num => num * num);
}

console.log(factorial());
