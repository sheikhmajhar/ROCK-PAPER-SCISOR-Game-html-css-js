let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")

let userScore1 = document.querySelector("#user-score")
let compScore1 = document.querySelector("#compute-score")



choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")

        game(userChoice)
    })
})

const game = (userChoice) => {
    console.log(" userChoice = ", userChoice)
    let compChoice1 = compChoice()
    console.log(" compchoice = ", compChoice1)


    if (userChoice === compChoice1) {
        drawGame()


    } else {
        let userWin = true;

        if (userChoice === "rock") {

            userWin = compChoice1 === "paper" ? false : true;

        } else if (userChoice === "paper") {

            userWin = compChoice1 === "scisor" ? false : true;

        } else {

            userWin = compChoice1 === "rock" ? false : true;

        }
        shoWineer(userWin, userChoice, compChoice1)



    }



}

const shoWineer = (userWin, userChoice, compChoice1) => {
    if (userWin) {
        userScore++;
        userScore1.innerText = userScore;

        msg.innerText = `You win! Your ${userChoice} beats ${compChoice1}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScore1.innerText = compScore;

        msg.innerText = `You Lose. ${compChoice1} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }

}

const drawGame = () => {

    msg.innerText = 'Game Was Draw. Play Again'
    msg.style.backgroundColor = "black"
}

const compChoice = () => {
    let option = ["rock", "paper", "scisor"]
    let index = Math.floor(Math.random() * 3)
    return option[index]
}

































// let h1 = document.querySelector("h1")
// h1.onclick = () => {
//     let a = 35;
//     a += 1
//     console.log
//     console.log("this is my heading")
//     h1.style.color = "red"
// }

