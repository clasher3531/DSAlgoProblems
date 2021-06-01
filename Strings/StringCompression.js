// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
//      If the group's length is 1, append the character to s.
//      Otherwise, append the character followed by the group's length.
//      The compressed string s should not be returned separately, but instead be stored in the input character array chars.
// Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.

// Problem Link : https://leetcode.com/problems/string-compression/

var compress = function(chars) {
    var n = chars.length;
    if(n === 1){
        return 1;
    }
    var count = 1;
    var valueOfFirstPointer = chars[0];
    var positionOfFirstPointer = 0;
    var valueOfSecondPointer = chars[0];
    
    for(var i = 1;i < n; i++){
        valueOfSecondPointer = chars[i];
        if(valueOfFirstPointer === valueOfSecondPointer){
            count++;
        }else{
            if(count > 1){
                var stringValueOfCount = count.toString();
                var lengthOfStringCount = stringValueOfCount.length;
                for(var j = 0; j < lengthOfStringCount; j++){
                    chars[positionOfFirstPointer + j + 1] = stringValueOfCount.charAt(j)
                }
                chars[positionOfFirstPointer + lengthOfStringCount + 1] = valueOfSecondPointer;
                valueOfFirstPointer = valueOfSecondPointer
                positionOfFirstPointer = positionOfFirstPointer + lengthOfStringCount + 1;
                count = 1;
            } else {
                chars[positionOfFirstPointer + 1] = valueOfSecondPointer;
                valueOfFirstPointer = valueOfSecondPointer;
                positionOfFirstPointer++;
                count = 1;
            }
        }
    }
    
    if(count > 1){
        var stringValueOfCount = count.toString();
        var lengthOfStringCount = stringValueOfCount.length;
        for(var j = 0; j < lengthOfStringCount; j++){
            chars[positionOfFirstPointer + j + 1] = stringValueOfCount.charAt(j)
        }
        positionOfFirstPointer = positionOfFirstPointer + lengthOfStringCount + 1;
        return positionOfFirstPointer;
    }
    return positionOfFirstPointer + 1;
};