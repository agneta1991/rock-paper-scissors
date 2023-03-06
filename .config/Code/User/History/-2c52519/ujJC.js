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

        if (playerChoice === 'rock'){
            addColor();
        }else rmColor();

        if (playerChoice === 'paper'){
            addColor();
        }else rmColor();

        if (playerChoice === 'scissors'){
            addColor();
        }else rmColor();

        function addColor(){
            individualBtn.style.border = 'solid darkblue';
        }
        function rmColor(){
            individualBtn.style.border ='none';
        }
        
       
    });
});



