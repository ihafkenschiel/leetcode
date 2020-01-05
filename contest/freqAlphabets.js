/**
5303. Decrypt String from Alphabet to Integer Mapping

    User Accepted: 1
    User Tried: 5
    Total Accepted: 1
    Total Submissions: 5
    Difficulty: Easy

Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

    Characters ('a' to 'i') are represented by ('1' to '9') respectively.
    Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.



Example 1:

Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:

Input: s = "1326#"
Output: "acz"

Example 3:

Input: s = "25#"
Output: "y"

Example 4:

Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
Output: "abcdefghijklmnopqrstuvwxyz"



Constraints:

    1 <= s.length <= 1000
    s[i] only contains digits letters ('0'-'9') and '#' letter.
    s will be valid string such that mapping is always possible.


*/
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  var str = "";

  // go backwards through array and take 1 at a time
  // if #, then take 2
  for (j=s.length-1; j>=0; j--) {
    var cur = s.charAt(j);
    var numCur = Number(cur);
    console.log(cur);

    if (cur == "#") {
      var second = s.charAt(j-1);
      var first = s.charAt(j-2);
      var num = first + second;
      console.log(num);
      str = String.fromCharCode(96 + Number( num )) + str;
      j -= 2;
    } else if ( numCur >= 1 && numCur <= 9) {
      str = String.fromCharCode(96 + numCur) + str;
    }
  }


    return str;
};

document.write(freqAlphabets("1326#"));
