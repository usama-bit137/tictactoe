export default class Player {
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
