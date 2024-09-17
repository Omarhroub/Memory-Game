const menuPage = document.querySelector('.menu');
const firstLevelPage = document.querySelector('.first-level');
const secondLevelPage = document.querySelector('.second-level');
const thirdLevelPage = document.querySelector('.third-level');


// FIRST LEVEL 
const firstLevelTimeHolder = document.getElementById('firstLevelTime');
const firstLevelAttemptsHolder = document.getElementById("firstLevelAttempts");
let firstLevelTime = 30;
let firstLevelAttempts = 3;
let firstLevelClickedCards = [];
let firstLevelColours = ['green', 'red', 'green', 'red'];
const firstLevel = document.getElementById('first-levelBtn');
firstLevel.addEventListener('click', function(){
    menuPage.style.display = 'none';
    firstLevelPage.style.display = 'flex';
    
    firstLevelTimeHolder.innerText = "Seconds Left: 30";
    firstLevelAttemptsHolder.innerText = ("Attempts left : " + firstLevelAttempts); 
    firstLevelTimeInterval = window.setInterval(firstLevelTimeDecrease,1000);

    initalizeFirstLevel();

})

function initalizeFirstLevel() {
    shuffleArray(firstLevelColours);
    console.log(firstLevelColours);
    

}

let firstLevelCards = Array.from(document.querySelectorAll('#first-level-cards'));
let isComparing = false;
const firstLevelContainer = document.querySelector('.first-level-container');
firstLevelContainer.addEventListener('click', function(a){
   
    
    if (isComparing) {
        return;
    }
    
    let target = a.target;
    
    
    if(firstLevelAttempts == 0 || firstLevelTime === 0){
        youLost();
    } else{
        if(target.className === 'Unflipped'){
            target.removeAttribute('class');
            let cardColour = firstLevelColours[firstLevelCards.indexOf(target)];
            target.classList.add(cardColour);
            firstLevelClickedCards.push(target);
            if((firstLevelClickedCards.length % 2 === 0)){
            firstLevelCompareCards();
        }
    }
}
    
})

function firstLevelCompareCards() {    
    console.log("COMPARING...");
    isComparing = true;

    let lastCard = firstLevelClickedCards[firstLevelClickedCards.length - 1];
    let secondLastCard = firstLevelClickedCards[firstLevelClickedCards.length - 2];

    if (!(lastCard.className === secondLastCard.className)) {
        firstLevelAttempts--;
        firstLevelAttemptsHolder.innerText = ("Attempts left: " + firstLevelAttempts);
        
        setTimeout(() => {
            flip(lastCard);
            flip(secondLastCard);
            isComparing = false;
        }, 1000);
    } else {
        isComparing = false;
        if(checkWin(firstLevelCards)){
            youWon();
            clearInterval(firstLevelTimeInterval);
        }
    }

    
    
}

function firstLevelTimeDecrease(){
    if(firstLevelTime>0){

        firstLevelTime--;
    }
    firstLevelTimeHolder.innerText = ('Seconds Left: ' + firstLevelTime );
}





// SECOND LEVEL

const secondLevelTimeHolder = document.getElementById('secondLevelTime');
const secondLevelAttemptsHolder = document.getElementById("secondLevelAttempts");
let secondLevelTime = 60;
let secondLevelAttempts = 5;
let secondLevelClickedCards = [];
let secondLevelColours = ['green', 'red', 'yellow', 'green', 'red', 'yellow'];
const secondLevel = document.getElementById('second-levelBtn');
secondLevel.addEventListener('click', function(){
    menuPage.style.display = 'none';
    secondLevelPage.style.display = 'flex';
    
    secondLevelTimeHolder.innerText = "Seconds Left: 60";
    secondLevelAttemptsHolder.innerText = ("Attempts left : " + secondLevelAttempts); 
    secondLevelTimeInterval = window.setInterval(secondLevelTimeDecrease,1000);

    initalizeSecondLevel();

})

function initalizeSecondLevel() {
    shuffleArray(secondLevelColours);
    console.log(secondLevelColours);
    

}

let secondLevelCards = Array.from(document.querySelectorAll('#second-level-cards'));
// let isComparing = false;
const secondLevelContainer = document.querySelector('.second-level-container');
secondLevelContainer.addEventListener('click', function(a){
   
    
    if (isComparing) {
        return;
    }
    
    let target = a.target;
    
    
    
    if(secondLevelAttempts == 0 || secondLevelTime === 0){
        youLost();
    } else{
        if(target.className === 'Unflipped'){
            
            target.removeAttribute('class');
            let cardColour = secondLevelColours[secondLevelCards.indexOf(target)];
            target.classList.add(cardColour);
            secondLevelClickedCards.push(target);
            if((secondLevelClickedCards.length % 2 === 0)){
            secondLevelCompareCards();
        }
    }
}
    
})

function secondLevelCompareCards(){

    console.log("COMPARING...");
    isComparing = true;

    let lastCard = secondLevelClickedCards[secondLevelClickedCards.length - 1];
    let secondLastCard = secondLevelClickedCards[secondLevelClickedCards.length - 2];

    if (!(lastCard.className === secondLastCard.className)) {
        secondLevelAttempts--;
        secondLevelAttemptsHolder.innerText = ("Attempts left: " + secondLevelAttempts);
        
        setTimeout(() => {
            flip(lastCard);
            flip(secondLastCard);
            isComparing = false;
        }, 1000);
    } else {
        isComparing = false;
        if(checkWin(secondLevelCards)){
            youWon();
            clearInterval(secondLevelTimeInterval);
        }
    }

}


function secondLevelTimeDecrease(){
    if(secondLevelTime>0){

        secondLevelTime--;
    }
    secondLevelTimeHolder.innerText = ('Seconds Left: ' + secondLevelTime);
}





// THIRD LEVEL

const thirdLevelTimeHolder = document.getElementById('thirdLevelTime');
const thirdLevelAttemptsHolder = document.getElementById("thirdLevelAttempts");
let thirdLevelTime = 80;
let thirdLevelAttempts = 10;
let thirdLevelClickedCards = [];
let thirdLevelColours = ['green', 'red', 'yellow', 'cyan', 'plum', 'orange', 'green', 'red', 'yellow', 'cyan', 'plum', 'orange'];
const thirdLevel = document.getElementById('third-levelBtn');
thirdLevel.addEventListener('click', function(){
    menuPage.style.display = 'none';
    thirdLevelPage.style.display = 'flex';

    thirdLevelTimeHolder.innerText = "Seconds Left: 80";
    thirdLevelAttemptsHolder.innerText = ("Attempts left : " + thirdLevelAttempts); 
    thirdLevelTimeInterval = window.setInterval(thirdLevelTimeDecrease,1000);

    initalizeThirdLevel();
})

function initalizeThirdLevel() {
    shuffleArray(thirdLevelColours);
    console.log(thirdLevelColours);
}


let thirdLevelCards = Array.from(document.querySelectorAll('#third-level-cards'));
// let isComparing = false;
const thirdLevelContainer = document.querySelector('.third-level-container');
thirdLevelContainer.addEventListener('click', function(a){
   
    
    if (isComparing) {
        return;
    }
    
    let target = a.target;
    
    
    
    if(thirdLevelAttempts == 0 || thirdLevelTime === 0){
        youLost();
    } else{
        if(target.className === 'Unflipped'){
            
            target.removeAttribute('class');
            let cardColour = thirdLevelColours[thirdLevelCards.indexOf(target)];
            target.classList.add(cardColour);
            thirdLevelClickedCards.push(target);
            if((thirdLevelClickedCards.length % 2 === 0)){
            thirdLevelCompareCards();
        }
    }
}
    
})

function thirdLevelCompareCards(){

    console.log("COMPARING...");
    isComparing = true;

    let lastCard = thirdLevelClickedCards[thirdLevelClickedCards.length - 1];
    let secondLastCard = thirdLevelClickedCards[thirdLevelClickedCards.length - 2];

    if (!(lastCard.className === secondLastCard.className)) {
        thirdLevelAttempts--;
        thirdLevelAttemptsHolder.innerText = ("Attempts left: " + thirdLevelAttempts);
        
        setTimeout(() => {
            flip(lastCard);
            flip(secondLastCard);
            isComparing = false;
        }, 1000);
    } else {
        isComparing = false;
        if(checkWin(thirdLevelCards)){
            youWon();
            clearInterval(thirdLevelTimeInterval);
        }
    }

}





function thirdLevelTimeDecrease(){
    if(thirdLevelTime>0){

        thirdLevelTime--;
    }
    thirdLevelTimeHolder.innerText = ('Seconds Left: ' + thirdLevelTime);
}

// General

function flip(card){
    console.log("FLIPPING...");
    
    card.removeAttribute('class');
    card.classList.add('Unflipped');

}

function checkWin(cards) {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('Unflipped')) {
            return false;
        }
    }

    return true;
}

function youWon() {
    setTimeout(() => {
        alert('You Won!')
    },500)
    
}

function youLost(){
    alert('You have Lost...')
}

// Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("SHUFFLED ARRAY : " + array);
    
    return array;
}
