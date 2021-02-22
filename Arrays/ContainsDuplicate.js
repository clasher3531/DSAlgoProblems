// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, 
// and it should return false if every element is distinct.

// LeetCode Problem Link : https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {

    // Saving the value into the javascript object
    // looping all over the array if the value inside the javascript object then return true
    // else we put the ith value into the object.
    var map = {};

    for (let i = 0; i < nums.length; i++) {
        
        if(map[nums[i]]!==undefined){
            return true;
        }
        else{
            map[nums[i]] = 1;
        }
        
    }
    return false;
};