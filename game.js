//I will beging by grabbing my classes from my HTML file, so i can manipulate my DOM.
const game = document.querySelector(".play-area");
const listOfLines = document.querySelectorAll(".line");
const cards = document.querySelectorAll(".card");
console.log(cards)
const frontOfCard = document.querySelectorAll(".front");
const backOfcard = document.querySelectorAll(".back");
const suspects = document.querySelectorAll(".character");
console.log(suspects);
const flipSomeCards = document.querySelector(".hint");
console.log(flipSomeCards);
const startButton = document.querySelector(".start");
console.log(startButton);
const resetButton=document.querySelector(".reset");
let clock = document.querySelector(".timer")
console.log(clock);
const matchAttempts = document.querySelector('.attempts')
let cardOne = null;
let cardTwo= null;
let cardsGuess = [];
console.log(cardsGuess);
//Flip Card Function here.

function flipCard(card) {
    card.classList.add("showCard")
    card.classList.add('selected')
    if (!cardOne) {
        cardOne = card.children[0].children[0];
        console.log(cardOne);
        cardsGuess.push(cardOne);
    }
    else {
        cardTwo = card.children[0].children[0];
        console.log(cardTwo);
        cardsGuess.push(cardTwo);
        
        //       // Now compare if cardOne and Card Two are the same. If they are its a match. If not decrease Attempts Remaining.
           
        if (cardOne == cardTwo) {
            console.log('YOU HAVE A MATCH');
            cardsGuess.classList.add('hideCard')

        }

        else {
            console.log('NOT A MATCH');
            setTimeout(() => {
                for(let i=0; i < cardsGuess.length; i++){
                    cardsGuess[i].classList.remove("showCard")
                    console.log(cardsGuess[i]);
                }
                console.log(cardsGuess[i]);
                console.log("this is the first message");
            }, 2000);
        }
        
        console.log(cardsGuess[i]);
        // else {
        //     cards.forEach(element => {
        //         element.classList.contains('selected');
        //         element.classList.remove("showCard");
        //     })
        // }
        // document.querySelector('.selected').classList.remove('selected')
        // document.querySelector('.selected').classList.remove('selected')
        // console.log(document.querySelectorAll('.selected')[0].classList.toggle('showCard'))


    }
    cardOne= null;
    cardTwo= null;

    document.querySelectorAll('.selected').forEach(card => {
        card.classList.remove('selected')
    }
    )
    cardsGuess = [];
}
console.log(cardsGuess);





//     document.querySelector('.selected').classList.remove('selected')
// }


//       // Now compare if cardOne and Card Two are the same. If they are its a match. If not decrease Attempts Remaining.
console.log('flipBack')
console.log("flipCard");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        flipCard(cards[i]);
    });
    // console.log(cards[i]);
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
        clock.innerHTML = (`${myTimer}`)
        myTimer--;
        if (myTimer < 0) {
            clearInterval(interval);
            clock.innerHTML = ('THE KILLER GOT AWAY!');
        }
    }, 1000);

}

// console.log(startTimer)

//Tally score

//Reset Cards/Shuffle
function randomCards(card) {
    cards.forEach(card => {
      let randomizedCards = Math.floor(Math.random() * 16);
      card.style.order = randomizedCards;

    })
}
console.log(randomCards)
//
//My Event listeners

startButton.addEventListener('click', () => (startTimer(60)));
console.log(cardOne)
console.log(cardTwo)
randomCards();
resetButton.addEventListener('click',() => randomCards(cards));
console.log(resetButton);
