const waterTrapped = (heights) => {

    const n = heights.length;

    if(n <= 2){
        return 0;
    }

    // calculate Max left array(L) and Max right array(R)
    var Larray = [], Rarray = [];
    Larray[0] = heights[0];
    Rarray[n-1] = heights[n-1];
    for(var i = 1; i < n; i++){
        Larray[i] = Math.max(Larray[i-1],heights[i]);
        Rarray[n-1-i] = Math.max(Rarray[n-i],heights[n-1-i]);
    }

    // calculate water trapped at ith location
    // by using min(li,Ri) - array[i]
    var totalWaterTrapped = 0;
    for(var j = 0; j < n; j++){
        totalWaterTrapped += (Math.min(Larray[j],Rarray[j]) - heights[j]);
    }
    return totalWaterTrapped;
}

const heights = [0,1,0,2,1,0,1,3,2,1,2,1];
var result = waterTrapped(heights);
console.log(result);