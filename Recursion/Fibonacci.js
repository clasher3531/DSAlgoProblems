// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    if(n===0){
        return 0;
    }
    if(n===1 || n===2){
        return 1
    }
    var first = 1;
    var second = 1;
    for(var i = 3; i<=n; i++){
        var temp = first;
        first = second;
        second = second + temp;
    }
    return second;
}
console.log(fibonacciIterative(13));

function fibonacciRecursive(n) {
    if(n===0){
        return 0;
    }
    if(n===1 || n===2){
        return 1
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(13));