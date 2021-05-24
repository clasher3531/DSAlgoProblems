const AllSubSetString = (Str,output,array) => {

    // Base Case
    if(Str.length === 0){
        array.push(output);
        return;
    }

    var char = Str.charAt(0);
    var reducedString = Str.substr(1);

    // include the first element
    AllSubSetString(reducedString,output + char,array);

    // exclude the first element
    AllSubSetString(reducedString,output,array);
}

var Str = 'abcd';
var array = [];
var output = '';

AllSubSetString(Str,output,array);
array.sort((a,b) => {
    if(a.length === b.length){
        return a.localeCompare(b);
    }
    return a.length - b.length;
})

console.log(array);