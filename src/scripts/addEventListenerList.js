import whoWon from './whoWon';

const addEventListenerList = (boardArray, playersArray, boardState) => {
  let turn = 0;
  boardArray.forEach((element) => {
    element.addEventListener('click', () => {
      turn = turn % 2;
      if (element.textContent === '') {
        playersArray[turn].move(boardArray, element, boardState);
        // console.log(playersArray[turn].name);
      } else {
        alert('Cell occupied... Try another cell!');
        turn++;
      }

      const winner = whoWon(boardState, playersArray);

      if (winner) {
        console.log(`${winner} is the winner!`);
        // turn this into a querySelector when ready!
        // alert(`${winner} is the winner!`);
      }
      turn++;
    });
  });
};

export default addEventListenerList;
