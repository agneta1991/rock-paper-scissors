const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    document.getElementById('computerChoice').innerHTML = randomChoice;
}

let btn = document.querySelectorAll('button');
btn.forEach((individualBtn)=>{
    individualBtn.addEventListener('click', function getPlayersChoice(){
        let playerChoice = individualBtn.className;
        document.getElementById('playerChoice').innerHTML = playerChoice;

        if (playerChoice === 'rock' || 'paper' || 'scissors'){
            addColor();
        };
        
        function addColor(){
            individualBtn.style.border = 'solid darkblue';
        };

    });
    getComputerChoice();
});
