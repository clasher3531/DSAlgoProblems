// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// Problem Link : https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {

    // We are saving target - nums[i] into the key and value as i into the variable Map
    var map = {};

    // looping all the elements and finding that nums[i] matches with any key or not
    // if it is matches then return its value
    // else put target - nums[i] into key and i as value
    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]]!=undefined){
            return [map[nums[i]],i];
        }

        map[target - nums[i]] = i;
        
    }
};

console.log(twoSum([2,7,11,15],9));