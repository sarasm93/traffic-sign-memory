// Code on line 2 (apart from the function name) is taken from the Love Maths website here: XXXXXXXXXXXXXXX
document.addEventListener("DOMContentLoaded", function() { 

let cards = document.getElementsByTagName("img");
let resetButton = document.getElementById("reset");
let saveButton = document.getElementById("submit");
let imgDataAttr = Math.floor(Math.random() * 10);
let firstImage = null;
let secondImage = null;


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

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  

shuffle(imageSrc);
// User this link to understand how to change src for images: 
// https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
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

