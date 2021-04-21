// Given a non-negative number represented as an array of digits,
// add 1 to the number ( increment the number represented by the digits ).
// The digits are stored such that the most significant digit is at the head of the list.

// Problem Link : https://www.interviewbit.com/problems/add-one-to-number/


const plusOne = (A) => {

    const length = A.length;
    var carry = 0;
    // if last element is 9 then carry = 1
    if(A[length - 1] === 9){
        A[length - 1] = 0;
        carry = 1;
    }else{
        A[length - 1] = A[length - 1] + 1;
    }
    // changing elements of A according to the condition
    for(var i = A.length - 2;i>=0;i--){
        if(carry === 1){
            if(A[i]===9){
                A[i] = 0;
                carry = 1;
            }else{
                A[i] += 1;
                carry = 0;
            }
        }
    }
    var result = [];
    var count = 0;

    // if carry is still equal to  1 then need to increase the size of array by 1;
    if(carry===1){
        result.push(1);
        for(var j = 0;j<length;j++){
            result.push(A[j]);
        }
    }else{
        for(var j = 0;j<length;j++){
            result.push(A[j]);
        }
    }

    // checking if the starting elements are 0 or not
    if(result[0] === 0){
        count  = 1;
        for(var k = 1;k<result.length;k++){
            if(result[k] === 0){
                count++;
            }else{
                break;
            }
        }
    }
    return result.splice(count);
}

       