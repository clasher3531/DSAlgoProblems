// Given a list of non negative integers, arrange them in such a manner that 
// they form the largest number possible.
// The result is going to be very large, hence return the result in the form of a string.

// Problem Link : https://practice.geeksforgeeks.org/problems/largest-number-formed-from-an-array1117/1

const BiggestNumber = (nums) => {
    
    var result = '';
    nums.sort((a,b)=>{

        // convert number into string
        a = a.toString();
        b = b.toString();
        // if first letter is equal and length is not equal then we will add both number
        // like a+b and b+a and takes the greater number.
        if(a.charAt(0) === b.charAt(0) && a.length !== b.length){
            return parseInt(b+a) - parseInt(a+b)
        }
        // normally we will sort lexicographically 
        return b.toString().localeCompare(a.toString());
    })

    // take each number and added into result string
    nums.forEach(num => {
        result += num;
    });

    return result;

}

// input
const nums = [10,11,20,30,3];
var result = BiggestNumber(nums);

// output
console.log(result);