let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(cellIndex) {
    if (board[cellIndex] === "" && !checkWinner()) {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName("cell")[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    checkWinner();
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`Player ${board[a]} wins!`);
            return true;
        }
    }

    if (board.every(cell => cell !== "")) {
        alert("It's a draw!");
        return true;
    }

    return false;
}

function resetBoard() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}

resetBoard();
