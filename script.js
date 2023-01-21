class Player {
  constructor(yourName, yourCounter, yourOrder) {
    this.name = yourName;
    this.counter = yourCounter;
    this.order = yourOrder;
  }

  sayHi() {
    console.log(`${this.yourName} is Player ${this.yourOrder}. Your counter is ${this.yourCounter}`);
  }

  move(array, element, boardState) {
    element.textContent = `${this.counter}`;
    boardState[array.indexOf(element)] = this.counter;
    console.log(boardState);
  }
}

let boardState = ['', '', '', '', '', '', '', '', ''];


const game = (() => {
  let playersArray = [];
  let squareArray = Array.from(document.querySelectorAll('.item'));
  playersArray.push(new Player('usama', 'O', '1'));
  playersArray.push(new Player('nour', 'X', '2'));

  const addEventListenerList = (array) => {
    let playerOne = 0;

    array.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.textContent === '') {
          if (playerOne === 0) {
            playersArray[playerOne].move(array, element, boardState);
            playerOne = 1;
          } else {
            playersArray[playerOne].move(array, element, boardState);
            playerOne = 0;
          }
        } else {
          alert('Cell occupied... Try another cell!');
        }
      });
    });
  };

  // insert the win logic here
  addEventListenerList(squareArray);
})();
