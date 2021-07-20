// We are given an array of numbers and we have to find how many subsequence are there with sum equal to K

const subsequenceToK = (nums, n, i, K) => {

    // base case
    if(i === n){
        if(K === 0){
            return 1;
        }
        return 0;
    }

    // recursive case

    // include the ith element
    var inc = subsequenceToK(nums, n, i+1, K - nums[i]);
    // exclude the ith element
    var exc = subsequenceToK(nums, n, i+1, K);
    return inc + exc;
}

const nums = [1,2,3,4,5];
const K = 6;
var result = subsequenceToK(nums,nums.length,0,K);
console.log(result);