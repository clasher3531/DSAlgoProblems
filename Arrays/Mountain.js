const lengthOfHeighestMountain = (array) => {
    const n = array.length;
    var maxLength = 0;
    for(var i = 1; i<n-1;){
        
        // finding the peak 
        if(array[i]>array[i-1] && array[i]>array[i+1]){
            var count = 1;
            var j = i;

            // calculate elements from the left of peak
            while(j >= 1 && array[j-1] < array[j]){
                j--;
                count++;
            }

            // calculate elements from the right of peak
            while(i <= n-2 && array[i+1] < array[i]){
                i++;
                count++;
            }

            // finding the maximum of maxlength and count
            maxLength = Math.max(maxLength,count);

        }else{
            i++;
        }
    }
    return maxLength;
}

var array = [5,6,1,2,3,4,5,4,3,2,0,1,2,3,-2,-4];
var result = lengthOfHeighestMountain(array);
console.log(result);