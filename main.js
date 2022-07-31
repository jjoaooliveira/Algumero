let num = Math.floor((Math.random()*100)+1);

const hintField = document.querySelector('.hintField');
const hintButton = document.querySelector('.hintButton');
const hints = document.querySelector('.hints'); 
const gameStatus = document.querySelectorAll('.gameStatus');
console.log(num);

hintButton.addEventListener('click', checkNumber);
let cont = 0;


function checkNumber(){
    let userInput = Number(hintField.value);
    console.log(userInput);
    
    if(userInput === num){
        gameStatus[0] = '-ACERTOU-';
        gameStatus[1] = '';

    } else if(cont === 6){
        gameStatus[0] = '-FIM DE JOGO-';
        gameStatus[1] = '';

    } else {
        gameStatus[0] = '-ERRADO-';

        if(userInput > num){
            gameStatus[1] = 'TENTE UM NUMERO MENOR';

        } else {
            gameStatus[1] = 'TENTE UM NUMERO MAIOR';
        }
    }
    
    //regHints(userInput);
    cont++;
}
