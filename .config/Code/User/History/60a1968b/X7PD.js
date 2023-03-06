const choice = ['Rock', 'Paper', 'Scissors'];
const computerChoice = choice[Math.floor(Math.random()*choice.length)];
let playerScore=0;
let computerScore=0;

function round() {
const btn = document.querySelectorAll('button');

    btn.forEach((individualBtn)=>{
    individualBtn.addEventListener('click', ()=>{
        document.getElementById ('playerChoice').innerHTML = individualBtn.className + ' against '
        document.getElementById('computerChoice').innerHTML = computerChoice;
        
            let clicked = individualBtn.className;
            let msgComp = 'Computer wins!';
            let msgPlay = 'You win!';
            let msgT = "it's a tie!";
            
         if (clicked === 'Rock' && computerChoice === 'Paper'){
            document.getElementById('msg').innerHTML= msgComp;
            ++computerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;

            } else if (clicked==='Paper' && computerChoice ==='Scissors'){
            document.getElementById('msg').innerHTML= msgComp;
            ++computerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;

            } else if (clicked === 'Scissors' && computerChoice==='Rock'){
            ++computerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;
            document.getElementById('msg').innerHTML= msgComp;

            } else if (clicked=== 'Paper' && computerChoice==='Rock'){
            ++playerScore;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
            document.getElementById('msg').innerHTML= msgPlay;

            } else if(clicked === 'Scissors' && computerChoice === 'Paper'){
            ++playerScore;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
            document.getElementById('msg').innerHTML= msgPlay;

            } else if (clicked === 'Rock' && computerChoice==='Scissors'){
            ++playerScore;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
            document.getElementById('msg').innerHTML= msgPlay;

            } else if(clicked === computerChoice) {
            document.getElementById('msg').innerHTML= msgT;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
            };

            if (playerScore===5){
                document.getElementById('winner').innerHTML='Congratulations! you have won!';
                return console.log(playerScore);
            }else if (playerScore === 5){
                document.getElementById('winner').innerHTML='Unfortunately computer won this time! better luck next game!';
                return console.log (computerScore);
            };
        
        
    });
});
}

for (let i=1; i>5; i++){
    round();
};

