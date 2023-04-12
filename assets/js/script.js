// Code on line 2 (apart from the function name) is taken from the Love Maths website here: XXXXXXXXXXXXXXX
document.addEventListener("DOMContentLoaded", function assignRandomNumber() {

    let imageSrc = [
        "assets/images/bicycle-lane.png", 
        "assets/images/blind-alley.png", 
        "assets/images/motorway.png", 
        "assets/images/no-overtaking.png", 
        "assets/images/no-stopping.png", 
        "assets/images/priority-road.png",
        "assets/images/quayside-warning.png",
        "assets/images/road-narrows.png",
        "assets/images/slippery-road.png",
        "assets/images/stop.png",
    ];

    let cards = document.getElementsByTagName("img");
    let resetButton = document.getElementById("reset");
    let saveButton = document.getElementById("submit");

    // Create random numbers between 0 and 9 and set them as data-attribute values of placeholder images in html 
    let randomNum = Math.floor(Math.random() * 10);

    for (let img of cards) {
        let imgDataAttr = img.getAttribute("data-attribute") = randomNum.value
    };

    // Functions to stop user from clicking save button before starting game or before finishing it 



} 
)

/* When a card is clicked, the src-attribute value of the html image on that card changes to the string (imageSrc) that has a 
index matching with the data-attribute of the image */
img.addEventListener("click", function flippCard() {

    for (let i = 0, i < imageSrc.length, i++) {   
        if (imgDataAttr === imageSrc[i]) {
            img.src = imageSrc.value
        }}
    
}); 



function runGame() {}

function flipCard() {}

function checkAnswer() {}

function startTime() {}

function stopTime() {}

function displayBestTime() {}

function addLatestTime() {
    saveButton.addEventListener("click", );

}

function resetGame() {
    resetButton.addEventListener("click", assignRandomNumber());
}

function resetTime() {}
