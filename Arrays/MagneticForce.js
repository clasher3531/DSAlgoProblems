// In universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.
// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.
// Given the integer array position and the integer m. Return the required force.

// Problem link : https://leetcode.com/problems/magnetic-force-between-two-balls/

// Approach is to use the binary search algorithm between the search space of 0 and max distance b/w positions.

var maxDistance = function(position, m) {
    position.sort((a,b) => {
        return a-b;
    })
    const n = position.length;
    var start = 0;
    var end = position[n-1] - position[0];
    if(m === 2){
        return end;
    }
    var result = 0;
    while((start <= end) && (end - start !== 1)){
        var mid = Math.floor((start + end)/2);
        var prev = position[0];
        var count = 1;
        for(var i = 1; i < n; i++){
            if((position[i] - prev) >= mid){
                count++;
                prev = position[i];
            }
            if(count === m){
                break;
            }
        }
        if(count === m){
            start = mid;
            result = mid;
        }else{
            end = mid;
        }
    }
    
    return result;
};