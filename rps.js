var choices = ['rock', 'scissors', 'paper'];
var i = Math.floor(Math.random() * 3);
var comChoice = choices[i];
var userPoint = 0;
var comPoint = 0;

function score() {
    var score = document.getElementById('score').innerHTML = userPoint + " - " + comPoint;
}
setInterval(score, 50);

function convert(word) {
    if (word === "paper") return '<i class="far fa-hand-paper"></i>';
    if (word === "rock") return '<i class="far fa-hand-rock"></i>';
    return '<i class="far fa-hand-scissors"></i>';
}

function game(userChoice) {
    var box = document.getElementById('challenge');
    box.style.display = "";
    var yObj = document.getElementById('yObject');
    yObj.innerHTML = convert(userChoice);
    var cObj = document.getElementById('cObject');
    cObj.innerHTML = convert(comChoice);

    if (userChoice === "paper" && comChoice === "rock" || userChoice === "rock" && comChoice === "scissors" ||
        userChoice === "scissors" && comChoice === "paper") {
        win();
    } else if (userChoice === comChoice) {
        draw();
    } else {
        lose();
    }

    function continueGame() {
        var i = Math.floor(Math.random() * 3);
        comChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continueGame, 1200);

    function win() {
        userPoint++;
        console.log(userPoint);
    }

    function draw() {

    }

    function lose() {
        comPoint++;
        console.log(comPoint);
    }
}