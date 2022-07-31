let num = Math.floor((Math.random()*100)+1);

const hintField = document.querySelector('.hintField');
const hintButton = document.querySelector('.hintButton');
const hints = document.querySelector('.hints'); 
const gameStatus = document.querySelectorAll('.gameStatus > p');
console.log(num);

hintButton.addEventListener('click', checkNumber);
let cont = 0;
hintField.focus();

function checkNumber(){
    let userInput = Number(hintField.value);
    console.log(userInput);
    
    if(userInput === num){
        gameStatus[0].textContent = '-ACERTOU-';
        gameStatus[1].textContent = '';

        //gameOver();

    } else if(cont === 6){
        gameStatus[0].textContent = '-FIM DE JOGO-';
        gameStatus[1].textContent = '';

        //gameOver();

    } else {
        gameStatus[0].textContent = '-ERRADO-';

        if(userInput > num){
            gameStatus[1].textContent = 'TENTE UM NUMERO MENOR';

        } else {
            gameStatus[1].textContent = 'TENTE UM NUMERO MAIOR';
            
        }

        hintField.focus();
    }
    hintField.value = '';
    regHints(userInput);
    cont++;
}

regHints = function(userInput){
    let blockHint = document.createElement('p');
    blockHint.textContent = userInput;
    
    hints.appendChild(blockHint);
} 

//function gameOver(){}
