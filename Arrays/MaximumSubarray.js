// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum and return its sum.
// Problem Link : https://leetcode.com/problems/maximum-subarray/description/

var maxSubArray = function(nums) {

    // If nothing inside the nums then we will return 0
    if(nums.length===0){
        return 0;
    }
    else{

        // Two variable we are creating maxSum is for saving our result i.e MaxSum of Subarray
        // another one is keep tracking of the sum.
        // Looping all over the array if the sum is negative then it will always decrease
        // our result so we will always add the sum with the next element when it will be
        // positive else we will make sum as our next value.
        // lastly we compare both the variale value and get the max one and assign it to
        // our maxSum variable.
        
        var maxSum = nums[0];
        var Sum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            
            if(Sum < 0){
                Sum = nums[i];
            }
            else {
                Sum += nums[i];
            }

            maxSum = Math.max(maxSum,Sum);
        }
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));