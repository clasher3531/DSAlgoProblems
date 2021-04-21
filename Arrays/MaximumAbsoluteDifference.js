// You are given an array of N integers, A1, A2 ,…, AN. Return maximum value of f(i, j) 
// for all 1 ≤ i, j ≤ N.
// f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.

// problem Link : https://www.interviewbit.com/problems/maximum-absolute-difference/

const maxArr = function(A){

    maxA = -Infinity;
	minA = Infinity;
	maxB = -Infinity;
	minB = Infinity;
	for(var i = 0; i < A.length; i++) {
        maxA = Math.max(maxA, A[i] + i);
        minA = Math.min(minA, A[i] + i);
        
        maxB = Math.max(maxB, A[i] - i);
        minB = Math.min(minB, A[i] - i);
    }
    return Math.max(maxA - minA, maxB - minB);    
}

var A = [1,3,0,4,-1];
console.log(maxArr(A));
   