let playersArray = [];
let squareArray = Array.from(document.querySelectorAll('.item'));

const game = (() => {

   /* Form should go here which enters the name of person. */
   
    playersArray.push(player('usama', 'O')); 
    playersArray.push(player('nour', 'X'));
    
    var playerOne = 0; 
    const addEventListenerList = (array) =>{
            
        for (let j = 0; j < array.length; j++){
            array[j].addEventListener('click', () =>{
                if ( playerOne == 0 ){
                    array[j].textContent = `${playersArray[playerOne].counter}`;
                    playerOne = 1; 
                } else {
                    array[j].textContent = `${playersArray[playerOne].counter}`; 
                    playerOne = 0;
                }
            });
        }
    }

    addEventListenerList(squareArray);

})();

function player(name, counter){ 
    const sayHello = () => console.log(`Hello my name is ${name} my counter is ${counter}`); 
    return {name, counter, sayHello};
}

