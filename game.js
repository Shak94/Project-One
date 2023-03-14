//I will beging by grabbing my classes from my HTML file, so i can manipulate my DOM.
const game = document.querySelector(".play-area");
const listOfLines = document.querySelectorAll(".line");
const cards = document.querySelectorAll(".card");
// console.log(cards)
const frontOfCard = document.querySelectorAll(".front");
const backOfcard = document.querySelectorAll(".back");
const suspects = document.querySelectorAll(".character");
console.log(suspects);
const flipSomeCards = document.querySelector(".hint");
// console.log(flipSomeCards);
const startButton = document.querySelector(".start");
// console.log(startButton);
const resetButton = document.querySelector(".reset");
let clock = document.querySelector(".timer")
// console.log(clock);
const matchAttempts = document.querySelector('.attempts')
const matchesCount = document.querySelector(".correctMatches");
const showCard=document.querySelector("showCard");
let cardOne, cardTwo;
let cardsGuess = [];
let correctMatches = [];
let playerMatchAttempts = 0;
let playerMatchCount = 0;
//Flip Card Function here.

function flipCard(card) {
    card.classList.toggle("showCard")
    // card.classList.toggle("hideCard")
    // card.classList.add('selected')
    if (!cardOne) {
        cardOne = card.dataset.framework
        console.log("Card one flipped:", cardOne);
        cardsGuess.push(cardOne);
    } else {
        cardTwo = card.dataset.framework
        console.log("Card two flipped:", cardTwo);
        cardsGuess.push(cardTwo);
        matchAttempts.innerHTML = (`Match attempts:${playerMatchAttempts}`)
        playerMatchAttempts++;
        
        // console.log(playerMatchAttempts)
        // console.log("checking ", cardOne)

        //Compare CardOne and CardTwo to check for a successfulmatch.
        if (cardOne === cardTwo ) {
            playerMatchCount++;
            matchesCount.innerHTML = (`Matches:${playerMatchCount}`);
            console.log('YOU HAVE A MATCH');
            correctMatches.push(cardOne, cardTwo);
            cards.forEach((card) => {
                card.classList.removeEventListener("click",flipCard,true)
            });
            // console.log(correctMatches, "Matched Cards Array")
            // cardOne.removeEventListener("click", flipCard);
            // cardTwo.removeEventListener("click", flipCard);
            // console.log("Matches:", correctMatches)
            console.log("card Guess", cardsGuess);
            cardsGuess = [];
            declareWinner();
            cardOne=null;
            cardTwo=null;

        }
        else {
            
            console.log('NOT A MATCH');
            // cardOne.classList.remove('showCard');
            // cardTwo.classList.remove('showCard');
            setTimeout(() => {
                cards.forEach((card) =>{
                    card.classList.remove("showCard")
                    card.classList.remove('showCard');
                });
               
            }, 1500);
            console.log(cardOne ," Check what card one is here")
        }

    }
}
//Win Conditions!.
function declareWinner() {
    for (let i = 0; i < correctMatches.length; i++) {
        if (correctMatches.length[i]/ 2 === playerMatchCount.innerHTML) {
            console.log('You have found the killer Congratz')

        }

    }
}
console.log(declareWinner, "checking win condition function")

// console.log(cardsGuess);
// console.log(flipCard.cardsGuess);


console.log('flipBack')
console.log("flipCard");

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
        clock.innerHTML = (`${myTimer}`)
        myTimer--;
        if (myTimer < 0) {
            clearInterval(interval);
            clock.innerHTML = ('THE KILLER GOT AWAY!');
        }
    }, 1000);
 

}

// console.log(startTimer)

// Clear game/Clear class attributes

//Reset Cards/Shuffle
function randomCards(card) {
    cards.forEach(card => {
        let randomizedCards = Math.floor(Math.random() * 16);
        card.style.order = randomizedCards;

    })
}
// console.log(randomCards)
//
//Event listeners

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        flipCard(cards[i]);
    });
    // console.log(cards[i]);
}

startButton.addEventListener('click', () => (startTimer(60)));
// console.log(cardOne)
// console.log(cardTwo)
randomCards();
resetButton.addEventListener('click', () => randomCards(cards));
// console.log(resetButton);
