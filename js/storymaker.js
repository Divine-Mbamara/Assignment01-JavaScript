// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var nounOneButton = document.querySelector ("#noun1");
var verbButton = document.querySelector("#verb");
var adjectiveButton = document.querySelector("#adjective");
var nounTwoButton = document.querySelector("#noun2");
var settingsButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
var chosenNounOne = document.querySelector("#choosenNoun1");
var chosenVerb = document.querySelector("#choosenVerb");
var chosenAdjective = document.querySelector("#choosenAdjective");
var chosenNounTwo = document.querySelector("#choosenNoun2");
var chosenSetting = document.querySelector("#choosenSetting");
var studentId = document.querySelector("#studentId");


// Constants for final buttons and p tags
var playbackButton = document.querySelector("#playback");
var randomStoryButton = document.querySelector("#random");
var finalStory = document.querySelector("#story");

// Variables for pre-defined arrays
var nounOneArray = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nounTwoArray = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settingsArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];


// Variables for count to grab array elements
var nounOneCount = Math.floor(Math.random() * nounOneArray.length);
var verbCount= Math.floor(Math.random() * verbArray.length);
var adjectiveCount = Math.floor(Math.random() * adjectiveArray.length);
var nounTwoCount = Math.floor(Math.random() * nounTwoArray.length);
var settingsCount = Math.floor(Math.random() * settingsArray.length);

//variable to check if button is clicked
var buttonClicked = false;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    chosenNounOne.textContent = nounOneArray[nounOneCount];
    // if-else to change count setting
    if(buttonClicked){
        nounOneCount = Math.floor(Math.random() * nounOneArray.length);
        chosenNounOne.textContent = nounOneArray[nounOneCount];
    }
    //reset button
    buttonClicked = !buttonClicked;
}

function verb_on_click() {
    // variable to get array element and displaying it
    chosenVerb.textContent = verbArray[verbCount];
    // if-else to change count setting
    if(buttonClicked){
        verbCount= Math.floor(Math.random() * verbArray.length);
        chosenVerb.textContent = verbArray[verbCount];
    }
    //reset button
    buttonClicked = !buttonClicked;
}

function adjective_on_click() {
    // variable to get array element and displaying it
    chosenAdjective.textContent = adjectiveArray[adjectiveCount];
    // if-else to change count setting
    if(buttonClicked){
        adjectiveCount = Math.floor(Math.random() * adjectiveArray.length);
        chosenAdjective.textContent = adjectiveArray[adjectiveCount];
    }
    //reset button
    buttonClicked = !buttonClicked;
}

function noun2_on_click() {
    // variable to get array element and displaying it
    chosenNounTwo.textContent = nounTwoArray[nounTwoCount];
    // if-else to change count setting
    if(buttonClicked){
        nounTwoCount = Math.floor(Math.random() * nounTwoArray.length);
        chosenNounTwo.textContent = nounTwoArray[nounTwoCount];
    }
    //reset button
    buttonClicked = !buttonClicked;
}

function setting_on_click() {
    // variable to get array element and displaying it
    chosenSetting.textContent = settingsArray[settingsCount];
    // if-else to change count setting
    if(buttonClicked){
        settingsCount = Math.floor(Math.random() * settingsArray.length);
        chosenSetting.textContent = settingsArray[settingsCount];
    }
    //reset button
    buttonClicked = !buttonClicked;
}

// concatenate the user story and display
function playback_on_click() {
    finalStory.textContent = chosenNounOne.textContent + " " + chosenVerb.textContent + " " + chosenAdjective.textContent + " " 
    + chosenNounTwo.textContent + " " + chosenSetting.textContent;
    studentId.textContent = "Name: Divine Lotanna Mbamara | Id: 200594413";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    finalStory.textContent = nounOneArray[Math.floor(Math.random() * nounOneArray.length)] + " "
     + verbArray[Math.floor(Math.random() * verbArray.length)] + " " + adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)] + " "
     + nounTwoArray[Math.floor(Math.random() * nounTwoArray.length)] + " " + settingsArray[Math.floor(Math.random() * settingsArray.length)];
     studentId.textContent = "Name: Divine Lotanna Mbamara | Id: 200594413"
}


/* Event Listeners
-------------------------------------------------- */
nounOneButton.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
nounTwoButton.addEventListener("click", noun2_on_click);
settingsButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomStoryButton.addEventListener("click", random_on_click);