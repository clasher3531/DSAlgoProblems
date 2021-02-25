// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.
// Problem Link : https://leetcode.com/problems/single-number/

// We can easily solve this problem using HashMap in O(N) time complexity and O(N) space complexity
// But the tricky part is that can we solve this problem in O(N) time complexity and O(1) space complexity
// At Starting it looks very weird that how we can solve this problem in O(1) space complexity with T(N)
// Here the bit Manipulation techniques came into the picture
// What we know that if we take XOR of one number with 0 then it will return the same number
// and we take XOR of two same number then it will return 0
// we apply this concept here and easily solve this problem in T(N) and O(1) space complexity.
// Here we loop through each and every element and take XOR one by one 
// what actually happens is that one number is single and all other numbers are in pair 
// So XOR of equal elements is 0 so all elements become zero and the number that left is the number we want

const SingleNumber = function(nums){

    var a = 0;
    for (let i = 0; i < nums.length; i++) {
        
        a = a ^ nums[i]
    }

    return a

}

var nums = [1,2,4,1,2];
console.log(SingleNumber(nums));