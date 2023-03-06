const choice = ['Rock', 'Paper', 'Scissors'];
const computerChoice = choice[Math.floor(Math.random()*choice.length)];


function round() {
const btn = document.querySelectorAll('button');


function oneClick(){
    btn.forEach((individualBtn)=>{
    individualBtn.addEventListener('click', ()=>{
        document.getElementById ('playerChoice').innerHTML = individualBtn.className + ' against '
        document.getElementById('computerChoice').innerHTML = computerChoice;
        let clicked = individualBtn.className;
        console.log(clicked);


            let msgComp = 'Computer wins!';
            let msgPlay = 'You win!';
            let msgT = "it's a tie!";
            let playerScore=0;
            let computerScore=0;
            
         if (clicked === 'Rock' && computerChoice === 'Paper'){
            document.getElementById('msg').innerHTML= msgComp;
            +computerScore;
            } else if (clicked==='Paper' && computerChoice ==='Scissors'){
            console.log(computerScore);
            document.getElementById('msg').innerHTML= msgComp;
            +computerScore;
            } else if (clicked === 'Scissors' && computerChoice==='Rock'){
            console.log(computerScore);
            +computerScore;
            document.getElementById('msg').innerHTML= msgComp;
            } else if (clicked=== 'Paper' && computerChoice==='Rock'){
            console.log(playerScore);
            +playerScore;
            document.getElementById('msg').innerHTML= msgPlay;
            } else if(clicked === 'Scissors' && computerChoice === 'Paper'){
            console.log(playerScore);
            +playerScore;
            document.getElementById('msg').innerHTML= msgPlay;
            } else if (clicked === 'Rock' && computerChoice==='Scissors'){
            console.log(playerScore);
            +playerScore;
            document.getElementById('msg').innerHTML= msgPlay;
            } else document.getElementById('msg').innerHTML= msgT;
        
        
    });
});
}
oneClick();


}

round();

