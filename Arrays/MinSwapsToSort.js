const minSwaps = (nums) => {

    const n = nums.length;
    var ap = [];
    for(var i = 0; i<n; i++){
        ap.push([nums[i],i]);
    }

    ap.sort((a,b) => {
        return a[0]-b[0];
    })
    
    var visited = new Array(n).fill(false);
    var ans = 0;
    for(var j = 0; j< n; j++){
        
        if(visited[j] === true || ap[j][1] === j){
            continue;
        }

        var node = j;
        var count = 0;
        while(!visited[node]){
            visited[node] = true;
            var new_Node = ap[node][1];
            node = new_Node;
            count++;
        }
        ans += count - 1;
    }
    return ans;
}

var nums = [2,4,5,1,3];
var result = minSwaps(nums);
console.log(result);