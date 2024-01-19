let num = Math.floor((Math.random()*100)+1);
const hintInputField = document.querySelector('.input-text-field');
const hints = document.querySelector('.hints'); 
const appBody = document.querySelector('.app-body');
const header = document.querySelector('header');
var restartButton;

const iconsCollection = [
    'remove',
    'add',
    'close',
    'check'
];

hintInputField.addEventListener('keydown', function(e) {
    if(e.key === 'Enter'){
        (isNaN(hintInputField.value) || hintInputField.value === '' || hintInputField.value > 100 ? alert('O campo deve ser preenchido com um Número de 0 á 100.') : checkInput());
    }
});

let cont = 0;
hintInputField.focus();

function checkInput(){
    let userInput = Number(hintInputField.value);

    if(userInput === num){
        regHints(userInput, 'rgb(101 5 192)', iconsCollection[3]);
        gameOver();

    } else if(cont === 9){
        regHints(userInput, 'rgb(108 108 108)', iconsCollection[2]);
        gameOver();

    } else {
        if(userInput > num){
            regHints(userInput, 'rgb(0 0 0)', iconsCollection[0]);

        } else {
            regHints(userInput, 'rgb(0 0 0)', iconsCollection[1]);
        }
        
    }

    hintInputField.focus();
    hintInputField.value = '';
    cont++;
}

function regHints(userInput, rgb, hintIcon) {
    let blockHint = document.createElement('div');
    let i = document.createElement('i')

    blockHint.setAttribute('class', 'box');
    blockHint.textContent = userInput;
    i.innerText = hintIcon;
    i.setAttribute('class', 'material-icons');

    blockHint.append(i);
    blockHint.style.backgroundColor = rgb;

    hints.appendChild(blockHint);
} 

function gameOver() {
    hintInputField.disabled = true;
    createButton();
}

function createButton() {
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.setAttribute('class', 'app-restart-button');
    restartButton.addEventListener('click', restartGame);
    appBody.append(restartButton);
}

function restartGame() {
    let boxHints = document.querySelectorAll('.hints > div');
    for(let i = 0; i <= boxHints.length - 1; i++){
        hints.removeChild(boxHints[i]); 
    }
    restartButton = document.querySelector('.app-restart-button');
    appBody.removeChild(restartButton);
    num = Math.floor(Math.random()*100)+1;
    cont = 0;

    hintInputField.disabled = false;
    hintInputField.focus();
}

function showPopup() {
    modal.showModal();
}

function checkClick(e) {
    console.log(e);
}

function closeModal() {
    modal.close();
}

const helpButton = document.querySelector('.icon-help');
const modal = document.querySelector('.app-help-modal');
const closeModalButton = document.querySelector('.modal-close-button');

helpButton.addEventListener('click', showPopup);
modal.addEventListener('click', checkClick);
closeModalButton.addEventListener('click', closeModal);