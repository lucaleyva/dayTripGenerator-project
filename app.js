"use strict"
//** Step 1: Create four arrays for destination, restaurants, transporation, entertainment

let destinations = ["Key West", "Seattle", "Austin", "Boston"];
let restaurants = ["Steak", "Mexican", "Italian", "Brunch Stuff"];
let transportation = ["bike", "car", "airplane", "submarine"];
let entertainment = ["live music", "fishing", "karate", "yoga"];
let tripFeatures = [
  getRandomElementFromArray(destinations),
  getRandomElementFromArray(restaurants),
  getRandomElementFromArray(transportation),
  getRandomElementFromArray(entertainment),
];

//** Step 2: Randomly select some elements

function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//** Step 3: Write a function to display our generated trip as an alert

function displayTrip(arrayOfFeatures) {
  //** Declare a final variable to be alerted
  let finalString = "";

  //** Iterate through our array of features and build the final string
  for (let index = 0; index < arrayOfFeatures.length; index++) {
    finalString += arrayOfFeatures[index] + "\n";
  }

  //** Alert the final string
  alert(finalString);
}

