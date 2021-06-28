var binarySearch = function(arr,x,low,high) {
    
    if(low>high){
        return -1;
    }
    var mid = Math.floor((low+high)/2);
    if(arr[mid] === ""){
        var left = mid-1,right = mid+1;
        while(true){
            if (left < low && right > high)
                return -1;
            if (left >= low && arr[left] !== "") {
                mid = left;
                break;
            }
            else if (right <= high && arr[right] !== "") {
                mid = right;
                break;
            }
            left--;
            right++;
        }
    }
    if(arr[mid] === x){
        return mid;
    }else if(arr[mid] < x){
        //search right
        return binarySearch(arr,x,mid+1,high);
    }else{
        // search left
        return binarySearch(arr,x,low,mid);
    }
}

var sparseSearch = function (arr, x, n) {
    return binarySearch(arr,x,0,n-1);
}

var arr = ["for", "geeks", "", "", "", "", "ide", "practice", "", "", "", "quiz"];
const x = "for";
const n = arr.length;
var result = sparseSearch(arr, x, n);
console.log(result);