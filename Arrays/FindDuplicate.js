// Given an array of integers nums containing n + 1 integers where each integer is in the 
// range [1, n] inclusive.
//There is only one repeated number in nums, return this repeated number.
// Problem Link : https://leetcode.com/problems/find-the-duplicate-number/

// Here Iam using the Floyd's algorithm to solve this problem in O(n) time complexity and 
// O(1) space complexity

// Looking into the array we noticed that there is a cycle and the entry point for the cycle
// is the number which is duplicate so we need to find the entry point for the cycle

var findDuplicate = function(nums) {

    // We created two pointers one is tortoise and another one is hare
    // Actually tortoise will move half the speed of the hare
    // Here we firstly find the first point of intersection of both the pointers
    var tortoise = nums[0];
    var hare = nums[0];
    do {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
    } while (tortoise != hare);

    // In this case tortoise and hare both will move at the same speed
    // and initial position for tortoise changed to the first position means 0th index
    // but the hare position remains same i.e at the point of first intersection
    // now they start moving and the point when they meet again is the point that we want
    // i.e the entrance point of the cycle and we return that number.
    tortoise = nums[0];
    while (tortoise != hare) {
      tortoise = nums[tortoise];
      hare = nums[hare];
    }

    return hare;
};

var nums = [3,1,3,4,2]
console.log(findDuplicate(nums))