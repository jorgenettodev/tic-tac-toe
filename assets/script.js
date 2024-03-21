console.log('tic tac toe project');

const Cell = function() {
    let value = 0;

    const addToken = function(row, col, player) {
        value = player.token;
    }

    const getValue = () => value;

    return { addToken, getValue };
}

const Gameboard = (function() {
    let board = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            let cell = Cell();
            board[i].push(cell);
        }
    }

    const getBoard = () => board;

   return { getBoard };
})();

const GameController = function() {
    const player1 = {name: "Player 1", token: "X"};
    const player2 = {name: "Player 2", token: "O"};
}


console.log(Gameboard.getBoard());