const Triplets = (array,Sum) => {

    // calulate length of an array
    const n = array.length;

    // soring an array
    array.sort((a,b) => {
        return a-b;
    });
    var result = [];

    // start looping
    for (let i = 0; i < n-2; i++) {
        j = i+1; // start index for pair sum
        k = n-1; // end index of pair sum
        
        // start pair sum problem
        while(j < k){
            if(array[i] + array[j] + array[k] > Sum){
                k--;
            }else if(array[i] + array[j] + array[k] < Sum){
                j++;
            }else{
                // if triplet sum is equal to the target sum
                result.push([array[i],array[j],array[k]]);
                j++;
                k--;
            }
        }
    }
    // output the result
    console.log(result);
}

// input
var array = [1,2,3,4,5,6,7,8,9,15];
Triplets(array,18);