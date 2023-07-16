import addEventListenerList from './scripts/addEventListenerList';
import Player from './scripts/Player';
import './style.css';

let playersArray = [];

(function () {
  let playerOne = prompt('Player 1', 'Player 1');
  let playerTwo = prompt('Player 2', 'Player 2');

  let boardState = ['', '', '', '', '', '', '', '', ''];
  const array = Array.from(document.querySelectorAll('.item'));

  if (playerOne && playerTwo) {
    playersArray.push(new Player(playerOne, 'O', '1'));
    playersArray.push(new Player(playerTwo, 'X', '2'));
  } else if (playerOne) {
    playersArray.push(new Player(playerOne, 'O', '1'));
    playersArray.push(new Player('Haley Joel', 'X', '2')); // AI
  }

  addEventListenerList(array, playersArray, boardState);
})();
