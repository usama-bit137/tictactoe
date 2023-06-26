import addEventListenerList from './scripts/addEventListenerList';
import Player from './scripts/Player';
import './style.css';

let boardState = ['', '', '', '', '', '', '', '', ''];
let playersArray = [];

const playerOneName = document.querySelector("[name = 'player-one']");
playersArray.push(new Player('usama', 'O', '1'));
playersArray.push(new Player('nour', 'X', '2'));

(function () {
  let array = Array.from(document.querySelectorAll('.item'));
  addEventListenerList(array, playersArray, boardState);
})();
