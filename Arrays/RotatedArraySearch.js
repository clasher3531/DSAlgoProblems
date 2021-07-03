// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that 
// the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// problem link : https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {
    var s = 0, e = nums.length - 1;
    
    while(s<=e){
        var mid = Math.floor((s+e)/2);
        if(nums[mid] === target){
            return mid
        }
        
        if(nums[s] <= nums[mid]){
            
            if(target >= nums[s] && target <= nums[mid]){
                e = mid - 1;
            }else{
                s = mid + 1;
            }
            
        }else{
            
            if(target <= nums[e] && target >= nums[mid]){
                s = mid + 1;
            }else{
                e = mid - 1;
            }
        }
    }
    
    return -1;
};

const nums = [4,5,6,7,0,1,2];
const target = 0;
var result = search(nums, target);
console.log(result);