const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    document.getElementById('computerChoice').innerHTML = randomChoice;
}


function round(){

let btn = document.querySelectorAll('button');
btn.forEach((individualBtn)=>{
    individualBtn.addEventListener('click', function getPlayersChoice(){
        let playerChoice = individualBtn.className;
        document.getElementById('playerChoice').innerHTML = playerChoice + ' against ';

        switch(playerChoice){
            case 'rock': addColor() && rmColor('paper','scissors');
            break;
            case 'paper': addColor() && rmColor('rock', 'scissors');
            break;
            case 'scissors': addColor() && rmColor('paper', 'rock');
        }

        
        function addColor(){
            individualBtn.style.border = 'solid darkblue';
        };

        function rmColor(getPlayersChoice){
            individualBtn.style.border = 'none';
        }

        getComputerChoice();

    });
});
}

round();

