# **Traffic Sign Memory**
Traffic Sign Memory is a game that aims to make learning traffic signs easier and more fun! Getting a drivers license is not the easiest of things - there is a lot to remember! And once you have the license you may not use some of the knowledge you gained in the process of getting the lisence in a long time, risking to forget it again. This Traffic Sign Memory game can help prevent this. By playing the game the user's memory is trained in two ways. It is trained to remember the position of the cards with the traffic signs on them, as the position is randomly set by the computor each time the game starts. As a result of this, the user's memory is also trained to better remember traffic signs by having to repeatedly look at them when clicking around to find the matching cards. 

It is targeted towards adults who are in the process of getting a driver's license and adults who already have a driver's license but want to improve their ability to remember road signs. They can use it as an easy and fun way to remember road signs faster and better.

![An image of the Traffic Sign Memory site seen on different screens with different sizes](LÄÄÄÄÄNK)

You can find the site [here](LÄÄÄÄÄNK).

## **Features**
***
### **Existing features**

#### *The Header and The Rules Box*

Contains the name of the game - the header - at the very top of the site where the user would expect it to be. The name makes it obvious to the user what type of memory game it is and it is provided in a font that looks like the font used on traffic signs. The rules of the game is found directly beneath the header, so that the user can start playing almost directly after getting to the site. 

![An image of the header and the rules for the Traffic Sign Memory shown at the top of the site](LÄÄÄÄÄNK)

#### *The Game Board*



![An image of the game board with the cards facing down](LÄÄÄÄÄNK)
![An image of the game board with the cards facing up](LÄÄÄÄÄNK)

#### *The Game Results*



BILD

### **Future features**

- Add more cards, i.e. traffic signs
- Add game levels with different numbers of cards

## **Testing**
***
The [WebAIM Contrast checker](https://webaim.org/resources/contrastchecker/) has been used to test that the contrast between the colors used is sufficient. The first red color (#ff0000) that I used for the "Save-time"-button didn´t pass one of the tests for normal sized text, but as it passed all other tests I dind´t change it at first. But later, when I saw that this affected the accessibility score in the Lighthouse test, I changed the red color to a deeper one passing all WebAIM Contrast checker tests.

The site has been tested so that it works on different browsers. It has been tested on Google Chrome, Microsoft Edge, Firefox and Samsung Internet. When checking it on Firefox on my phone the reset button text didn´t fit into the button. To solve this I made the button a little wider on smaller screen sizes (320px to 480px).

I have confirmed that all event listeners works as intended and that all text is readable.

I have used the [Am I Responsive site](https://ui.dev/amiresponsive) from ui.dev and the DevTools toolbar to test responsiveness and make the site look good on different screen sizes. 

Git was used for version control. Gitpod was used to write the code and the site was continuously preview using DevTools.

### **Validator testing**

I have validated my HTML and CSS code with the below websites.

- HTML: [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input)
- CSS: [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input)

Validation of the HTML and CSS code didn´t return any errors or warnings.

[JSHint](https://jshint.com/) was used to detect errors and problems in the Javascript code.

When checking the Javascript code with JSHint there were warnings of unnecessary semicolons on several lines in the code. The semicolons were places after closing `}`. To solve these warnings I simply removed the semicolons that JSHint warned about.

JSHint also sent several warnings like this one: "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)" on several lines. To solve these warnings I had to go to the Configure menu at JSHint and check the "New Javascript features (ES6) option. After that, one last warning remained. It warned about a function inside the `for...loop` in the resetGame function that I used to iterate through the `cards` array in order to unflip the cards when the user wants to reset the game. The warning said "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (flippedCard, userPlay, boardBlocked)". Seeing this warning I realised the setTimeout function wasn´t needed inside the loop to get the functionality I wanted. So to solve the warning I simply moved the code inside the setTimeout function out of the function and placed it directly inside the loop, and then removed the setTimout function. 

The deployed site returns no errors when validated.

I also checked the accessibility of the site with Lighthouse in DevTools. The results for the final site is shown below.
 
INFOGA LIGHTHOUSE BILD

When testing the site with Lighthouse the first time, the SEO score was 92 and a message was shown saying the site didn´t have any meta description. I added a meta description and keywords in the head in HTML code and the score increase to 100. 

The first Lighthouse-test also showed an accessibility score of 95 and a message saying the background and foreground colors of the submit button didn´t have a sufficient contrast ratio. To solve this I changed the color (#ff0000) of the button to a deeper red (#b30000), checking with WebAIM Contrast checker to see when it was dark enough to get sufficient contrast against the white text in the button. After this change had been made the accessibility score increased to 100. 

### **Resolved problems**

In the beginning of building the site I had troubles flipping the cards and not shuffle them each time they were clicked. I tried using the onclick-method in combination with changing the src-attribute on the `img`-elements from the source for the placeholder image to the source of the traffic sign images. But finally it was solved by using a data-attribute on the <img>-elements in order for the........

Trouble getting the alert message saying.......  

The first version of the game had a :hover psuedo-class selector placed on the `img`-elements to change the background color when hovering the `img`-elements (cards). It also had functions in the javascript code that changed the background color of the `img`-elements when they were clicked (so that the traffic sign images had a different color then the placholder car image). This had to be done since all images used in the game have a "built in" transparent background. However, when playing the game I noticed that after the `img`-elements background color was changed with javascript the hover feature wasn´t there anymore. To solve this I.....

### **Resolved bugs**

When playing the game to test functionality I discovered that it was possible to get a match of cards by clicking on the same card twice or clicking on a pair of cards that had already been matched. I noticed that this was due to not removing the click event listener for the first card at the right time in the code (the event listener was removed after the second card was flipped). So to solve this I removed the event listener for the first card *directly* after it has been clicked, by adding `firstCard.removeEventListener("click", userPlay);`. 

When testing the site in Firefox and Microsoft Edge the traffic sign-images didn´t show but the placeholder car-image did. I discovered that the files had different formats; the traffic sign images were .jpg files and the placeholder car image was a .png file. To solve this I just changed the format of the traffic sign-images to .png.

Problem med att få latest tim och best time att navigera sig rätt på mindre skärmstorlkar.

No bugs have been idenitified in the deployed version.



SKRIV OM TYPISKA SMÅSAKER SOM DYKER UPP SOM DU INTE FATTAR VARFÖR DE INTE FUNKAR, T.EX. NÅGON KONSTIG LINJE SOM SYNS OSV.

Sidan ser konstig ut på mentorsmöte 2 på mentorns skärm, men inte alls på min. Varför??

## **Deployment**
***
You can find the link to the live site [here](LÄÄÄÄÄNK).

ÄNDRA NÅGOT I DETTA KAPITEL - NÅGOT SOM ÄNDRATS SEDAN FÖRRA GÅNGEN?

The site was deployed to Github Pages with the following three steps:

1. Log on to GitHub
2. Find the correct repository
3. Find the settings tab in the repository navigation bar
4. Find the pages option in the bar on the right hand side
5. In the branch drop-down menu select the main branch
6. Click the save button
7. The site is published and the URL for it is now provided in the bar directly under the GitHub Pages. If the URL is not provided directly you might need to refresh the page in order for it to show.

## **Credits**
***
### **Content and design**

Code from [W3Schools website section about grid view](https://www.w3schools.com/css/css_rwd_grid.asp) has been used in the style.css file to create a grid with columns and make the Traffic Sign Memory site responsive. Comments have been added in the code to show where the borrowed code is.

Font: söker på "traffic signs speed limit" på google https://www.google.com/search?q=traffic+signs+speed+limit&tbm=isch&ved=2ahUKEwizu7ih86H-AhWOwioKHX3iAN4Q2-cCegQIABAA&oq=traffic+signs+speed+limit&gs_lcp=CgNpbWcQAzIECCMQJzIHCAAQgAQQEzIICAAQCBAeEBMyCAgAEAgQHhATUABYAGD44QZoA3AAeACAAViIAaYBkgEBMpgBAKoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Elw1ZLPqMY6FqwH9xIPwDQ&bih=714&biw=1536&rlz=1C1IBEF_svSE1046SE1046 + och tittar på vilken font de verkar ha, och ser om jag kan hitta den på googe fonts: https://fonts.google.com/
--> landar i Overpass

Inspiration för hur ett memory game kan se ut - färger, ikoner, uppbyggnad: https://www.google.com/search?q=memory+game&rlz=1C1IBEF_svSE1046SE1046&sxsrf=APwXEdceULB4pIF0rDT7QQ1L7FSIh_13PA:1681194978841&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiI3ousm6H-AhVScvEDHe6uAAkQ_AUoAXoECAEQAw&biw=1536&bih=714&dpr=1.25

Inspiration till hur varje kort i memoriet kan se ut kommer från fontawesome där varje ikon är en knapp med rundade hörn som ändrar färg när man hovrar över: https://fontawesome.com/search?q=question&o=r&m=free

För att komma igång med html:
- Använder boilerplate för att skapa den första koden
- tittar på Love Maths för att lägga till kopplingen till JS-scriptet <script src="assets/js/script.js"></script> : https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/a8ec361b95e94c25bf8a821654bd57bc/

I used this [Love Maths lesson](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first) and the code, shown in the lesson, for an event listener listening for the DOM content to be loaded: `document.addEventListener("DOMContentLoaded", function () {`. I use this line of code at the very top of my script.js file.

I also used the Love Running website LÄNK and the Love Maths website LÄNK to figure out that Setting `width:`, `height:` and `margin: auto` on the game board `div` can be used to align the cards to the center of the screen. 

The code on lines 48-59 in the script.js file is taken from [this Stackoverflow.com page](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array). The code is used to shuffle the images on the game board by creating two variables (one with a value of a random number) and use them to set and swap indexes for the images in the imageSrc-array. ÄR DETTA RÄÄÄÄÄÄÄTTTTT??!

The function on line 73-75 in the script.js file is taken from [this W3Schools.com page](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_math_min) and has then been renamed. The function is used to find the lowest value of the variable `let timeArray` which is holding all the saved time scores, i.e. the function is used to find the fastest time in which the user has finished the game.

För att förstå hur data-attribut funkar:
- https://www.w3schools.com/tags/att_global_data.asp

För att komma igång med JS:
- vad jag ska göra först, nämligen att lägga addEventListener("DOMContentLoaded", function())-delen : Love Mats website och lektionen om add javascript: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first

För att hitta att det finns en reset-type på button
- bara skrev type i gitpod ochså gav den förslag. Sen googlade jag och fick bekräftat vad reset betyder här: https://www.w3schools.com/tags/tag_button.asp





För att skapa korten - deras storlek, border, rundade kanter
- tittar på Love Running projektet i Gitpod och minns tillbaks hur man gjorde - använder inte koden men tittar för att komma ihåg hur man gör 

För att förstå hur jag ska få tiden som räknas (via JS) bredvid ordet Time: som finns i html
- tittar på Love Maths och ser att de använder span för att få operanderna och operatorn att vara på en rad.

För att förstå att jag ska ha "placeholder"-bild på ett frågetecken som utgångs-bild i html:
- used Code institutes "Rock, papper, scissors"-website: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/ 




[Google Fonts](https://fonts.google.com/) was used to import 'Barlow Semi Condensed' and 'Roboto' fonts.

The readme.md files for the [Love Maths website](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md) and the [ULTIMATE Rock Paper Scissors website](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/) has been used as inspiration for the content of the readme.md file for this site.

### **Images**

The images of the traffic signs and the placeholder car image showed before cards are flipped to face up is taken from [Pixabay](https://pixabay.com/). The specific links to each image are listed below.

- [placeholder-car.png](https://pixabay.com/vectors/auto-automobile-truck-car-2071876/)
- [bicycle-lane.png](https://pixabay.com/vectors/bicycle-lane-bicycle-cycling-sign-160714/) 
- [blind-alley.png](https://pixabay.com/illustrations/traffic-sign-traffic-signs-sign-6727/)
- [no-stopping.png](https://pixabay.com/vectors/no-stopping-traffic-sign-sign-160697/)
- [slippery-road.png](https://pixabay.com/vectors/traffic-sign-sign-slippery-road-160656/)
- [stop.png](https://pixabay.com/illustrations/traffic-sign-traffic-signs-sign-6627/)
- [road-narrows.png](https://pixabay.com/vectors/road-narrows-on-both-sides-160655/)
- [priority-road.png](https://pixabay.com/vectors/priority-road-traffic-sign-sign-160677/)
- [quayside-warning.png](https://pixabay.com/vectors/triangle-warning-sign-traffic-sign-30522/)
- [motorway.png](https://pixabay.com/illustrations/traffic-sign-traffic-signs-sign-6720/)
- [no-overtake.png](https://pixabay.com/vectors/no-overtaking-by-lorries-traffic-sign-160692/)

[Tinypng](https://tinypng.com/) was used to compress the images.

## **Acknowledgements**
***
I want to thank my mentor Antonio Rodriguez for guiding me when building this site to make 
- använd data-atribute för att kunna skapa memory boarden
- använd localstorage för att stora scoren från förra spelet
- få bilder att suffle - kopierar kod från stackoverflow:
- hitta ett sätt att varna användaren om att den glömt spara tiden
 FORTSÄTT HÄR
