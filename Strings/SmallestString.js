// Problem link : https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/

var add = function(s, a){
    var charArray = s.split('');
    for(var i = 1; i < charArray.length; i+=2){
        charArray[i] = ((parseInt(charArray[i]) + a)%10).toString();
    }
    return charArray.join('');
}

var rotate = function(s, b){
    var charArray = [];
    const n = s.length;
    for(var i = n-b; i < n; i++){
        charArray.push(s.charAt(i))
    }
    for(var j = 0; j < n-b; j++){
        charArray.push(s.charAt(j))
    }
    return charArray.join('');
}

var findLexSmallestString = function(s, a, b) { 
    const stk = [s];
    const done = new Set();
    let min = s;
    while (stk.length) {
        const curr = stk.pop();
        min = min.localeCompare(curr) < 0 ? min : curr;
        const [added, rotated] = [add(curr, a), rotate(curr, b)];
        if (!done.has(added)) stk.push(added) && done.add(added);
        if (!done.has(rotated)) stk.push(rotated) && done.add(rotated);
    }
    return min;
}

var s = "5525";
const a = 9;
const b = 2;
var result = findLexSmallestString(s, a, b);
console.log(result);