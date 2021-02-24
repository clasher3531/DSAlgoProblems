function MergeTwoSortedArray(array1,array2) {

    var result = [];
    var i = 0,j = 0;
    while(i<array1.length || j<array2.length){
        if(!array2[j] || array1[i]<=array2[j]){
            result.push(array1[i]);
            i++;
        }else{
            result.push(array2[j]);
            j++;
        }
        console.log(array2[j])
    }

    return result;

}

console.log(MergeTwoSortedArray([0,3,4,31],[4,6,30]))