// Given an integer array nums, return an array answer such that answer[i] is equal to the product 
// of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation

// Problem Link : https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function(nums) {
    
    var n = nums.length;
    var result = new Array(n);
    
    // calculate left product of ith element and store into result array
    var multiplication = 1;
    for(var i = 0; i<n; i++){
        result[i] = multiplication;
        multiplication *= nums[i];
    }
    
    // calculate right product of ith element and also multiply with left product's ith element
    multiplication = 1;
    for(var j = n-1; j>=0; j--){
        result[j] *= multiplication
        multiplication *= nums[j]
    }
    
    return result;
};

var nums = [1,2,3,4,5];
var result = productExceptSelf(nums);
console.log(result);