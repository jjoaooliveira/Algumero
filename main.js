let num = Math.floor((Math.random()*100)+1);

const hintField = document.querySelector('.hintField');
const hints = document.querySelector('.hints'); 
const gameStatus = document.querySelectorAll('.gameStatus > p');
console.log(num);

//hintButton.addEventListener('click', checkNumber);

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        checkNumber();
    }
});

let cont = 0;
hintField.focus();

function checkNumber(){
    let userInput = Number(hintField.value);
    console.log(userInput);
    
    if(userInput === num){
        gameStatus[0].textContent = '-ACERTOU-';
        gameStatus[1].textContent = '';

        gameOver();

    } else if(cont === 9){
        gameStatus[0].textContent = '-FIM DE JOGO-';
        gameStatus[1].textContent = '';

        gameOver();

    } else {
        gameStatus[0].textContent = '-ERRADO-';

        if(userInput > num){
            gameStatus[1].textContent = 'TENTE UM NUMERO MENOR';

        } else {
            gameStatus[1].textContent = 'TENTE UM NUMERO MAIOR';

        }

    }
    hintField.focus();
    hintField.value = '';
    
    regHints(userInput);
    cont++;
}

regHints = function(userInput){
    let blockHint = document.createElement('p');
    blockHint.textContent = userInput;
    
    hints.appendChild(blockHint);
} 

function gameOver(){
    hintField.disabled = true;
    hintButton.disabled = true;
    
}

restartGame = function(){
    num = Math.floor(Math.random()*100)+1;
    let boxHints = document.querySelectorAll('.hints > p');
    cont = 0;
    
    hintField.disabled = false;
    hintButton.disabled = false;
    
    
    gameStatus[0].textContent = '';
    gameStatus[1].textContent = '';

    for(let i = 0; i <= boxHints.length - 1; i++){
        hints.removeChild(boxHints[i]); 
    }
}
