import whoWon from './whoWon';

const whosTurn = document.querySelector('#player-turn');
const addEventListenerList = (boardArray, playersArray, boardState) => {
  let turn = 0;

  whosTurn.textContent = `${playersArray[0].name} is starting`;
  boardArray.forEach((element) => {
    element.addEventListener('click', () => {
      turn = turn % 2;

      if (element.textContent === '') {
        whosTurn.append();
        playersArray[turn].move(boardArray, element, boardState);
        console.log(boardState);
      } else {
        alert('Cell occupied... Try another cell!');
        turn++;
      }

      whosTurn.textContent = `${playersArray[(turn + 1) % 2].name}'s turn`;

      const winner = whoWon(boardState, playersArray);
      if (winner) {
        console.log(`${winner} is the winner!`);
        whosTurn.textContent = `${winner} won!`; // end game?
      } else if (!boardState.includes('')) {
        whosTurn.textContent = 'Tie!';
      }
      turn++;
    });
  });
};

export default addEventListenerList;
