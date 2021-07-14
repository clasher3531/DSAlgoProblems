// we are given the number N and you have to print all the perfect brackets of size N.

const Brackets = (N,str,open,close,result) => {

    // base case
    if(str.length === 2*N){
        result.push(str);
        return;
    }

    // recursive case

    if(open < N){
        Brackets(N,str+'(',open+1,close,result);
    }

    if(close < open){
        Brackets(N,str+')',open,close+1,result);
    }

    return result;
}

const N = 3;
var result = Brackets(N,"",0,0,[]);
console.log(result);