// Time Complexity is O(n^2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    for(var i = 0;i<length;i++){

        // finding the smallest index
        var indexOfSmallest = i;
        for(var j = i+1;j<length;j++){
            if(array[j] < array[indexOfSmallest]){
                indexOfSmallest = j;
            }
        }
        if(i !== indexOfSmallest){
            // Swap two numbers
            var temp = array[indexOfSmallest];
            array[indexOfSmallest] = array[i];
            array[i] = temp;
        }
    }
}

selectionSort(numbers);
console.log(numbers);