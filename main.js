//gera o numero
let numeroAleatorio = Math.floor(Math.random()*100)+1;
console.log(numeroAleatorio);

let userInput = document.querySelector('.campoPalpite');
let trigger = document.querySelector('.envioPalpite');
let result = document.querySelector('.resultado')
let dicas = document.querySelector('.dica');
//let historico = document.querySelector('.palpites');

let botaoReinicio;
let contagem = 1;

userInput.focus();

function checkNumber(){
    let palpite = Number(userInput.value);
    //console.log(palpite);

    /*if (contagem === 1) {
        historico.textContent = 'Palpites: ';
    }*/

    if(palpite === numeroAleatorio){
        result.textContent = '-ACERTOU-';
        dicas.textContent = '';
        //historico.textContent += palpite;
        //console.log('acerto: ' + palpite);
        fimDeJogo();
        
    } else if(contagem === 10){
        result.textContent = '-FIM DE JOGO-';
        dicas.textContent = '';
        //historico.textContent += palpite;
        //console.log('fim: ' + palpite);
        fimDeJogo();

    } else {
        result.textContent = '-ERRADO-'
        //historico.textContent += palpite + ' ';
        historicoBlocks(palpite);

        if (palpite > numeroAleatorio) {
            dicas.textContent = 'Palpite maior que o numero';
            //console.log('erro>: ' + palpite);

        } else {
            dicas.textContent = 'Palpite é menor que o numero';
            //console.log('erro<: ' + palpite);
        }
    }
    contagem++;
    userInput.value = '';
    userInput.focus();

}
trigger.addEventListener('click', checkNumber);

function fimDeJogo(){
    userInput.disabled = true;
    trigger.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Reiniciar o jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', gameReinicio);

    botaoReinicio.style.width = '150px';
    botaoReinicio.style.height = '40px';
    botaoReinicio.style.borderRadius = '10px';
    botaoReinicio.style.border = '1px solid black'; 

}

function gameReinicio(){
    contagem = 1;
    let restartGameStatus = document.querySelectorAll('.gameStatus p');

    for (let i = 0; i < restartGameStatus.length; i++) {
        restartGameStatus[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    trigger.disabled = false;
    userInput.disabled = false;
    userInput.value = '';
    numeroAleatorio = Math.floor(Math.random()*100)+1; 
}

function historicoBlocks(palpite){
    let core = document.querySelector('.palpites');
    let bloco = document.createElement('p');

    bloco.textContent = palpite;
    core.appendChild(bloco);
}


/*var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  
  let code3 = input.slice(0,3);
  let codeNameStation = input.slice(input.indexOf(';') +1, input.length);
  let nameStation = code3 + ': ' + codeNameStation; 

  var result = nameStation;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
*/

