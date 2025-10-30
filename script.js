function resetGame() {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    document.querySelector("h1").textContent = "Refresh Me";

}

document.querySelector("#btn").addEventListener("click", function() {
    resetGame();
})

function rollDice() { 
let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

let image1 = `images/dice${randomNumber1}.png`;
let image2 = `images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins ";
} else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins";
}  else {
      document.querySelector("h1").innerHTML = "Draw";
}
 }

if (!sessionStorage.getItem("hasVisited")) {
    window.addEventListener("load", resetGame);
    sessionStorage.setItem("hasVisited", "true");
    
} else {
    window.addEventListener("load", rollDice);
}
