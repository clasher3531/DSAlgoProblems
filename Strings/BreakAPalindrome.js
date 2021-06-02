// Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter 
// so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.
// Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string.
// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, 
// a has a character strictly smaller than the corresponding character in b. For example, "abcc" is lexicographically smaller than "abcd" because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.

// Problem Link : https://leetcode.com/problems/break-a-palindrome/

var breakPalindrome = function(palindrome) {
    var charArray = palindrome.split('');
    var n = charArray.length;
    for(var i = 0; i < Math.floor(n/2); i++){
        if(charArray[i] !== 'a'){
            charArray[i] = 'a';
            return charArray.join('')
        }
    }
    charArray[n-1] = 'b';
    return n < 2 ? '' : charArray.join('');
};

var palindrome = 'aba';
var result = breakPalindrome(palindrome);
console.log(result);