/**  
 Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

    Only the space character ' ' is considered as whitespace character.
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var started = false; // has reached a number or +/-
    var result = ""; // string version of number

    for (i=0; i<str.length; i++) {
        var curChar = str.charAt(i);

        if (started) {
            if (curChar != ' ' && !isNaN(Number(curChar))) { // is number
                result += curChar;
            } else { // not a number, end
                break;
            }
        } else {
            if (curChar == ' ') {
                continue;
            } else if (curChar == '+' || curChar == '-' || !isNaN(Number(curChar))) { // valid char
                started = true;
                result = curChar;
            } else {
                return 0;
            }
        }
    }

    var num = Number(result);
    if (isNaN(num)) {
        num = 0;
    }

    var max = Math.pow(2, 31) - 1;
    var min = -( Math.pow(2, 31) );

    // test min max bounds
    if (num > max ) {
        return max;
    } else if (num < min) {
        return min;
    } else {
        return num;
    }
};
