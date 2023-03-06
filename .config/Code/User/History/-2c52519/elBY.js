const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    console.log(randomChoice);
}

let btn = document.querySelectorAll('button');
btn.forEach((individualBtn)=>{
    individualBtn.addEventListener('click', function getPlayersChoice(){
        let playerChoice = individualBtn.className;
        document.getElementById('displayed').innerHTML = playerChoice + ' against ' + computerChoice;

        if (playerChoice === 'rock' || 'paper' || 'scissors'){
            addColor();
        };
        
        function addColor(){
            individualBtn.style.border = 'solid darkblue';
        }
    });
    let computerChoice = getComputerChoice();
});
