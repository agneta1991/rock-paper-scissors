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
        console.log(clicked);


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

            } else document.getElementById('msg').innerHTML= msgT;
            document.getElementById('displayedPlayerScore').innerHTML = playerScore;
            document.getElementById('displayedComputerScore').innerHTML = computerScore;
        
        
    });
}, {once: true});
}

for(i=1; i>1;i++){
    round();
};
