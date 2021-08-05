var isSafe = function(positions) {

    var curr_row = positions.length - 1;

    for(var row = 0; row < curr_row; row++){
        var curr_col = Math.abs(positions[row] - positions[curr_row]);
        var checkrow = curr_row - row;
        if(curr_col === 0 || checkrow === curr_col){
            return false
        }
    }
    return true;

}

var createBoard = function(pos) {
    var b = [],
        n = pos.length;

    for(var c = 0; c < n; c++){
        var row = "";
        for(var r = 0; r < n; r++){
            if(r === pos[c]){
                row += "Q";
            }else{
                row += ".";
            }
        }
        b.push(row);
    }

    return b;

}

var solvingNQueens = function(N, curr_row, result, positions) {

  // did we reach beyond last row ?
  // if so generate a board that matches colPlacements and add it to response
  // colPlacement: an array where each index represent a row, and value reprsent a column in that row were we put a queen
  // colPlacements may look like this: [1,3,0,2] which means: in row 0 the queen is in col 1, in row 1 the queen is in col 3 , etc...

    // base case
    if(curr_row === N){
        var Board = createBoard(positions);
        result.push(Board);
        return true;
    }

    // rec case
    for(var col = 0; col < N; col++) {

        positions.push(col);

        if(isSafe(positions)){
            solvingNQueens(N, curr_row + 1, result, positions)

        }

        positions.pop() // backtracking
    }

}

var solveNQueens = function(n) {
    var result = []
    var positions = [];
    solvingNQueens(n, 0, result, positions);
    return result;
};