// Code on line 3 (to load DOM content before anything else is done) is taken from the Love Maths lesson here: 
// https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first
document.addEventListener("DOMContentLoaded", function () {

    let cards = document.getElementsByTagName("img");
    let resetButton = document.getElementById("reset");
    let saveButton = document.getElementById("submit");
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

    // The code on lines 44-57 is taken from this Stackoverflow.com page: 
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // A function to shuffle the images on the game board by creating two variables (one with a value of a random number) 
    // and use them to set and swap indexes for the images in the imageSrc-array.
    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }

    shuffle(imageSrc);

    // Time tracker counting the seconds it takes for the user to finish the game. Starts when the user clicks the first 
    // card and stops when all matching card pairs are found. 
    function timer() {
        timeInterval = setInterval(function () {
            document.getElementById("time").innerHTML = time;
            time++;
        }, 1000);
    };

    // Function to flip cards
    function flipCard(event) {
        const card = event.target;
        const arrayIndex = parseInt(card.getAttribute("data-attribute"));
        console.info(`Flip index ${arrayIndex}`);
        card.src = imageSrc[arrayIndex];
    }

    // Function to flip back cards
    function unFlipCards(firstCard, secondCard) {
        console.info("should unflip");
        setTimeout(function () {
            firstCard.src = "assets/images/placeholder-car.png";
            secondCard.src = "assets/images/placeholder-car.png";
            boardBlocked = false;
        }, 1500);
    }

    // Function to flip cards depending on user clicks
    function userPlay(event) {
        if (boardBlocked === false) {
            flipCard(event);
            if (firstCard === null) {
                firstCard = event.target;
                if (timerStarted === false) {
                    timer();
                    timerStarted = true;
                }
            } else {
                boardBlocked = true;
                if (secondCard === null) {
                    secondCard = event.target;
                    if (secondCard.src === firstCard.src) {
                        matchesCounter++;
                        console.info(`Its a match ${matchesCounter}`);
                        firstCard.removeEventListener("click", userPlay);
                        secondCard.removeEventListener("click", userPlay);
                        boardBlocked = false;
                        if (matchesCounter >= 10) {
                            clearInterval(timeInterval);
                            setTimeout(function () {
                                alert(`You won in ${time} seconds`);
                            }, 200)
                        }
                    } else {
                        console.info("Its NOT a match");
                        unFlipCards(firstCard, secondCard);
                    }
                    firstCard = null;
                    secondCard = null;
                }
            }
        }
    }

    function resetGame() {

    };

    function saveScore() {

    };

    // Listener that listens to user clicks on the reset button and calls the resetGame function
    resetButton.addEventListener("click", resetGame);

    // Listener that listens to user clicks on the save button and calls the saveScore function
    saveButton.addEventListener("click", saveScore);

    // Loop to make all cards in the cards-array listen for user clicks
    for (let card of cards) {
        card.addEventListener("click", userPlay);
    }
});