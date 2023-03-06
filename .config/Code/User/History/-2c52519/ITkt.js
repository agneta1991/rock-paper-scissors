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
    });
});

function border(){
    let computerChoice = getComputerChoice();
    if (computerChoice === 'rock'){
        console.log('raay');
    }else if (computerChoice === 'paper'){
        console.log('peyyy');
    }else if(computerChoice === 'scissors'){
        console.log('sayyy');
    };
}

border();