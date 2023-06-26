export default class Player {
  // what should this do?
  // Is this SOLID?
  constructor(yourName, yourCounter, yourOrder) {
    this.name = yourName;
    this.counter = yourCounter;
    this.order = yourOrder;
  }
  sayHi() {
    // This should be a querySelector which updates a div after user inputs their name:
    console.log(
      `${this.yourName} is Player ${this.yourOrder}. Your counter is ${this.yourCounter}`
    );
  }

  move(array, element, boardState) {
    // this is fine:
    element.textContent = `${this.counter}`;
    boardState[array.indexOf(element)] = this.counter;
  }
}
