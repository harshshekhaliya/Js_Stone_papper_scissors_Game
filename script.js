let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const drawgame = () => {
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showwin = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win!  your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose! ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const gencompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const playgame = (userchoice) => {

    const compchoice = gencompchoice()
    if (userchoice === compchoice) {
        drawgame();

    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;

        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            compchoice === "rock" ? false : true;
        }
        showwin(userwin, userchoice, compchoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
})