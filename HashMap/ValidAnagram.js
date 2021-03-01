// Given two strings s and t , write a function to determine if t is an anagram of s.
// Problem Link : https://leetcode.com/problems/valid-anagram/

// Anagram are those strings which contains same number of a particular character
// like anagram and nagaram are anagrams

var isAnagram = function(s,t){

    // If both strings having unequal length then they are not anagram.
    if(s.length !== t.length){
        return false;
    }else{

        // creating an array with length 26 because we have constaints that we use only 
        // small alphabetic charaters.
        var countCharacters = new Array(26);

        // filling values depends upon condition
        for(var i = 0;i<s.length;i++){
            countCharacters[s.charCodeAt(i) - 97] = (countCharacters[s.charCodeAt(i) - 97]!==undefined) ? countCharacters[s.charCodeAt(i) - 97] + 1 : 1;
            countCharacters[t.charCodeAt(i) - 97] = (countCharacters[t.charCodeAt(i) - 97]!==undefined) ? countCharacters[t.charCodeAt(i) - 97] - 1 : -1;
        }

        // Getting the count and return respective value
        for (let j = 0; j < countCharacters.length; j++) {
            const count = countCharacters[j];
            if(count !== 0 && count!==undefined){
                return false
            }
        }
        return true;
    }
}

console.log(isAnagram("rat","car"));