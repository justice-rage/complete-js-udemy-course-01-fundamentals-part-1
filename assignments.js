// // Values and Variables
// let country = 330000000;
// let continent = 579000000;
// let population = 8000000000;

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// // Data Types
// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // let, const and var
// language = 'english';
// console.log(typeof language);
// // isIsland = true; 

// // Basic Operators
// countrySplitInHalf = country / 2;
// console.log(country + 1);
// finlandPopulation = 6000000;
// isCountryBiggerThanFinland = country > finlandPopulation;
// let description = 'The USA is in North America, and its 330 million people speak english'

// Lecture: Strings and Template Literals
// const countryName = "USA";
// const continent = "North America";
// const countryPopulation = 330;
// const countryLanguage = "english";

// // let description = `The ${countryName} is in ${continent}, and its ${countryPopulation} million people speak ${countryLanguage}.`

// // console.log(description);

// // Lecture: Taking Decisions: if/else Statements

// if (countryPopulation > 33) {
//   console.log(`The ${countryName} has an above average population size.`)
// } else
// console.log(`The ${countryName} has a below average population size.`)

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < '57');
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// let numNeighbors = `1`;

// if (parseInt(numNeighbors) === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border!`);
// } else {
//   console.log(`No borders!`);
// }

// Lecture: Logical Opertors

// const countryName = "USA";
// const continent = "North America";
// const countryPopulation = 330;
// const countryLanguage = "english";
// const isIsland = false;

// // let sarahCountryRequirements = ;

// if (countryLanguage === 'english' && countryPopulation < 50 && isIsland === false) {
//   console.log(`The ${countryName} meets Sarah's requirements.`);
// } else {
//   console.log(`The ${countryName} does not meet Sarah's requirements.`);
// }

// Lecture: The Switch Statement

const language = 'chinese';

switch(language) {
  case 'chinese': // day === 'monday'
    console.log('Most number of native speakers!');
    break;
  case 'spanish':
    console.log('second place in number of native speakers.');
    break;
  case 'english':
    console.log('third place');
    break;
  case 'hindi':
    console.log('fourth place');
    break;
  case 'arabic':
    console.log('fifth most spoken language');
    break;
  default:
    console.log('great language too');
}