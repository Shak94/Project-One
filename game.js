//I will beging by grabbing my classes from my HTML file, so i can manipulate my DOM.
const game = document.querySelector(".play-area");
const listOfCards = document.querySelectorAll(".line");
const cards = document.querySelectorAll(".card");
const frontOfCard = document.querySelectorAll(".front");
const backOfcard = document.querySelectorAll(".back");
const suspects = document.querySelectorAll(".character");
const flipSomeCards = document.querySelector(".hint");
console.log(flipSomeCards);
const startButton = document.querySelector(".start");
console.log(startButton);
let clock = document.querySelector(".timer")
console.log(clock);
//Array of Characters
const characters = [
    { name: "Ezra", image: "Ezra Jones.jpg" },
    { name: "Kim", image: "Kim Alexander.jpg" },
    { name: "Malia", image: "Malia Roman.jpg" },
    { name: "Penelope", image: "Penelope Murray.jpg" },
    { name: "Philo", image: "Philo Ivanov.jpg" },
    { name: "Timothy", image: "Timothy Walton.jpg" },
    { name: "Dennis", image: "Dennis Holdrich.jpg" },
    { name: "Josephine", image: "Josephine Baker.jpg" },
];

//Flip Card Function here.

function flipCard(card) {
    card.classList.toggle("flipCard");
}
console.log("flipCard");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        flipCard(cards[i]);
    });
    console.log(cards[i]);
}
// Flip All Cards with Hint button.
function flipAllCards() {
    for (let i = 0; i < cards.length; i++) {
        flipCard(cards[i]);
    }
}
function handleHintClick() {
    flipAllCards();
    setTimeout(flipAllCards, 500);
}
// console.log(handleHintClick)
flipSomeCards.addEventListener("click", () => {
    handleHintClick();


});

//Start Game will start the timer and inistialize game play.
function startTimer(seconds) {
    let myTimer = seconds;
    const interval = setInterval(() => {
        console.log(myTimer);
        // console.log(interval);
        myTimer--;
        if (myTimer < 0) {
            clearInterval(interval);
            console.log('Times Up');
        }
    }, 1000);

}

// console.log(startTimer);





//Winning Conditions function

//Tally score Function

//Reset Page

//
//My Event listeners

startButton.addEventListener('click',() => (startTimer(20)));

