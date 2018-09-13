/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  var res = '';
  for (var i=str.length; i>=0; i-- ) {

    res = res + str[i];
  }
  return res;
  }
};

export default turnMeBaby;
