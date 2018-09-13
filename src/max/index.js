/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /* your logic here...*/
  var maxV, j = false;
  for (var i=0; i<arr.length; i++) {
          if (!j && isFinite(arr[i])) {
            maxV = arr[i];
            j = true;
          }

          if(isFinite(arr[i]) && arr[i] > maxV) {
            maxV = arr[i];
          }
  }
  return maxV;
};

export default max;
