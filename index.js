let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = ()=>{
    const option = ["rock" , "paper" , "scissors"];
  const randIdx =  Math.floor(Math.random()*3);//random method used to generate random number and Math.floor used tp rmove decimale number
  return option[randIdx]

//rock , paper , scissors
}
const drawGame = ()=>{
    console.log("game was drow");
    msg.innerText = "Draw game Play Again";
     msg.style.backgroundColor = "black"
}

const showWinner = (userwin)=>{
    if(userwin)
       
    {
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = "You win !"
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you lose");
        msg.innerText = "You lose.";
         msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) =>{
console.log("User Choice",userChoice);

//generate computer choice
const compChoice = genCompChoice();
console.log("comp choice",compChoice);
if(userChoice === compChoice){
    //Draw game
    drawGame();
}
else{
    let userwin = true;
    if(userChoice === "rock")
    {
        //scissors, paper
        userwin = compChoice === "paper" ? false :true;
    }
    else if(userChoice === "paper")
    {
        //rock , scissore
        userwin = compChoice ==="scissors" ? false :true;
    }
    else{
        userwin = compChoice === "rock" ?false :true;
    }
    showWinner(userwin)
}

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
      console.log("Choice was clicked",userChoice);
       playGame(userChoice);
    });
});