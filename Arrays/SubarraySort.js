// Given an integer array nums, you need to find one continuous subarray that if you only sort 
// this subarray in ascending order, then the whole array will be sorted in ascending order.
// Return the shortest such subarray and output its length.

// Problem Link : https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

// Solution in O(N) time complexity with O(N) space complexity
var findUnsortedSubarray = function(nums) {
    const n = nums.length;
    var result = [];
    
    // finding Max of Left array and Min of right array
    var Larray = [], Rarray = [];
    Larray[0] = nums[0];
    Rarray[n-1] = nums[n-1];
    for(var i = 1; i < n; i++){
        Larray[i] = Math.max(Larray[i-1],nums[i-1]);
        Rarray[n-i-1] = Math.min(Rarray[n-i],nums[n-i]);
    }
    
    // Is the element at ith position is at its correct position if not then push it the index
    // of that element into result array.
    for(var j = 0; j < n; j++){
        if(nums[j] >= Larray[j] && nums[j] <= Rarray[j]){
            continue;
        }else{
            result.push(j);
        }
    }

    // result array length is 0 then return 0 else finding the length
    if(result.length === 0){
        return 0
    }else{
        return result[result.length - 1] - result[0] + 1
    }
};

// Solution in O(N) time complexity with O(1) space complexity
var outOfOrder = function(nums,i){
    var x = nums[i];
    if(i===0){
        return x > nums[1]
    }
    if(i === nums.length -1){
        return x < nums[i-1]
    }
    return x > nums[i+1] || x < nums[i-1];
}
var sortedSubarray = function(nums) {
    const n = nums.length;
    var result = [];
    
    var shortest = Number.POSITIVE_INFINITY;
    var largest = Number.NEGATIVE_INFINITY;
    
    for(var i = 0; i < n; i++){
        if(outOfOrder(nums,i)){
            shortest = Math.min(nums[i],shortest);
            largest = Math.max(nums[i],largest);
        }
    }
    
    if(shortest === Number.POSITIVE_INFINITY){
        return 0;
    }
    
    var left = 0;
    while(shortest >= nums[left]){
        left++;
    }
    
    var right = nums.length - 1;
    while(largest <= nums[right]){
        right--;
    }
    
    return right - left + 1
};