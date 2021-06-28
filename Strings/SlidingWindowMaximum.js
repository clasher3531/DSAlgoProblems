// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
// You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

// Problem link : https://leetcode.com/problems/sliding-window-maximum/

var maxSlidingWindow = function(nums, k) {
    const queue = [];
    const result = [];
    
    // k is equal to 1 then we don't do anything simply return nums array
    if(k === 1){
        return nums;
    }
    
    for(var i = 0; i < nums.length; i++){
        // popping out elements from an queue if last element is smaller that the current element
        while(queue && nums[queue[queue.length - 1]] <= nums[i]){
            queue.pop();
        }
        queue.push(i);

        // remove first element if it's outside the window
        if(queue[0] === i-k){
            queue.shift();
        }

        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if(i >= k-1){
            result.push(nums[queue[0]]);
        }
    }
    return result;
}

const nums = [1,3,-1,-3,5,3,6,7];
const k = 3

var result = maxSlidingWindow(nums, k);
console.log(result);