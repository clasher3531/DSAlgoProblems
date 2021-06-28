// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Problem Link : https://leetcode.com/problems/sort-colors/

// Approach is simple, we basically iterate over all element keeping track of that if element is zero
// then we will move it to the start and if element is two then we will move it to the end;


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const n = nums.length;
    var zeroPos = 0;
    var twoPos = n-1;
    
    if(zeroPos === twoPos){
        return;
    }else{
        var i = 0;
        while(i < n && i <= twoPos){
            if(nums[i] === 0){
                if(i === zeroPos){
                    i++;
                    zeroPos++;
                }else{
                    nums[i] = nums[zeroPos];
                    nums[zeroPos] = 0;
                    zeroPos++;
                }
            }else{
                if(nums[i] === 2){
                    nums[i] = nums[twoPos];
                    nums[twoPos] = 2;
                    twoPos--;
                }else{
                    i++;
                }
            }
        }
    }
};