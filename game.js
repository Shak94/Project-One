const game = document.querySelector(".play-area");
const listOfLines = document.querySelectorAll(".line");
const cards = document.querySelectorAll(".card");
const frontOfCard = document.querySelectorAll(".front");
const backOfcard = document.querySelectorAll(".back");
const suspects = document.querySelectorAll(".character");
const flipSomeCards = document.querySelector(".hint");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
let clock = document.querySelector(".timer")
const matchAttempts = document.querySelector('.attempts')
const matchesCount = document.querySelector(".correctMatches");
const showCard = document.querySelector(".showCard");
let lockBoard = false;
let cardOne = false;
let cardTwo = false;
let cardsGuess = [];
let correctMatches = [];
let playerMatchAttempts = 0;
let playerMatchCount = 0;
let faceUpCards = [];

function resetGame() {
  // Clear the selected cards
  cardOne = null;
  cardTwo = null;
  cardsGuess = [];
  correctMatches = [];
  playerMatchAttempts = 0;
  playerMatchCount = 0;
  faceUpCards = [];

  // Hide all the cards
  cards.forEach(card => card.classList.remove('showCard'));

  // Reset attempts and matches display
  matchAttempts.innerHTML = 'Match attempts: 0';
  matchesCount.innerHTML = 'Matches: 0';
}
function flipCard() {
    if (this.classList.contains('showCard') || cardsGuess.length  >= 2 || lockBoard ) {
        return;
    }

    this.classList.add('showCard');

    if (!cardOne) {
        cardOne = this;
        console.log('Check what card one is here', cardOne);
    } else {
        cardTwo = this;
        console.log('Check what card two is here', cardTwo);
        playerMatchAttempts++;
        matchAttempts.innerHTML = `Match attempts: ${playerMatchAttempts}`;
        checkMatch(this);
        faceUpCards.push(this);
    }
}

function checkMatch(card) {
    if (!cardOne) {
        cardOne = card;
        return;
    }

    cardTwo = card;


    if (cardOne.dataset.framework === cardTwo.dataset.framework) {
        playerMatchCount++;
        matchesCount.innerHTML = `Matches: ${playerMatchCount}`;
        console.log('YOU HAVE A MATCH');
        correctMatches.push(cardOne, cardTwo);
        cardsGuess = [];
        faceUpCards = faceUpCards.filter((card) => card !== cardOne && card !== cardTwo);

        cardOne = null;
        cardTwo = null;
    } else {
        console.log('NOT A MATCH');

        setTimeout(() => {
          cardOne.classList.remove("showCard"); 
          cardTwo.classList.remove("showCard"); 
            cardOne = null;
            cardTwo = null;
            lockBoard = false;
        }, 1500);
    }
}

function removeListener() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener("click", () => {
            flipCard(cards[i]);
        });
    }
}

function declareWinner() {
    for (let i = 0; i < correctMatches.length; i++) {
        if (correctMatches.length/ 2 === playerMatchCount.innerHTML) {
            // Add your code for declaring the winner here.
        }
    }
}

console.log('flipBack')
console.log("flipCard");

function flipAllCards() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].click();
    }
}

function handleHintClick() {
  flipAllCards();
  setTimeout(() => {
    faceUpCards.forEach((card) => {
      card.classList.remove('showCard');
    });
    faceUpCards = []; 
  }, 500);
}

function startTimer(seconds) {
    let myTimer = seconds;
    const interval = setInterval(() => {
        console.log(myTimer);
        clock.innerHTML = (`${myTimer}`)
        myTimer--;
        if (myTimer < 0) {
            clearInterval(interval);
            clock.innerHTML = ('THE KILLER GOT AWAY!');
        }
    }, 1000);
}

function randomCards(card) {
  cards.forEach(card => {
      let randomizedCards = Math.floor(Math.random() * 16);
      card.style.order = randomizedCards;
  });
}

function removeClickListeners() {
  cards.forEach(card => {
      card.removeEventListener('click', flipCard);
  });
}

function addClickListeners() {
  cards.forEach(card => {
      card.addEventListener('click', flipCard);
  });
}

startButton.addEventListener('click', () => {
randomCards();
startTimer(60);
removeClickListeners();
addClickListeners();
});

resetButton.addEventListener('click', () => {
  resetGame();
});