// Given a sorted array we have to calculate the no of occurence of a given number k.

const lowerBound = (nums, k) => {
    var s = 0;
    var e = nums.length - 1;
    var ans = -1;

    while(s<=e){
        var mid = Math.floor((s+e)/2);

        if(nums[mid] === k){
            ans = mid;
            e = mid - 1;
        }
        else if(nums[mid] > k){
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return ans;
}

const upperBound = (nums, k) => {
    var s = 0;
    var e = nums.length - 1;
    var ans = -1;

    while(s<=e){
        var mid = Math.floor((s+e)/2);

        if(nums[mid] === k){
            ans = mid;
            s = mid + 1;
        }
        else if(nums[mid] > k){
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return ans;

}

const countFrequency = (nums, k) => {
    var LB = lowerBound(nums, k);
    if(LB === -1){
        return 0;
    }
    var UB = upperBound(nums,k);
    return UB - LB + 1;
}

const nums = [0,0,1,1,1,2,2,2,3,4,4,5,6];
const k = 2;
var result = countFrequency(nums, k);
console.log(result);