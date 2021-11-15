"use strict"
// ** STEP 1: Create arrays for destination, restauarant, transportation, and entertainment 
let destinations = ['NYC', 'Philly', 'Boston', 'Upstate',];
let resturants = ['Mexican', 'Thai', 'Indian','Ethiopian'];
let transportion = ['Train','Car','Bike','Bus'];
let entertainment = ['Hike','Food tour','Museum','Concert'];

//** STEP 2: Randomly select some elements
function getRandomElementFromArray(array){
    return array[Math.floor(Math.random() * array.length)]
}

