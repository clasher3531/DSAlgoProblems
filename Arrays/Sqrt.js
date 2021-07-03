// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Problem link : https://leetcode.com/problems/sqrtx/

var mySqrt = function(x) {
    var s = 0;
    var e = x;
    
    if(x === 1){
        return 1;
    }
    
    while(s<=e){
        var mid = Math.floor((s+e)/2);
        if(mid * mid === x || (e - s === 1)){
            return mid;
        }
        else if((mid * mid) > x){
            e = mid;
        } else{
            s = mid;
        }
    }
};

const x = 8;
var result = mySqrt(x);
console.log(result);