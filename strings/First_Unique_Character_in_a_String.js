/**
 First Unique Character in a String

 Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */


var firstUniqChar = function(s) {
  var processed = [];

    for(i=0; i<s.length; i++) {
      var curChar = s.charAt(i);

       if (s.length == 1) {
         return 0;
       }
        if ( s.indexOf(curChar, i+1) == -1 &&
             processed.indexOf(curChar) == -1) {
            return i;
        }

      processed.push(curChar);
    }
    return -1;
};
