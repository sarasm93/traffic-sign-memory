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
    let finishedTime = null;
    let timeSaved = false;
    let latestTime = null;
    let bestTime = null;
    let timeArray = [];

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

    // The code on lines 48-59 is taken from this Stackoverflow.com page: 
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // A function to shuffle image source in the imageSrc array, i.e. to be able to show the traffic sign images randomly on the game board.
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

    // Loop to make all cards in the cards-array on the game board listen for user clicks
    for (let card of cards) {
        card.addEventListener("click", userPlay);
    }

    // Time tracker counting the seconds it takes for the user to finish the game. Starts when the user clicks the first 
    // card and stops when all matching card pairs has been found. 
    function timer() {
        timeInterval = setInterval(function () {
            document.getElementById("time").innerHTML = time;
            time++;
        }, 1000);
    }

    // Function to flip cards (show traffic signs)
    function flipCard(event) {
        const card = event.target;
        const arrayIndex = parseInt(card.getAttribute("data-attribute"));
        console.info(`Flip index ${arrayIndex}`);
        card.src = imageSrc[arrayIndex];
    }

    // Function to unflip cards (flip cards back to placholder car image)
    function unflipCards(firstCard, secondCard) {
        console.info("should unflip");
        setTimeout(function () {
            firstCard.src = "assets/images/placeholder-car.png";
            secondCard.src = "assets/images/placeholder-car.png";
            boardBlocked = false;
        }, 1350);
    }

    // Function to reset the game board (unflip cards, reset time etc.) when clicking the reset button
    function resetGame() {
        let reset = true;
        if (timeSaved === false && matchesCounter >= 10) {
            reset = confirm("Looks like you didn't save your play time. Do you want to continue to reset?");
        }
        if (reset === true) {
            console.info("reseting game board");
            for (let card of cards) {
                card.src = "assets/images/placeholder-car.png";
                card.addEventListener("click", userPlay);
                finishedTime = null;
                boardBlocked = false;
            }
            setTimeout(function () {
                firstCard = null;
                secondCard = null;
                time = 0;
                timerStarted = false;
                clearInterval(timeInterval);
                matchesCounter = 0;
                document.getElementById("time").innerHTML = "";
                shuffle(imageSrc);
                boardBlocked = false;
                timeSaved = false;
            }, 250);
        }
    }

    // Function to flip cards to show traffic signs depending on user clicks on the cards
    function userPlay(event) {
        if (boardBlocked === false) {
            flipCard(event);
            if (firstCard === null) {
                firstCard = event.target;
                firstCard.removeEventListener("click", userPlay);
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
                        secondCard.removeEventListener("click", userPlay);
                        boardBlocked = false;
                        if (matchesCounter >= 10) {
                            clearInterval(timeInterval);
                            time--;
                            finishedTime = time;
                            setTimeout(function () {
                                alert(`Great work! You found all card pairs in ${time} seconds! Use the buttons at the bottom of the page to Save the time and Reset the game`);
                            }, 500);
                        }
                    } else {
                        console.info("Its NOT a match");
                        unflipCards(firstCard, secondCard);
                        firstCard.addEventListener("click", userPlay);
                        secondCard.addEventListener("click", userPlay);
                    }
                    firstCard = null;
                    secondCard = null;
                }
            }
        }
    }

    // The function on line 168-170 is taken from this W3Schools.com page (see link below) and has then been renamed.
    // https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_math_min
    // Function to find the lowest value of the timeArray, i.e. the fastest time in which the game was finished
    function findBestTime(array) {
        return Math.min.apply(null, array);
    }

    // Function to save and show the (latest) time it took to finish the game and also find, save and show the best time 
    function saveTime() {
        if (finishedTime === null) {
            console.log("The save button was clicked before the game was finished");
            alert("You did not finish or start/restart the game yet :)");
        } else {
            latestTime = document.getElementById("latest-time").innerHTML = finishedTime;
            timeArray.push(latestTime);
            bestTime = document.getElementById("best-time").innerHTML = findBestTime(timeArray);
            timeSaved = true;
            finishedTime = null;
        }
    }

    // Listener that listens for user clicks on the reset button and calls the unflipAllCards function
    resetButton.addEventListener("click", resetGame);

    // Listener that listens for user clicks on the save button and calls the saveTime function
    saveButton.addEventListener("click", saveTime);
});