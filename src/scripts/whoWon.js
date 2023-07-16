const wins = (board) => {
  // The possible wins. returns the winning counter
  let winCounter;

  // HORIZONTALS
  if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
    winCounter = board[0];
  } else if (
    board[3] !== '' &&
    board[3] === board[4] &&
    board[3] === board[5]
  ) {
    winCounter = board[3];
  } else if (
    board[6] !== '' &&
    board[6] === board[7] &&
    board[6] === board[8]
  ) {
    winCounter = board[6];
    // VERTICALS
  } else if (
    board[0] !== '' &&
    board[0] === board[3] &&
    board[0] === board[6]
  ) {
    winCounter = board[0];
  } else if (
    board[1] !== '' &&
    board[1] === board[4] &&
    board[1] === board[7]
  ) {
    winCounter = board[1];
  } else if (
    board[2] !== '' &&
    board[2] === board[5] &&
    board[2] === board[8]
  ) {
    winCounter = board[2];
    // DIAGONALS
  } else if (
    board[0] !== '' &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    winCounter = board[0];
  } else if (
    board[2] !== '' &&
    board[2] === board[4] &&
    board[2] === board[6]
  ) {
    winCounter = board[2];
  }
  return winCounter;
};

const whoWon = (board, players) => {
  const winCounter = wins(board);
  if (winCounter === '') return false;
  let winner = players.map((player) => {
    if (player.counter === winCounter) return player.name;
  });
  return winner.join('');
};

export default whoWon;
