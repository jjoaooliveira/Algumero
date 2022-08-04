let num = Math.floor((Math.random()*100)+1);
const hintField = document.querySelector('.hintField');
const hints = document.querySelector('.hints'); 

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
        

        gameOver();

    } else if(cont === 9){
    

        gameOver();

    } else {
       

        if(userInput > num){
            

        } else {
            

        }

    }
    hintField.focus();
    hintField.value = '';
    
    regHints(userInput);
    cont++;
}

regHints = function(userInput){
    let blockHint = document.createElement('p');
    blockHint.setAttribute('class', 'box');
    blockHint.textContent = userInput;
    
    hints.appendChild(blockHint);
} 

function gameOver(){
    hintField.disabled = true;

}

restartGame = function(){
    let boxHints = document.querySelectorAll('.hints > p');
    
    num = Math.floor(Math.random()*100)+1;
    cont = 0;
    
    hintField.disabled = false;

    for(let i = 0; i <= boxHints.length - 1; i++){
        hints.removeChild(boxHints[i]); 
    }
}
