// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Problem Link : https://leetcode.com/problems/detect-capital/

var detectCapitalUse = function(word) {
    var n = word.length;
    if(n===1){
        return true;
    }
    var category = 0;
    var firstCharacterCode = word.charCodeAt(0);
    if(firstCharacterCode >= 65 && firstCharacterCode <= 90){
        var secondCharacterCode = word.charCodeAt(1);
        if(secondCharacterCode >= 65 && secondCharacterCode <= 90){
            category = 1;
        }else{
            category = 3
        }
    }else{
        category = 2;
    }
    for(var i=1; i<n; i++){
        var elementToCheck = word.charCodeAt(i);
        if(category === 1){
            if(!(elementToCheck >= 65 && elementToCheck <= 90)){
                return false;
            }
        }else if(category === 2){
            if(elementToCheck >= 65 && elementToCheck <= 90){
                return false;
            }
        }else{
            if(elementToCheck >= 65 && elementToCheck <= 90){
                return false;
            }
        }
    }
    return true;
};