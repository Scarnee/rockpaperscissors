const options = document.querySelectorAll('div.optionBtn button')
let computerChoices = ['rock', 'paper', 'scissors']
let result = document.querySelector('#result')
let computerScore = document.querySelector('div.scores div.computerScore h2')
let playerScore = document.querySelector('div.scores div.playerScore h2')
let winner = document.querySelector("div.winner")
const reset=document.querySelector('#reset')
options.forEach(button=>{button.addEventListener('click',getPlayerChoice)});
reset.addEventListener('click',resetGameManually) 
  
    let playerWin = 0
    let compuWin = 0

       
    

    function getPlayerChoice(e){
         playerSelection = (e.target.getAttribute('id'))
         console.log(playerSelection)
         
         playRound()
    }

    
    
    
    function playRound(){
        computerScore.textContent=compuWin
        playerScore.textContent=playerWin
        let computerSelection = computerChoices[Math.floor(Math.random()*computerChoices.length)]
        console.log(computerSelection)
               
        
        if (playerSelection === computerSelection){
            
            console.log('Its a tie')
            result.textContent="Its a tie !"
        }
        else if ((playerSelection==='rock'&& computerSelection==='paper') || 
                    (playerSelection==='paper'&&computerSelection==='scissors') || 
                    (playerSelection==='scissors' && computerSelection ==='rock')){
            
            
            result.textContent="You lose!"
            compuWin++
            computerScore.textContent=compuWin
        }
        else{
            result.textContent="You win!"
            playerWin++
            playerScore.textContent=playerWin
            
        }
    checkWinner()
    }


    function checkWinner(){
        if (playerWin===5) {
            winner.textContent="PLAYER WINS !"
            
            resetGame()
        }
        else if (compuWin===5){
            winner.textContent="COMPUTER WINS !"
            
            resetGame()
        }
        else {
            winner.textContent=""
        }
        
    }
    function resetGame(){
        compuWin = 0;
        playerWin = 0;
        
    }
    function resetGameManually(){
        compuWin = 0;
        playerWin = 0;
        computerScore.textContent=compuWin
        playerScore.textContent=playerWin
        winner.textContent=''
        result.textContent=''
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //function game(){
            //for (i=1;i<6;i++){
                //play()
                
               // console.log('Player Wins = ' + playerWin);
               // console.log('Computer Wins = '+compuWin);
               // console.log('Round played = '+i)
         //   }
         //   }
        //
    
    //game()