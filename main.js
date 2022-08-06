let num = Math.floor((Math.random()*100)+1);
const hintField = document.querySelector('.hintField');
const hints = document.querySelector('.hints'); 
const main = document.querySelector('main');
let restButton;

console.log(num);

hintField.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        (isNaN(hintField.value) || hintField.value === '' || hintField.value > 100 ? alert('O campo deve ser preenchido com um Número de 0 á 100.') : checkNumber());
    }
});


let cont = 0;
hintField.focus();

function checkNumber(){
    let userInput = Number(hintField.value);

    if(userInput === num){
        regHints(userInput, 'rgb(18 161 197)');
        gameOver(); 

    } else if(cont === 9){
        gameOver();

    } else {
        if(userInput > num){
            regHints(userInput, 'rgb(197 118 18)');

        } else {
            regHints(userInput, 'rgb(18 161 197)');

        }
        
    }
    hintField.focus();
    hintField.value = '';
    
    cont++;
}

regHints = function(userInput, rgb){
    let blockHint = document.createElement('div');
    
    blockHint.setAttribute('class', 'box');
    blockHint.textContent = userInput;
    blockHint.style.backgroundColor = rgb;

    hints.appendChild(blockHint);
} 

function gameOver(){
    hintField.disabled = true;
    
    restButton = document.createElement('button');
    restButton.textContent = 'restart';
    restButton.setAttribute('id', 'button');
    main.append(restButton);
    restButton.addEventListener('click', restartGame); 
}

restartGame = function(){
    let boxHints = document.querySelectorAll('.hints > div');
    for(let i = 0; i <= boxHints.length - 1; i++){
        hints.removeChild(boxHints[i]); 
    }
    restButton.parentNode.removeChild(restButton);
    num = Math.floor(Math.random()*100)+1;
    cont = 0;
    
    hintField.disabled = false;
    hintField.focus();
}
