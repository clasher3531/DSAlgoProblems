const phone = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];


const phoneNumber = (input, N, output, i, result) => {

    // base case
    if (i===N) {
        result.push(output);
        return;
    }

    // recursive case
    if (input.charAt(i) === '0' || input.charAt(i) === '1') {
        phoneNumber(input, N, output, i+1, result);
    }

    for(var j = 0; j < phone[input.charAt(i)].length; j++){
        phoneNumber(input, N, output + phone[input.charAt(i)].charAt(j), i+1, result);
    }

    return result;
}

const input = '230';
const N = input.length;
var result = phoneNumber(input,N,'',0, []);
console.log(result);