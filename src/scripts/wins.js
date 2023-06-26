const wins = (array) => {
  let winner;
  if (array[0] === array[1] && array[0] === array[2]) {
    // Horizontals
    winner = array[0];
  } else if (array[3] === array[4] && array[3] === array[5]) {
    winner = array[3];
  } else if (array[6] === array[7] && array[6] === array[8]) {
    winner = array[6];
  } else if (array[0] === array[3] && array[0] === array[6]) {
    // Verticals
    winner = array[0];
  } else if (array[1] === array[4] && array[1] === array[7]) {
    winner = array[1];
  } else if (array[3] === array[5] && array[3] === array[8]) {
    winner = array[3];
  } else if (array[0] === array[4] && array[0] === array[8]) {
    // Diagonals
    winner = array[0];
  } else if (array[2] === array[4] && array[2] === array[6]) {
    winner = array[0];
  }
  return winner;
};

export default wins;
