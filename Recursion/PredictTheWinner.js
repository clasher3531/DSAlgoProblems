var isWinner = function(nums,l, r) {
    
    // base case
    if(l+1 === r){
        return Math.max(nums[l], nums[r]);
    }
    
    if(l === r){
        return nums[l];
    }
    
    // rec case
    return Math.max(nums[l] + Math.min(isWinner(nums, l + 2, r), isWinner(nums,l+1, r - 1)), nums[r] + Math.min(isWinner(nums, l, r-2), isWinner(nums,l+1, r - 1)));
}

var PredictTheWinner = function(nums) {
    var n = nums.length;
    var p1 = 0;
    var p2 = 0;
    var sum = 0;
    if(n===1 || n===2) {
        return true
    }
    
    for(var i = 0; i < n; i++){
        sum += nums[i];
    }
    
    if(n === 3){
        p1 = Math.max(nums[0] + Math.min(nums[1],nums[2]),nums[2] + Math.min(nums[0],nums[1]))
        p2 = sum - p1;
        return (p1 >= p2) ? true : false
    }
    
    p1 = isWinner(nums,0, n-1);
    p2 = sum - p1;
    
    return (p1 >= p2) ? true : false
};