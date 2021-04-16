// WorstCase TimeComplexity is O(n^2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    
    // Looping again and again till all the elements are in sorted position.
    for(var i = 0;i<array.length;i++){
        for(var j = 0;j<array.length-i-1;j++){
            if(array[j] > array[j+1]){
                // swapping two numbers
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

}

bubbleSort(numbers);
console.log(numbers);