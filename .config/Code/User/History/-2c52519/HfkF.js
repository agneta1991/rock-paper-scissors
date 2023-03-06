const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    console.log(randomChoice);
}

let btn = document.querySelectorAll('button');
btn.forEach((individualBtn)=>{
    individualBtn.addEventListener('click', function getPlayersChoice(){
        let playerChoice = individualBtn.className;
        document.getElementById('displayed').innerHTML = playerChoice;

        if (playerChoice === 'rock' || 'paper' || 'scissors'){
            addColor();
        };
        
        function addColor(){
            individualBtn.style.border = 'solid darkblue';
        }

        let computerChoice= getComputerChoice();
        if (computerChoice === 'rock'){
            let rock = document.getElementsByClassName('rock');
            rock.style.border ='solid darkmagenta';
        }else if(computerChoice === 'paper'){
            let paper = document.getElementsByClassName('paper');
            paper.style.border ='solid darkmagenta';
        }else if(computerChoice==='scissors'){
            let scissors = document.getElementsByClassName('scissors');
            scissors.style.border ='solid darkmagenta';
        };
        
       
    });
});



