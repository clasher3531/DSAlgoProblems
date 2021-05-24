const checkSubset = (Str1,Str2) => {

    const n1 = Str1.length;
    const n2 = Str2.length;

    var i = 0,j = 0;
    while(i < n1 && j < n2){
        if(Str1.charAt(i) === Str2.charAt(j)){
            i++;
            j++;
        }else{
            i++;
        }
    }

    return j===n2 ? true : false;
}

var Str1 = 'codingminutes';
var Str2 = 'cines';

var result = checkSubset(Str1,Str2);
console.log(result);