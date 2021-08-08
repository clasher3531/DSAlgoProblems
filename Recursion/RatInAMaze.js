// driver Code Starts

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let m = [];
    let input1 = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n*n;j+=n){
      let row = new Array(n);
      for(let k = 0;k<n;k++){
        row[k] = input1[j+k];
      }
      m.push(row);
    }
    let obj = new Solution();
    let res = obj.findPath(m,n);
    if(res.length===0){
        console.log(-1);
    } else {
        printArray(res,res.length);
    }
  }
}

// driver code ends

class Solution {
    createVisitedArray(n){
        var result = [];
        for(var i = 0; i < n; i++){
            var row = [];
            for(var j = 0; j < n; j++){
                row.push(false);
            }
            result.push(row);
        }
        return result;
    }
    findPath(m,n){
        var paths = []
        var visitedArray = this.createVisitedArray(n);
        this.findAllPath(m, n, 0, 0, paths, "", visitedArray);
        paths.sort((a,b) => {
            return a.localeCompare(b);
        })
        return paths;
    }
    isSafe(row, col, m, n, visited)
    {
        if (row === -1 || row === n || col === -1 || col === n || visited[row][col] || m[row][col] === 0){
            return false;
        }
        return true;
    }
    findAllPath(b, n, i, j, paths, pos, vis){
        
        if (i === -1 || i === n || j === -1 || j === n || vis[i][j] || b[i][j] === 0){
            return;
        }
        // baseCase
        if(i === n-1 && j === n-1){
            paths.push(pos);
            return;
        }
        
        vis[i][j] = true;
        // rec case
        
        //move left
        if(this.isSafe(i, j-1, b, n, vis)){
            pos += 'L';
            this.findAllPath(b, n, i, j-1, paths, pos, vis);
            pos = pos.substring(0, pos.length - 1);
        }
        
        //move right
        if(this.isSafe(i, j+1, b, n, vis)){
            pos += 'R';
            this.findAllPath(b, n, i, j+1, paths, pos, vis);
            pos = pos.substring(0, pos.length - 1);
        }
        
        //move up
        if(this.isSafe(i-1, j, b, n, vis)){
            pos += 'U';
            this.findAllPath(b, n, i-1, j, paths, pos, vis);
            pos = pos.substring(0, pos.length - 1);
        }
        
        //move down
        if(this.isSafe(i+1, j, b, n, vis)){
            pos += 'D';
            this.findAllPath(b, n, i+1, j, paths, pos, vis);
            pos = pos.substring(0, pos.length - 1);
        }
        
        vis[i][j] = false;
        
    }
}

