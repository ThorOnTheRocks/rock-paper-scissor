let playerScore = 0;
let computerScore = 0;

    function computerPlay() {
        const myArray = ['Rock', 'Paper', 'Scissor'];
        const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
        return randomItem
    }

    

    function playRound(playerSelection, computerSelection) {
        
        let playerInput = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        let computerInput = computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1).toLowerCase();

        if (playerInput == 'Rock' && computerInput == 'Scissor' || playerInput == 'Paper' && computerInput == 'Rock' ||
            playerInput == 'Scissor' && computerInput == 'Paper') {
                playerScore++;
                return 'You Win!' + playerInput + ' beats ' + computerInput;

        } else if ( playerInput == computerInput){
            return 'It\'s a draw!';
        
        
        } else if (playerInput == ''){
            return 'Player did not choose';

        } else {
            computerScore++;
            return 'You Lose!' + computerInput + ' beats ' + playerInput;
        }
    }


    function game() {
        console.log(playRound(prompt('What are you going to choose: Rock, Paper, Scissor '), computerPlay()));
        console.log(playRound(prompt('What are you going to choose: Rock, Paper, Scissor '), computerPlay()));
        console.log(playRound(prompt('What are you going to choose: Rock, Paper, Scissor '), computerPlay()));
        console.log(playRound(prompt('What are you going to choose: Rock, Paper, Scissor '), computerPlay()));
        console.log(playRound(prompt('What are you going to choose: Rock, Paper, Scissor '), computerPlay()));
        console.log('Your score = ' + playerScore + ' Computer Score = ' + computerScore);

        
    }