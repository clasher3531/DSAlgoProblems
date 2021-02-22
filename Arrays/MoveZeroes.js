// Given an array nums, write a function to move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.
// LeetCode Problem Link : https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {

    var i = 0, j = 0;
    
    // looping all over the array and finding zero if zero is found at ith place 
    // then there are two conditions one is jth term also zero and  another one is nonzero
    // if jth term is zero then we simply increment the jth value because we don't need to
    // swap both zero values and if it is nonzero then we simply swap both values and increment
    // both values.
    // if the ith vale is nonzero the we simply increament both values.
    // I hope it makes some sense to you.
    while(j < nums.length){
        
        if(nums[i]===0){
            if(nums[j]===0){
                j++;
            }else{
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                j++;
            }
        }else{
            i++;
            j++;
        }
    } 
};

var nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);