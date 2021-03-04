// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// problem link : https://leetcode.com/problems/happy-number/

var calculateSumSquare = function (s) {

    var sum = 0;
    for (let i = 0; i < s.length; i++) {
        const digit = parseInt(s[i]);
        sum = sum + (digit*digit);
    }
    return sum;
};

var isHappy = function(n) {
    
    var map = {
        "4" : true,"16" : true,"37" : true,"58" : true,"89" : true, "145" : true,"42" : true,"20" : true
    }
    if(n===1){
        return true
    }
    var str = n.toString();
    var occurence = {};
    while(true){
        if(str === "1"){
            return true
        }
        else if(map[str] || occurence[str]){
            return false
        }
        occurence[str] = true;
        str = (calculateSumSquare(str)).toString();
    }
};