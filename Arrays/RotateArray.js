// Given an array, rotate the array to the right by k steps, where k is non-negative.
// LeetCode Problem Link : https://leetcode.com/problems/rotate-array/

// Brute force approach O(k*n)
var shiftElememts = function(nums){

    var lastElement = nums[nums.length - 1];
    for (let i = nums.length-2; i >= 0; i--) {
        const element = nums[i];
        nums[i+1] = element;
    }
    nums[0] = lastElement;
}
var rotateB = function(nums, k) {
    
    var n = k % nums.length;
    for (let i = 0; i < n; i++) {
        shiftElememts(nums)
    }
};

// Optimized Solution by doing reversing an array in O(n) time complexity

var reverseArray = function(array,start,end){

    while (start < end){
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp
        start++;
        end--;
    }
}

var rotate = function(nums,k){
    var n = k % nums.length;
    reverseArray(nums,0,nums.length-1);
    reverseArray(nums,0,n-1);
    reverseArray(nums,n,nums.length-1);
}

var nums = [-1];
rotate(nums,2);
console.log(nums);