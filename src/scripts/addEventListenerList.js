import wins from './wins';

const addEventListenerList = (boardArray, playersArray, boardState) => {
  let turn = 0;
  boardArray.forEach((element) => {
    element.addEventListener('click', () => {
      turn = turn % 2;
      if (element.textContent === '') {
        playersArray[turn].move(boardArray, element, boardState);
      } else {
        alert('Cell occupied... Try another cell!');
        turn++;
      }
      const winner = wins(boardState);

      if (winner) {
        console.log(`${winner} is the winner!`);
        // turn this into a querySelector when ready!
      }
      turn++;
    });
  });
};

export default addEventListenerList;
