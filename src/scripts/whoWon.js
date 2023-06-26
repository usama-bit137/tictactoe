const wins = (board) => {
  // The possible wins. returns the winning counter
  let winCounter;
  if (board[0] === board[1] && board[0] === board[2]) {
    // Horizontals
    winCounter = board[0];
  } else if (board[3] === board[4] && board[3] === board[5]) {
    winCounter = board[3];
  } else if (board[6] === board[7] && board[6] === board[8]) {
    winCounter = board[6];
  } else if (board[0] === board[3] && board[0] === board[6]) {
    // Verticals
    winCounter = board[0];
  } else if (board[1] === board[4] && board[1] === board[7]) {
    winCounter = board[1];
  } else if (board[3] === board[5] && board[3] === board[8]) {
    winCounter = board[3];
  } else if (board[0] === board[4] && board[0] === board[8]) {
    // Diagonals
    winCounter = board[0];
  } else if (board[2] === board[4] && board[2] === board[6]) {
    winCounter = board[0];
  }
  return winCounter;
};

const whoWon = (board, players) => {
  // takes the win counter and players,
  // maps the player to the correct name specified.

  // checks the board and returns the winner
  const winCounter = wins(board);
  if (winCounter === '') return false;
  let winner = players.map((player) => {
    if (player.counter === winCounter) return player.name;
  });
  return winner.join('');
};

export default whoWon;
