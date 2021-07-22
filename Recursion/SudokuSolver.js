// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Problem link : https://leetcode.com/problems/sudoku-solver/

var isWrite = function(b, i, j, no) {
    // check for rows and col
    for(var k = 0; k < 9; k++) {
        if(b[i][k] === no || b[k][j] === no) {
            return false
        }
    }
    
    // check for particular cell
    var sx = (Math.floor(i/3))*3;
    var sy = (Math.floor(j/3))*3;
    
    for(var p = sx; p < sx + 3; p++){
        for(var q = sy; q < sy + 3; q++){
            if(b[p][q] === no){
                return false
            }
        }
    }
    
    return true;
}

var sudokuSolver = function(b, i, j) {
    
    // base case
    if(i === 9){
        return true
    }
    
    // rec case

    // all col are occupied in a particular row
    if(j === 9){
        return sudokuSolver(b, i+1, 0);
    }
    
    if(b[i][j] !== '.'){
        return sudokuSolver(b, i, j+1);
    }
    for(var k = 1; k <= 9; k++) {
        if(isWrite(b, i, j, k.toString())) {
            b[i][j] = k.toString();
            var solveSubproblem = sudokuSolver(b, i, j+1);
            if(solveSubproblem){
                return true;
            }
        }
    }
    b[i][j] = '.';
    return false;
}

var solveSudoku = function(board) {
    sudokuSolver(board, 0, 0);
};

var board = [["5","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]]
solveSudoku(board);
console.log(board);