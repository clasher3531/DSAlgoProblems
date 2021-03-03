// Given a string, find the first non-repeating character in it 
// and return its index. If it doesn't exist, return -1.
// Problem Link : https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function(s) {
    
    // counting the occurence of every character inside the string
    var countCharacter = {};
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        countCharacter[element] = (countCharacter[element]!==undefined) ? countCharacter[element]+1 : 1;
    }

    // looping over the string again for checking for the first number
    // having count = 1
    for (let j = 0; j < s.length; j++) {
        if(countCharacter[s[j]]===1){
            return j;
        }
    }

    return -1;
};

var str = "looping";
var result = firstUniqChar(str);
console.log(result);