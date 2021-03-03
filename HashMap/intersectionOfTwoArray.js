// Given two arrays, write a function to compute their intersection.
// Problem Link : https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    
    // counting the occurence of every element in the nums1
    // and save it into the JS object
    var countElements = {};
    var intersectionArray = [];
    for (let i = 0; i < nums1.length; i++) {
        const element = nums1[i];
        countElements[element] = (countElements[element] !== undefined) ? countElements[element] + 1 : 1;
    }

    // checking each element from the nums2 if it is inside the JS object and also
    // its value is not equal to 0 then adding it into the intersection array 
    // and also decrement the count
    for (let j = 0; j < nums2.length; j++) {
        const element = nums2[j];
        if(countElements[element]!==undefined && countElements[element]!==0){
            intersectionArray.push(element);
            countElements[element]-=1;
        }
    }
    return intersectionArray;
};

// If both arrays are sorted then we can proceed this problem using two pointers approach

var intersect2 = function(nums1, nums2) {

    // creating two pointers
    var i = 0, j = 0;
    var intersectionArray = [];

    // if any of the pointer greater than their respective array then break the loop
    // if elements are equal then push it into the array
    // if first number is greater than second then increment the second pointer
    // else increment the first pointer.
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]===nums2[j]){
            intersectionArray.push(nums1[i]);
            i++;
            j++;
        }
        else if(nums1[i] > nums2[j]){
            j++;
        }
        else{
            i++;
        }
    }
    return intersectionArray;
}

