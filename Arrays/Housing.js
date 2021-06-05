// Given an unsorted array Areas of size N that contains only non-negative integers, 
// find all the continuous sub-array which adds to a given number K.

// Problem Link : https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1

const sumToK = (areas,K) => {
    var n = areas.length;
    var result = [];
    var i = 0,j = 0;
    var currentSum = areas[0];
    while(j < n){
        if(i === j){
            if(areas[i] === K){
                result.push([i,j++])
                currentSum = areas[++i];
            }else{
                currentSum += areas[++j];
            }
        } else {
            if(currentSum > K){
                currentSum -= areas[i++];
            } else if(currentSum < K){
                currentSum += areas[++j]
            } else {
                result.push([i,j]);
                currentSum = currentSum - areas[i++] + areas[++j];
            }
        }
    }
    return result;
}

var areas = [1,3,2,1,4,1,3,2,1,1,2];
const K = 8;
var result = sumToK(areas,K);
console.log(result);