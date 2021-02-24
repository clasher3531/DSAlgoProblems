//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const firstRecurring = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(map[element]){
            return element
        }else{
            map[element] = true
        }  
    }
    return undefined;
}

var nums = [1,2,2,3,1,4,5,6]
var result = firstRecurring(nums);
console.log(result);