// Given a string s, find the length of the longest substring without repeating characters.

// Problem link : https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    var n = s.length;
    var maxCount = 0;
    var count = 0;
    var start = 0;
    var map = {};
    for(var i = 0; i < n; i++){
        if(map[s.charAt(i)] !== undefined){
            maxCount = Math.max(count,maxCount);
            if(map[s.charAt(i)] > start){
                start = map[s.charAt(i)];
            }
            count = i - start;
            map[s.charAt(i)] = i;
        }else{
            map[s.charAt(i)] = i;
            count++;
        }
    }
    return Math.max(maxCount,count);
};

const s = "abcabcbb";
var result = lengthOfLongestSubstring(s);
console.log(result);