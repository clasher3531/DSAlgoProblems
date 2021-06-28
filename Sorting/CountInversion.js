// Given an array of integers. Find the Inversion Count in the array. 
// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then the inversion count is 0. 
// If an array is sorted in the reverse order then the inversion count is the maximum. 
// Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

// Problem link : https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1#


// function to merge the two sorted array
function merge(arr,l,r) {
    var i = l;
    var m = Math.floor((l + r)/2);
    var j = m+1;
    var temp = [];
    var count = 0
    
    while(i<=m && j<=r){
        if(arr[j] < arr[i]){
            count = count + (m - i + 1);
            temp.push(arr[j]);
            j++;
        } else {
            temp.push(arr[i]);
            i++;
        }
    }
    
    while(i<=m){
        temp.push(arr[i++]);
    }
    
    while(j<=r){
        temp.push(arr[j++]);
    }
    
    var k = 0;
    for(var p = l; p<=r; p++){
        arr[p] = temp[k++];
    }
    
    return count;
    
}

// function to divide the array into two parts
function mergeSort(arr,l,r){
    if(l >= r) {
        return 0;
    }
    var mid = Math.floor((l + r)/2);
    var c1 = mergeSort(arr,l,mid);
    var c2 = mergeSort(arr,mid+1,r);
    var CI = merge(arr,l,r);
    return c1+c2+CI;
    
}

// Function to count inversions in the array.
function inversionCount(arr, N)
{   
    return mergeSort(arr,0,N-1);
}

var arr = [2, 4, 1, 3, 5];
const N = arr.length;
var result = inversionCount(arr,N);
console.log(result);