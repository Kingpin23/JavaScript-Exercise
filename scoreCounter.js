let winningScoreCount = document.querySelector("#winning-score-count");
let winningScoreDisplay = document.querySelector("#winning-score-display");
let player1Display = document.querySelector("#player-1-display");
let player2Display = document.querySelector("#player-2-display");
let p1Button = document.querySelector("#player-1-count");
let p2Button = document.querySelector("#player-2-count");
let resetButton = document.querySelector("#reset");
let winnerDisplay = document.querySelector("#winner-display");


let player1 = 0;
let player2 = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click",function(){
    if(!gameOver){
        player1++
        player1Display.textContent = player1;
        if(player1 == winningScore){
            player1Display.classList.add("winner");
            player2Display.classList.add("looser");
            winnerDisplay.textContent="Player 1 is the winner";
            gameOver = true;
    }
    }
});

p2Button.addEventListener("click",function(){
    if(!gameOver){
        player2++;
        player2Display.textContent = player2;
        if(player2 == winningScore){
            player2Display.classList.add("winner");
            player1Display.classList.add("looser");  
            winnerDisplay.textContent="Player 2 is the winner";
            gameOver = true;
    }
    }
});

resetButton.addEventListener("click",function(){
    player1 = 0;
    player2 = 0;
    player1Display.textContent = player1;
    player2Display.textContent = player2;
    player1Display.classList.remove("winner","looser");
    player2Display.classList.remove("looser","winner");
    winnerDisplay.textContent = "";
    gameOver = false;
})

winningScoreCount.addEventListener("change",function(){
    winningScore = this.value;
    winningScoreDisplay.textContent = winningScore;
})