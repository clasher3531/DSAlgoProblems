// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Problem link : https://leetcode.com/problems/permutations/


var swap = function(nums, f, s){
    var temp = nums[f];
    nums[f] = nums[s];
    nums[s] = temp;
}

var permutation = function(nums, i, N, result) {
    
    // base case
    if(i === N){
        result.push(nums.slice());
        return;
    }
    
    // rec case
    for(var j = i; j < N; j++){
        swap(nums,i,j);
        permutation(nums, i+1, N, result);
        swap(nums,i,j);
    }
}

var permute = function(nums) {
    var result = [];
    permutation(nums, 0, nums.length, result);
    return result;
};

const nums = [1,2];
var ans = permute(nums);
console.log(ans);