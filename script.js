let playersArray = [];
let squareArray = Array.from(document.querySelectorAll('.item'));

function player(name, counter){ 
    const sayHello = () => console.log(`Hello my name is ${name} my counter is ${counter}`); 
    return {name, counter, sayHello};
}

const game = (() => {

   /* Form should go here which enters the name of person. */

    playersArray.push(player('usama', 'O')); 
    playersArray.push(player('nour', 'X'));
    
    let boardState = ["", "", "", 
                      "", "", "", 
                      "", "", ""]; 

    var playerOne = 0; 
    const addEventListenerList = (array) => {


        for (let j = 0; j < array.length; j++){
            array[j].addEventListener('click', () => {
                
                if (array[j].textContent == ''){
                    if ( playerOne == 0 ){
                        array[j].textContent = `${playersArray[playerOne].counter}`;
                        boardState[j] = playersArray[playerOne].counter;
                        //console.log(boardState);
                        playerOne = 1; 
                    } else {
                        array[j].textContent = `${playersArray[playerOne].counter}`; 
                        boardState[j] = playersArray[playerOne].counter;
                        //console.log(boardState); 
                        playerOne = 0;
                    }

                } else {
                    alert('Cell occupied... Try another cell!');
                }

            });
        }
    }

    // insert the win logic here

    addEventListenerList(squareArray);
 
})();