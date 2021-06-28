// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s 
// such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// A substring is a contiguous sequence of characters within the string.

// Problem Link : https://leetcode.com/problems/minimum-window-substring/

var minWindow = function(s, t) {
    
    var FT = {};
    var FS = {};
    
    // fill map with frequency of characters.
    for(var i = 0; i<t.length; i++){
        FT[t.charAt(i)] = (FT[t.charAt(i)] || 0) + 1;
    }
    
    var start = 0;
    var count = 0;
    var start_idx = -1;
    var min_win_len = Number.POSITIVE_INFINITY;
    var window_length;
    for(var j = 0; j < s.length; j++){
        
        var ch = s.charAt(j);
        // Expanding the window;
        FS[ch] = (FS[ch] || 0) + 1;
        // increment the count if window has all the characters of pattern string
        if(FT[ch] && FS[ch] <= FT[ch]){
            count += 1;
        }
        
        // Contracting the window if count equals to length of pattern string
        if(count === t.length){
            // removing the unusual characters
            var startChar = s.charAt(start);
            var FTStart = FT[startChar] || 0;
            while(FTStart === 0 || FS[startChar] > FTStart){
                FS[startChar]--;
                start++;
                startChar = s.charAt(start);
                FTStart = FT[startChar] || 0;
            }
            window_length = j - start + 1;
            if(window_length < min_win_len){
                min_win_len = window_length;
                start_idx = start;
            }
        } 
    }
    if(start_idx === -1){
        return "";
    }
    return s.substring(start_idx,min_win_len + start_idx);
    
};

var s = 'HELLOE';
var t = 'ELO';

console.log(minWindow(s,t));