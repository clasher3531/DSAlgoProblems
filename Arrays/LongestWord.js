// Have the function LongestWord(sen) take the sen parameter being passed 
// and return the largest word in the string. If there are two or more words 
// that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty.
// Input: "fun&!! time"
// Output: time

// Problem Link : https://coderbyte.com/information/Longest%20Word

function LongestWord(sen) { 
    
    // creating javascript object for saving the length of a word as a key and word as a value
    // looping over the string and if the character is under a-z or A-Z then adding that char
    // into the word string else save the word into the map. 
    var word = "";
    var Longest = 0;
    var map = {};
    for (let i = 0; i < sen.length; i++) {
        var charCode = sen.charCodeAt(i);
        if((charCode>=65 && charCode<=90)||(charCode>=97 && charCode<=122)){
            word += sen[i];
        }
        else{
            if(word.length > Longest){
                Longest = word.length;
            }
            map[word.length] = word;
            word = "";
        }  
    }

    // last word that we are getting over the loop checking that word if its length 
    // greater that longest then return that word else getting the value from the map
    // having key as Longest.
    var longestWord = (word.length > Longest) ? word : map[Longest]; 
    return longestWord;
}

console.log(LongestWord("fun&!! time"));