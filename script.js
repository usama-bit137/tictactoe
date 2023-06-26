class Player {
  constructor(yourName, yourCounter, yourOrder) {
    this.name = yourName;
    this.counter = yourCounter;
    this.order = yourOrder;
  }
  sayHi() {
    console.log(
      `${this.yourName} is Player ${this.yourOrder}. Your counter is ${this.yourCounter}`
    );
  }
  move(array, element, boardState) {
    element.textContent = `${this.counter}`;
    boardState[array.indexOf(element)] = this.counter;
  }
}

let boardState = ['', '', '', '', '', '', '', '', ''];

const wins = (array) => {
  if (array[0] === array[1] && array[0] === array[2]) {
    // Horizontals
    console.log(`${array[0]} is the winner!`);
  } else if (array[3] === array[4] && array[3] === array[5]) {
    console.log(`${array[3]} is the winner!`);
  } else if (array[6] === array[7] && array[6] === array[8]) {
    console.log(`${array[6]} is the winner!`);
  } else if (array[0] === array[3] && array[0] === array[6]) {
    // Verticals
    console.log(`${array[0]} is the winner!`);
  } else if (array[1] === array[4] && array[1] === array[7]) {
    console.log(`${array[1]} is the winner!`);
  } else if (array[3] === array[5] && array[3] === array[8]) {
    console.log(`${array[3]} is the winner!`);
  } else if (array[0] === array[4] && array[0] === array[8]) {
    // Diagonals
    console.log(`${array[0]} is the winner!`);
  } else if (array[2] === array[4] && array[2] === array[6]) {
    console.log(`${array[0]} is the winner!`);
  }
};

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
