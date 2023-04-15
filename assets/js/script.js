// Code on line 3 (to load DOM content before anything else is done) is taken from the Love Maths lesson here: 
// https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first
document.addEventListener("DOMContentLoaded", function() { 

let cards = document.getElementsByTagName("img");
let playButton = document.getElementById("play");
let save = document.getElementById("submit");
let firstCard = null;
let secondCard = null;
let time = 0;
let timerStarted = false;
let timeInterval = null;
let matchesCounter = 0;
let boardBlocked = false;


// Image pairs to replace placeholder image when img-elements in html are clicked.
let imageSrc = [
    "assets/images/bicycle-lane.png",
    "assets/images/bicycle-lane.png", 
    "assets/images/blind-alley.png",
    "assets/images/blind-alley.png", 
    "assets/images/motorway.png",
    "assets/images/motorway.png", 
    "assets/images/no-overtaking.png",
    "assets/images/no-overtaking.png", 
    "assets/images/no-stopping.png",
    "assets/images/no-stopping.png", 
    "assets/images/priority-road.png",
    "assets/images/priority-road.png",
    "assets/images/quayside-warning.png",
    "assets/images/quayside-warning.png",
    "assets/images/road-narrows.png",
    "assets/images/road-narrows.png",
    "assets/images/slippery-road.png",
    "assets/images/slippery-road.png",
    "assets/images/stop.png",
    "assets/images/stop.png",
];


// The code on lines 41-52 is taken from a Stackoverflow.com page, this page: 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// A function to shuffle the images on the game board by creating two variables (one with a value of a random number) 
// and use them to set and swap the indexes of the imageSrc-array elements.
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

shuffle(imageSrc);

// The code on lines 58-67 has been copied from this Stackoverflow.com page (see Answer 2 in the link below) and then 
// modified slightly by changing the code and adding some new code.
// https://stackoverflow.com/questions/37187504/javascript-second-counter
function timer() {
    timeInterval = setInterval(function (){
        document.getElementById('time').innerHTML = time;
        time++;
    }, 1000);
};


function flipCard(event){
    const card = event.target;
    const arrayIndex = parseInt(card.getAttribute('data-attribute'));
    console.info(`Flip index ${arrayIndex}`);
    card.src = imageSrc[arrayIndex];
}

function unFlipCards(firstCard, secondCard){
    console.info('should unflip');
    setTimeout(function(){
        firstCard.src = 'assets/images/placeholder-car.png';
        secondCard.src = 'assets/images/placeholder-car.png';
        boardBlocked = false;
    }, 1500);
    
}


function userPlay(event){
    if (boardBlocked === false){
        flipCard(event);
        if (firstCard === null){
            firstCard = event.target;
            if (timerStarted === false){
                timer();
                timerStarted = true;
            }
        }
        else{
            boardBlocked = true;
            if (secondCard === null){
                secondCard = event.target;
                if (secondCard.src === firstCard.src){
                    matchesCounter++;
                    console.info(`Its a match ${matchesCounter}`);
                    firstCard.removeEventListener('click', userPlay);
                    secondCard.removeEventListener('click', userPlay);
                    boardBlocked = false;
                    if(matchesCounter >= 10){
                        clearInterval(timeInterval);
                        setTimeout(function(){
                            alert(`You won in ${time} seconds`);
                        }, 1000)
                    }
                }
                else{
                    console.info('Its NOT a match');
                    unFlipCards(firstCard, secondCard);
                }
                firstCard = null;
                secondCard = null;
            }
        }
    }
}



// Used this link to understand how to change src-attribute for images: 
// https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag

let index = 0;
for (let card of cards) {
    // card.src = imageSrc[index];
    // index++;
    card.addEventListener("click", userPlay);
}

/* index of imageSrc should match a random number. 
The random number should be the value of the data-attribute on the img-tags.
When clicking a card/img the src-attribut should switch 
or 

the data-attribute of the img-tags should get at random number.
The random number should match the index of the items in the imageSrc array.
When a card/image is clicked the src-attribute of the img should be changed to 
the the string in the imageSrc-array that has the */


});

