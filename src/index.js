import wins from './scripts/wins';
import Player from './scripts/Player';
import './style.css';

let boardState = ['', '', '', '', '', '', '', '', ''];

const game = (() => {
  let playersArray = [];
  let squareArray = Array.from(document.querySelectorAll('.item'));
  playersArray.push(new Player('player 1', 'O', '1'));
  playersArray.push(new Player('player 2', 'X', '2'));

  const addEventListenerList = (array) => {
    let turn = 0;

    array.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.textContent === '') {
          if (turn === 0) {
            playersArray[turn].move(array, element, boardState);
            turn = 1;
          } else {
            playersArray[turn].move(array, element, boardState);
            turn = 0;
          }
        } else {
          alert('Cell occupied... Try another cell!');
        }

        if (boardState[element] !== '') {
          wins(boardState);
        }
      });
    });
  };

  addEventListenerList(squareArray);
})();
