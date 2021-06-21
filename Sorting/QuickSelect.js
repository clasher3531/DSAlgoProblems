// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Problem link : https://leetcode.com/problems/kth-largest-element-in-an-array/

var partition = function(nums,l,r){
    var pivot = nums[r];
    var  i = l-1;
    for(var j = l; j < r; j++){
        if(nums[j] < pivot){
            i++;
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    
    var tempo = nums[i+1];
    nums[i+1] = nums[r];
    nums[r] = tempo;
    
    return i+1;
}

var quickSelect = function(nums,l,r,k){
    var p = partition(nums,l,r);
    if(p===k){
        return nums[p];
    }else if(p > k){
        return quickSelect(nums,l,p-1,k);
    }else{
        return quickSelect(nums,p+1,r,k);
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var n = nums.length;
    return quickSelect(nums,0,n-1,n-k);
};

var nums = [2,3,4,1,6,7];
const k = 2;
var result = findKthLargest(nums,k);
console.log(result);