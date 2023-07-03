# Tic-Tac-Toe
## How does it work?
The basic structure of the game is the following IIFE:

```js
(function () {
  let playerOne = prompt('Player One');
  let playerTwo = prompt('Player Two');
  
  if (playerOne && playerTwo) {
    playersArray.push(new Player(playerOne, 'O', '1'));
    playersArray.push(new Player(playerTwo, 'X', '2'));

    let boardState = ['', '', '', '', '', '', '', '', ''];

    let array = Array.from(document.querySelectorAll('.item'));
    addEventListenerList(array, playersArray, boardState);
  }
})();
```
The strength of using this IIFE is that as soon as the function is defined, it runs. The players are prompted to enter a `name` which is passed on to a `Player` class. The `Player` class
```js
export default class Player {
  constructor(yourName, yourCounter, yourOrder) {
    this.name = yourName;
    this.counter = yourCounter;
    this.order = yourOrder;
  }
 
  move(array, element, boardState) {
    element.textContent = `${this.counter}`;
    boardState[array.indexOf(element)] = this.counter;
  }
}
```
The `Player` class has three properties in the object. Firstly, we have the `name`, which is selected by user prompt. The `counter` property is automatically assigned in the IIFE
```js
if (playerOne && playerTwo) {
    playersArray.push(new Player(playerOne, 'O', '1'));
    playersArray.push(new Player(playerTwo, 'X', '2'))
}
```
There are two pre-fixed values: `O` for `playerOne` and `X` for `playerTwo`. Finally, we have the `order` property which seems to be redundant, so it should be removed. We also have a method attached to the `class` called `move`. The `move` method takes three arguments, `array`, `element` and `boardState`. 
- `array` is the set of all grid items in the HTML (`Array.from(document.querySelectorAll('.item'))`),
- `element` is the element that the player clicked on in the tic-tac-toe board,
- `boardState` is a book-keeping array of the state of the board, for example,
  - the empty board translates to the following  `boardState`:
  ```js
      Board   =>              boardState
   [___|___|___]
   [___|___|___] => ['', '', '', '', '', '', '', '', '',]
   [___|___|___]
  ```
     
  -  the board with a `O` in the top-left cell and an `X` in the top-right cell translates to the following `boardState`:
  ```js
      Board   =>              boardState
   [ O |___| X ]
   [___|___|___] => ['O', '', 'X', '', '', '', '', '', '',]
   [___|___|___]
  ```
