const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener("click", function(){
        let userChoice = button.id;
        main(userChoice);
    });
});



function choice(){
    let options = ["rock", "paper", "scissors"];
    let picked = options[Math.floor(Math.random() * options.length)];
    return picked;
}

function winner(human, comp){
    document.getElementById("result").className = "";
    if(human === comp){
        document.getElementById("result").classList.add("yellow");
        return "Draw!";
    } else if((human === "rock" && comp === "scissors") || (human === "scissors" && comp === "paper") || (human === "paper" && comp === "rock")) {
        document.getElementById("result").classList.add("green");
        return "You win!";
    } else {
        document.getElementById("result").classList.add("red");
        return "You lose!";
    }
}

function main(userChoice){
    let computer = choice();
    result = winner(userChoice, computer);

    document.getElementById("human").textContent = `Your Choice: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
    document.getElementById("comp").textContent = `Computer's Choice: ${computer.charAt(0).toUpperCase() + computer.slice(1)}`;
    document.getElementById("result").textContent = `Result: ${result}`;
}