let num = Math.floor((Math.random()*100)+1);
const hintField = document.querySelector('.hintField');
const hints = document.querySelector('.hints'); 
const footer = document.querySelector('footer');
let restButton;
const imgCollection = [
    '../images/minus-480.png',
    '../images/plus-480.png',
    '../images/x-480.png',
    '../images/correct-480.png'
]

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
        regHints(userInput, 'rgb(101 5 192)', imgCollection[3]);
        gameOver(); 

    } else if(cont === 9){
        regHints(userInput, 'rgb(108 108 108)', imgCollection[2]);
        gameOver();

    } else {
        if(userInput > num){
            regHints(userInput, 'rgb(0 0 0)', imgCollection[0]);

        } else {
            regHints(userInput, 'rgb(0 0 0)', imgCollection[1]);
        }
        
    }
    hintField.focus();
    hintField.value = '';
    
    cont++;
}

regHints = function(userInput, rgb, hintImg){
    let blockHint = document.createElement('div');
    let img = document.createElement('img')

    blockHint.setAttribute('class', 'box');
    blockHint.textContent = userInput;
    img.setAttribute('src', hintImg)
    img.setAttribute('class', 'img')

    blockHint.append(img)
    blockHint.style.backgroundColor = rgb;

    hints.appendChild(blockHint);
} 

function gameOver(){
    hintField.disabled = true;
    
    restButton = document.createElement('button');
    restButton.textContent = 'restart';
    restButton.setAttribute('class', 'button');
    footer.append(restButton);
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
