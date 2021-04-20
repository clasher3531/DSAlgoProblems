// You are in an infinite 2D grid where you can move in any of the 8 directions
// You are given a sequence of points and the order in which you need to cover the points.. 
// Give the minimum number of steps in which you can achieve it. You start from the first point.

// Problem Link : https://www.interviewbit.com/problems/min-steps-in-infinite-grid/

const coverPoints = (A, B) => {
    var d = 0;
    for(var i = 0;i<A.length-1;i++){
        var x1 = A[i];
        var y1 = B[i];
        var x2 = A[i+1];
        var y2 = B[i+1];
        var d = d + Math.max(Math.abs(x2-x1),Math.abs(y2-y1));
    }

    return d;
}

console.log(coverPoints([ 1,2 ],[ 4, 6 ]));