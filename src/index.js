import wins from './scripts/wins';
import Player from './scripts/Player';
import './style.css';

const game = (() => {
  let boardState = ['', '', '', '', '', '', '', '', ''];
  let playersArray = [];

  let squareArray = Array.from(document.querySelectorAll('.item'));

  playersArray.push(new Player('player 1', 'O', '1'));
  playersArray.push(new Player('player 2', 'X', '2'));

  const addEventListenerList = (array) => {
    let turn = 0;

    array.forEach((element) => {
      element.addEventListener('click', () => {
        turn = turn % 2;
        if (element.textContent === '') {
          // if a board space is empty, then add the player's counter
          playersArray[turn].move(array, element, boardState);
        } else {
          // else alert user to try again
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

  addEventListenerList(squareArray);
})();
