const wins = (array) => {
  if (array[0] === array[1] && array[0] === array[2]) {
    // Horizontals
    console.log(`${array[0]} is the winner!`);
  } else if (array[3] === array[4] && array[3] === array[5]) {
    console.log(`${array[3]} is the winner!`);
  } else if (array[6] === array[7] && array[6] === array[8]) {
    console.log(`${array[6]} is the winner!`);
  } else if (array[0] === array[3] && array[0] === array[6]) {
    // Verticals
    console.log(`${array[0]} is the winner!`);
  } else if (array[1] === array[4] && array[1] === array[7]) {
    console.log(`${array[1]} is the winner!`);
  } else if (array[3] === array[5] && array[3] === array[8]) {
    console.log(`${array[3]} is the winner!`);
  } else if (array[0] === array[4] && array[0] === array[8]) {
    // Diagonals
    console.log(`${array[0]} is the winner!`);
  } else if (array[2] === array[4] && array[2] === array[6]) {
    console.log(`${array[0]} is the winner!`);
  }
};

export default wins;
