import addEventListenerList from './scripts/addEventListenerList';
import Player from './scripts/Player';
import './style.css';

let boardState = ['', '', '', '', '', '', '', '', ''];
let playersArray = [];

playersArray.push(new Player('player 1', 'O', '1'));
playersArray.push(new Player('player 2', 'X', '2'));

(function () {
  // IIFE used in place of module.
  // does not pollute global namespace
  let array = Array.from(document.querySelectorAll('.item'));
  addEventListenerList(array, playersArray, boardState);
})();
