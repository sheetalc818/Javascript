
var prompt = require('prompt');
var val=/[0-9]/g;
var count = 0, board =
{
    1: ' 1 ',
    2: ' 2 ',
    3: ' 3 ',
    4: ' 4 ',
    5: ' 5 ',
    6: ' 6 ',
    7: ' 7 ',
    8: ' 8 ',
    9: ' 9 '
};
function markBoard(position, mark)
{
    board[position] = mark.toUpperCase();
}
function printBoard() {
    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ***********\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ***********\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}
function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}
function validateMove(position) {
    if (isInt(position) === true && board[position].search(val)!= -1) {
        return true;
    }
    return false;
}
// Everyone possible combination of three in a row
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
// Determins if the passed in player has three in a row
function checkWin(player) {
    for (var i = 0; i < winCombinations.length; i++) {
        var markCount = 0;
        for (var j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}
function playTurn(player, count)
{
    console.log('Your turn: ' + player);
    prompt.start();
    prompt.get(['position'], function (err, result) {
        if (validateMove(result.position) === true)
        {
            markBoard(result.position, player);
            printBoard();
            if (checkWin(player) === true)
            {
                console.log("Winner of the game is "+player+"!!!");
               return;
            }
            if(count<8)
            {
                count++;
            if (player === 'X')
             {
                playTurn('O',count);
            }
            else
            {
                playTurn('X',count);
            }
        }
        else
        {
            console.log("Game is a draw!!")
        }
     }
     else {
            console.log("Invalid key press!!!");
            playTurn(player,count);
        }
    });
}
console.log('Game is now started: \n' +
    ' 1 | 2 | 3 \n' +
    ' ********** \n' +
    ' 4 | 5 | 6 \n' +
    ' ********** \n' +
    ' 7 | 8 | 9 \n');

playTurn('X',count);

