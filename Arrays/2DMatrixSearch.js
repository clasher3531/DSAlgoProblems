// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Problem Link : https://leetcode.com/problems/search-a-2d-matrix/

var binarySearch = function(arr,k,low,high){
    if(low > high){
        return false;
    }
    
    var mid = Math.floor((low + high)/2);
    if(arr[mid] === k){
        return true;
    }else if(arr[mid] > k){
        return binarySearch(arr,k,low,mid-1);
    }else{
        return binarySearch(arr,k,mid+1,high);
    }
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var whichRow = -1;
    // finding the row
    for(var i = 0; i < rows; i++){
        if(matrix[i][cols-1] === target){
            return true;
        }else if(target < matrix[i][cols-1]){
            whichRow = i;
            break;
        }
    }
    console.log(cols);
    if(whichRow === -1){
        return false;
    }else{
        return binarySearch(matrix[whichRow],target,0,cols-1);
    }
    
};