const choice = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll('button');
let refresh = document.getElementsByClassName('refresh');
let container = document.getElementsByClassName('container1');

function reset() {
    playerScore = 0;
    computerScore = 0;
    btn.forEach((individualBtn) => {
        individualBtn.classList.remove('none');
    });
    }
    
function round() {
    btn.forEach((individualBtn) => {
        individualBtn.addEventListener('click', () => {
           let computerChoice = choice[Math.floor(Math.random() * choice.length)];
            document.getElementById('playerChoice').innerHTML = individualBtn.className + ' against '
            document.getElementById('computerChoice').innerHTML = computerChoice;

            let clicked = individualBtn.className;
            let msgComp = 'Computer wins!';
            let msgPlay = 'You win!';
            let msgT = "it's a tie!";

            if (clicked === 'Rock' && computerChoice === 'Paper') {
                document.getElementById('msg').innerHTML = msgComp;
                ++computerScore;
                document.getElementById('displayedComputerScore').innerHTML = computerScore;
                document.getElementById('displayedPlayerScore').innerHTML = playerScore;

            } else if (clicked === 'Paper' && computerChoice === 'Scissors') {
                document.getElementById('msg').innerHTML = msgComp;
                ++computerScore;
                document.getElementById('displayedComputerScore').innerHTML = computerScore;
                document.getElementById('displayedPlayerScore').innerHTML = playerScore;

            } else if (clicked === 'Scissors' && computerChoice === 'Rock') {
                ++computerScore;
                document.getElementById('displayedComputerScore').innerHTML = computerScore;
                document.getElementById('displayedPlayerScore').innerHTML = playerScore;
                document.getElementById('msg').innerHTML = msgComp;

            } else if (clicked === 'Paper' && computerChoice === 'Rock') {
                ++playerScore;
                document.getElementById('displayedPlayerScore').innerHTML = playerScore;
                document.getElementById('displayedComputerScore').innerHTML = computerScore;
                document.getElementById('msg').innerHTML = msgPlay;

            } else if (clicked === 'Scissors' && computerChoice === 'Paper') {
                ++playerScore;
                document.getElementById('displayedPlayerScore').innerHTML = playerScore;
                document.getElementById('displayedComputerScore').innerHTML = computerScore;
                document.getElementById('msg').innerHTML = msgPlay;

            } else if (clicked === 'Rock' && computerChoice === 'Scissors') {
                ++playerScore;
                document.getElementById('displayedPlayerScore').innerHTML = playerScore;
                document.getElementById('displayedComputerScore').innerHTML = computerScore;
                document.getElementById('msg').innerHTML = msgPlay;

            } else if (clicked === computerChoice) {
                document.getElementById('msg').innerHTML = msgT;
                document.getElementById('displayedPlayerScore').innerHTML = playerScore;
                document.getElementById('displayedComputerScore').innerHTML = computerScore;
            };

            if (playerScore === 5) {
                btn.forEach((individualBtn) => {
                    individualBtn.classList.add('none');
                });
                document.getElementById('msg').innerHTML = 'Congratulations! you have won!';
            } else if (computerScore === 5) {
                btn.forEach((individualBtn) => {
                    individualBtn.classList.add('none');
                });
                document.getElementById('msg').innerHTML = 'Unfortunately computer won this time! better luck next game!';
            };


        });
    });
}

round();

