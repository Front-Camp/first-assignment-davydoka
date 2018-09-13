/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  /* your logic here...*/
  var res = '';
  if (length > str.length) return str;
  if (str.length == 0) return '';

  for (var i = 0; i<(length-replacer.length); i++) {
    res = res + str[i];
  }
  return res + replacer;
};

export default truncate;
