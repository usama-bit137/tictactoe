import addEventListenerList from './scripts/addEventListenerList';
import Player from './scripts/Player';
import './style.css';

let playersArray = [];

(function () {
  // This works but tedious
  // let playerOne = prompt('Player One');
  // let playerTwo = prompt('Player Two');

  let playerOne = 'usama';
  let playerTwo = 'nour';

  if (playerOne && playerTwo) {
    playersArray.push(new Player(playerOne, 'O', '1'));
    playersArray.push(new Player(playerTwo, 'X', '2'));

    let boardState = ['', '', '', '', '', '', '', '', ''];

    let array = Array.from(document.querySelectorAll('.item'));
    addEventListenerList(array, playersArray, boardState);
  }
})();
