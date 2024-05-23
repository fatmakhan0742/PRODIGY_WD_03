let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let message = document.querySelector('.message');

function makeMove(cellIndex) {
    if (cells[cellIndex].textContent === '' && !message.textContent) {
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            message.textContent = `Player ${cells[a].textContent} wins!`;
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent)) {
        message.textContent = "It's a draw!";
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    message.textContent = '';
    currentPlayer = 'X';
}

resetGame();
