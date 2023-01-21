class Player {
  constructor(yourName, counter) {
    this.name = yourName;
    this.counter = counter;
  }

  sayHello() {
    console.log(`Hello my name is ${this.yourName} my counter is ${this.counter}`);
  }
}

const game = (() => {
  let playersArray = [];
  let squareArray = Array.from(document.querySelectorAll('.item'));
  console.log(squareArray); 
  let boardState = ['', '', '', '', '', '', '', '', ''];
  playersArray.push(new Player('usama', 'O'));
  playersArray.push(new Player('nour', 'X'));
  const addEventListenerList = (array) => {
    let playerOne = 0;

    array.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.textContent === '') {
          if (playerOne === 0) {
            element.textContent = `${playersArray[playerOne].counter}`;
            boardState[element] = playersArray[playerOne].counter;
            playerOne = 1;
          } else {
            element.textContent = `${playersArray[playerOne].counter}`;
            boardState[element] = playersArray[playerOne].counter;
            playerOne = 0;
          }
        } else {
          console.log('Cell occupied... Try another cell!');
        }
      });
    });
  };

  // insert the win logic here
  addEventListenerList(squareArray);
})();
/*
function logic() {
  if ()
}*/