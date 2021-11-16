"use strict"
//* Step 1: Create four arrays for destination, restaurants, transporation, entertainment

let destinations = ['NYC', 'Philly', 'Boston', 'Upstate'];
let restaurants = ['Mexican', 'Thai', 'Indian','Ethiopian'];
let transportation = ['Train','Car','Bike','Bus'];
let entertainment = ['Hike','Food tour','Museum','Concert'];
let tripFeatures = [
  getRandomElementFromArray(destinations),
  getRandomElementFromArray(restaurants),
  getRandomElementFromArray(transportation),
  getRandomElementFromArray(entertainment),
];

//* Step 2: Randomly select some elements

function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//* Step 3: Write a function to display our generated trip as an alert

function displayTrip(arrayOfFeatures) {
  //* Declare a final variable to be alerted
  let finalString = "";

  //* Iterate through our array of features and build the final string
  for (let index = 0; index < arrayOfFeatures.length; index++) {
    finalString += arrayOfFeatures[index] + "\n";
  }

  //* Alert the final string
  alert(finalString);
}

//* Step 4: Orchestrate the whole programmatic flow with option to reselect

function app() {
  let userSatisfied = false;
  while (userSatisfied === false) {
    //* Step 1: Show user initial trip
    displayTrip(tripFeatures);
    //* Step 2: Prompt user for trip satisfaction
    let userInput = prompt("Are you satisfied with the trip? YES or NO");
    //* Step 3: Based on response from user, send them down some conditionals!!!!
    if (userInput === "YES") {
      userSatisfied = true;
      displayTrip(tripFeatures);
    } else {
      reselectTripFeatures();
    }
  }
}

function reselectTripFeatures() {
  let userInput = prompt(
    "Which feature would you like to change? \n 1 for Destination\n 2 for Restaurant\n 3 for Transporation\n 4 for Entertainment\n "
  );
  switch (userInput) {
    case "1":
      tripFeatures[0] = getRandomElementFromArray(destinations);
      break;
    case "2":
      tripFeatures[1] = getRandomElementFromArray(restaurants);
      break;
    case "3":
      tripFeatures[2] = getRandomElementFromArray(transportation);
      break;
    case "4":
      tripFeatures[3] = getRandomElementFromArray(entertainment);
      break;
    default:
      alert("Please enter a number 1-4 instead!");
      reselectTripFeatures();
  }
}

app();

