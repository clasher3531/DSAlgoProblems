const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(array,index1,index2){

    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

}

function partitionIndex(array,pivotindex,left,right){

    while(left < right){

        do{
            left++;
        }while(array[left] <= array[pivotindex])

        do{
            right--
        }while(array[right] > array[pivotindex])

        if(left < right){
            swap(array,left,right);
        }
    }

    swap(array,pivotindex,right);
    return right;
}

function quickSort(array, left, right){

    if(left < right){
        var pivotindex = left;
        var partitionindex = partitionIndex(array,pivotindex,left,right);
        quickSort(array,left,partitionindex);
        quickSort(array,partitionindex+1,right);
    }
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length);
console.log(numbers);