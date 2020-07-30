//Caching the DOM
let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let result = document.getElementById("result");
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let tieScore_span = document.getElementById("tie-score");
let winnerAnnouncement = document.getElementById("winner-announcement");
const refresh_span = document.getElementById("refresh");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissor");
const winAudio = document.getElementById("win-audio");
const loseAudio = document.getElementById("lose-audio");
const tieAudio = document.getElementById("tie-audio");
const winnerAudio = document.getElementById("winner-audio");
const loserAudio =  document.getElementById("loser-audio");
const refresh = document.getElementById("refresh");

// Random Computer Choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomItem = choices[Math.floor(Math.random() * choices.length)];
    return randomItem
}

// Convert value to Word
function convertToWord(letter){
    if(letter === "rock"){
        return  "Rock";

    }else if(letter === "paper"){
        return "Paper";
    }else{
        return "Scissor"
    }

}

// Win Action
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result.textContent = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ", You Win! 💋";
    winAudio.play();
}

// Lose Action
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result.textContent = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ", You Lose! 💩";
    loseAudio.play();
}

// Draw Action
function draw(userChoice, computerChoice){
    tieScore++;
    tieScore_span.textContent = tieScore;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result.textContent = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ", It's a Draw! 🤷🏻‍♀️";
    tieAudio.play();
}

// Play Game Action
function game(userChoice){
    const computerChoice = computerPlay();
    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }
    if (userScore == 5 || computerScore == 5){
        
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissor_button.disabled = true;
        };

    if(userScore == 5){
        winnerAnnouncement.textContent = "You win...congrats!";
        refresh_span.textContent = "Refresh the page to keep playing";
        winnerAudio.play();
        

    }
    if(computerScore == 5){
        winnerAnnouncement.textContent = "You lose...loser!";
        refresh_span.textContent = "Refresh the page to keep playing";
        loserAudio.play();
        
    }

}




// Game Event
function main(){
    rock_button.addEventListener("click", function(){
        game("rock");
    })
    paper_button.addEventListener("click", function(){
        game("paper");
    })
    scissor_button.addEventListener("click", function(){
        game("scissor");
    })

}

// Calling Game Event
main();











    
    

   

    




