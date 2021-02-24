function ReverseString(str) {

    if(!str || str.length < 1 || typeof str !== 'string'){

        return "Oops something went wrong please check the value !!"
    }
    else{

        var result = "";
        for (let i = str.length-1; i >= 0; i--) {
            result = result + str[i];
            
        }
        return result;
    }
    
}

console.log(ReverseString("Nikhil is a coder"));