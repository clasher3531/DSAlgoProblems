const longestBand = (array) => {
    // creating the hashmap
    var hashMap = {};
    var maximumLength = 0;

    // filling the keys as element of an array and value as true;
    for(var i = 0; i<array.length; i++){
        hashMap[array[i]] = true;
    }

    for(var j = 0; j<array.length; j++){

        // find the head of a band
        var headOfBand = array[j];
        if(hashMap[headOfBand-1]){
            continue;
        }

        // after finding we calculate the length of a band
        var count = 1;
        var k = 1;
        while(hashMap[headOfBand+k]){
            count++;
            k++;
        }

        // finding the maximum of count and maximum length;
        maximumLength = Math.max(maximumLength,count);
    }
    return maximumLength;
}

// input
var array = [1,9,3,0,18,5,2,10,7,12,6];

// output
console.log(longestBand(array));