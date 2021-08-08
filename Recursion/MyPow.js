// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// problem link : https://leetcode.com/problems/powx-n/

var myPow = function(x, n) {

    // base case
    if(n === 0){
        return 1;
    }
    var pow = Math.abs(n);

    // rec case
    var result = (pow % 2 === 0) ? myPow(x*x,pow/2) : x * myPow(x*x,(pow-1)/2);
    if(n < 0){
        return 1/result;
    }else{
        return result;
    }
};