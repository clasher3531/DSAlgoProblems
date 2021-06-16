// Given an array of integers nums and an integer k, 
// return the total number of continuous subarrays whose sum equals to k.

// Problem Link : https://leetcode.com/problems/subarray-sum-equals-k/

// The idea behind this approach is as follows: If the cumulative sum(represented by sum[i]sum[i] for sum up to i^{th} ith
// index) up to two indices is the same, the sum of the elements lying in between those indices is zero. 
// Extending the same thought further, if the cumulative sum up to two indices, say ii and jj is at a difference of kk i.e.
// if sum[i] - sum[j] = ksum[i]−sum[j]=k, the sum of elements lying between indices ii and jj is kk.

var subarraySum = function(nums, k) {
    var n = nums.length;
    var curr_sum = 0;
    var map = {};
    var count = 0;
    map[0] = 1;
    for(var i = 0; i < n; i++){
        curr_sum += nums[i];
        if(map[curr_sum - k]){
            count += map[curr_sum - k];
        }
        map[curr_sum] = (map[curr_sum] || 0) + 1;
    }
    return count;
};

var areas = [10, 2, -2, -20, 10];
const K = -10;
var result = subarraySum(areas,K);
console.log(result);