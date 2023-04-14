// Code on line 3 (to load DOM content before anything else is done) is taken from the Love Maths lesson here: 
// https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first
document.addEventListener("DOMContentLoaded", function() { 

let cards = document.getElementsByTagName("img");
let resetButton = document.getElementById("reset");
let saveButton = document.getElementById("submit");
let firstImage = null;
let secondImage = null;

// Image pairs to replace placeholder images when img-elements in html are clicked.
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

// The code on lines 39-50 is taken from a Stackoverflow.com page, this page: 
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

// Used this link to understand how to change src-attribute for images: 
// https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
shuffle(imageSrc);
let index = 0;
for (let card of cards) {
    card.src = imageSrc[index];
    index++;
    card.addEventListener("click", function(event) {
        console.info(event.target.src);
        if (firstImage === null){
            firstImage = event.target.src;
        }
        else{
            if (secondImage === null){
                secondImage = event.target.src;

                if (secondImage === firstImage){
                    console.info('Its a match');
                }
                else{
                    console.info('Its NOT a match');
                }
                firstImage = null;
                secondImage = null;
            }
        }
    });
}


//Reset game



/* index of imageSrc should match a random number. 
The random number should be the value of the data-attribute on the img-tags.
When clicking a card/img the src-attribut should switch 
or 

the data-attribute of the img-tags should get at random number.
The random number should match the index of the items in the imageSrc array.
When a card/image is clicked the src-attribute of the img should be changed to 
the the string in the imageSrc-array that has the */




});

