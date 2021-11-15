"use strict"
// ** STEP 1: Create arrays for destination, restauarant, transportation, and entertainment 

let destinations = ['NYC', 'Philly', 'Boston', 'Upstate',];
let resturants = ['Mexican', 'Thai', 'Indian','Ethiopian'];
let transportion = ['Train','Car','Bike','Bus'];
let entertainment = ['Hike','Food tour','Museum','Concert'];
let tripFeatures = [
    getRandomElementFromArray(destinations),
    getRandomElementFromArray(resturants),
    getRandomElementFromArray(transportion),
    getRandomElementFromArray(entertainment),
]

//** STEP 2: Randomly select some elements

function getRandomElementFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}

// ** STEP 3: Wrie a function to display our completed trip as an alert

function displayTrip(arrayOfFeatures){
    // ** Declare a final variable to be alerted
    let finalString = "";
    //** Iterate through our array of features and build the final string
    for (let index = 0; index < array.length; index++){
        finalString += arrayOfFeatures(index);
    }
    // ** Alert the final string
    alert(finalString);
}