const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for(var i = 1;i<array.length;i++){
        for(var j = i-1;j>=0;j--){
            if(array[j+1]<array[j]){
                var temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp
            }else{
                break;
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);