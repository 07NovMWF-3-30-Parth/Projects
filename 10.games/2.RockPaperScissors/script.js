function result() {
    let game = ['Rock', 'Paper', 'Scissors'];
    let res = Math.floor(Math.random() * game.length);
    let random = game[res];
    document.getElementById("display").innerHTML = random

}

// function clearValues () {
//     document.getElementById("tie").innerHTML = "";
//     document.getElementById("lose").innerHTML = "";
//     document.getElementById("win").innerHTML = "";
// }

let winScore = 0;
let loseScore = 0;
let tieScore = 0;


function result1() {
    // clearValues()
    result()
    let res1 = "Rock"
    document.getElementById("user").innerHTML = res1
    let computer = document.getElementById("display").innerText
    if (computer == "Rock") {
        document.getElementById("tie").innerHTML = ++tieScore;
        document.getElementById("bot").innerText = "It's a Tie"
        document.getElementById("bot").style.color = "black"
    } else if (computer == "Paper") {
        document.getElementById("lose").innerHTML = ++loseScore;
        document.getElementById("bot").innerText = "Oops, You LOSE"
        document.getElementById("bot").style.color = "brown"
    } else if (computer == "Scissors") {
        document.getElementById("win").innerHTML = ++winScore;
        document.getElementById("bot").innerText = "Yaay, Yon WON"
        document.getElementById("bot").style.color = "green"
    }
}



function result2() {
    result()
    let res2 = "Paper"
    document.getElementById("user").innerHTML = res2
    let computer = document.getElementById("display").innerText
    if (computer == "Rock") {
        document.getElementById("win").innerHTML = ++winScore;
        document.getElementById("bot").innerText = "Yaay, Yon WON"
        document.getElementById("bot").style.color = "green"
    } else if (computer == "Paper") {
        document.getElementById("tie").innerHTML = ++tieScore;
        document.getElementById("bot").innerText = "It's a Tie"
        document.getElementById("bot").style.color = "black"
    } else if (computer == "Scissors") {
        document.getElementById("lose").innerHTML = ++loseScore;
        document.getElementById("bot").innerText = "Oops, You LOSE"
        document.getElementById("bot").style.color = "brown"
    }
}


function result3() {
    result()
    let res3 = "Scissors"
    document.getElementById("user").innerHTML = res3
    let computer = document.getElementById("display").innerText
    if (computer == "Rock") {
        document.getElementById("lose").innerHTML = ++loseScore;
        document.getElementById("bot").innerText = "Oops, You LOSE"
        document.getElementById("bot").style.color = "brown"
    } else if (computer == "Paper") {
        document.getElementById("win").innerHTML = ++winScore;
        document.getElementById("bot").innerText = "Yaay, Yon WON"
        document.getElementById("bot").style.color = "green"
    } else if (computer == "Scissors") {
        document.getElementById("tie").innerHTML = ++tieScore;
        document.getElementById("bot").innerText = "It's a Tie"
        document.getElementById("bot").style.color = "black"
    }
}
