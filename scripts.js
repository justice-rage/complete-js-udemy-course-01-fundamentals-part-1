// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23);

// let firstName = "justice";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'justice');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1995;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1995;
// // birthYear = 1990;

// // const job;

// var job = 'programmer';
// job = 'teacher';

// let lastName = 'douglas';
// console.log(lastName);

// Math Operators
// const now = 2037;
// const ageJustice = now - 1995;
// const ageAmahla = now - 1997;
// console.log(ageJustice, ageAmahla);

// console.log(ageJustice * 2, ageJustice / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Justice";
// const lastName = "Pelteir";
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// x--; // x = x - 1
// console.log(x);

// // Comparison operators
// console.log(ageJustice > ageAmahla); // >, <, >=, <=
// console.log(ageAmahla >= 18);

// const isFullAge = ageAmahla >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJustice = now - 1995;
// const ageAmahla = now - 1997;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJustice + ageAmahla) / 2;
// console.log(ageJustice, ageAmahla, averageAge);

//////////////////////

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), 
// which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). 
// (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables.
// 2. Calculate both their BMIs using the formula.
// 3. Create a boolean variable 'markHigherBMI' containing information 
// about whether Mark has a higher BMI than John. 

// TEST DATA 1: Mark weights 78 kg and is 1.69 m tall.
// John weighs 92 kg and is 1.95 m tall.
// TEST DATA 2: Mark weighs 95 kg and is 1.88 tall.
// John weighs 85 kg and is 1.76 m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / heightJohn ** 2;

// let markHigherBMI = BMImark > BMIjohn;
// console.log("Does Mark have a higher BMI than John?: " + markHigherBMI);
// console.log("John's BMI: " + BMIjohn);
// console.log("Mark's BMI: " + BMImark);

////////////////////////

// const firstName = 'Justice';
// const job = 'teacher';
// const birthYear = 1995;
// const year = 2037;

// const justice = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";
// console.log(justice);

// const justiceNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
// console.log(justiceNew);

// console.log(`Just a regular string...`)

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`string
// multiple
// lines`);

// const age = 15;

// if(age >= 18) {
//   console.log(`Amahla can start driving license 🚗`)
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Amahla is too young. Wait another ${yearsLeft} years.`)
// }

// const birthYear = 1995;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//////////////////////////////

// Coding Challenge #2

/*
Use the BMI example from challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or John's BMI is higher than Mark's!"
2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/

// TEST DATA 1: Mark weights 78 kg and is 1.69 m tall.
// John weighs 92 kg and is 1.95 m tall.
// TEST DATA 2: Mark weighs 95 kg and is 1.88 tall.
// John weighs 85 kg and is 1.76 m tall.

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / heightJohn ** 2;

// let markHigherBMI = BMImark > BMIjohn;

// if (BMImark > BMIjohn) {
//   console.log(`Mark's BMI of ${BMImark} is higher than John's BMI of ${BMIjohn}!`);
// } else {
//   console.log(`John's BMI of ${BMIjohn} is higher than Mark's BMI of ${BMImark}!`);
// }

// console.log("Does Mark have a higher BMI than John?: " + markHigherBMI);
// console.log("John's BMI: " + BMIjohn);
// console.log("Mark's BMI: " + BMImark);

///////////////////////////////

// const inputYear = `1991`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number(`Justice`));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log(`I am ` + 23 + ` years old`);
// console.log(`23` - `10` - 3);
// console.log(`23` * `2`);

// let n = `1` + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, ', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Justice'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 10;
// if(money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job")
// }

// let height = 23;
// if(height) {
//   console.log(`YAY! Height is defined.`);
// } else {
//   console.log(`Height is undefined!`);
// }

const age = 18;
if(age === 18) console.log(`You just became an adult (strict).`);

if(age == 18) console.log(`You just became an adult (loose).`);

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite  === 23) {
  console.log('Cool! 23 is an amazing number');
} else if(favorite === 7) {
  console.log('7 is also a cool number');
} else if(favorite === 9) {
  console.log('9 is also a cool number')
}
else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("why not 23?");