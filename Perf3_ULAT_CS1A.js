// VAN REMLEE ULAT
// CS1A


let age = prompt("Enter your age:");
age = parseInt(age);

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

let score = prompt("Enter your score:");
score = parseInt(score);

if (score >= 90) {
  console.log("Your grade is: Excellent");
} else if (score >= 80) {
  console.log("Your grade is: Good");
} else if (score >= 70) {
  console.log("Your grade is: Fair");
} else {
  console.log("Your grade is: Needs Improvement");
}

let day = prompt("Enter a day of the week:");
day = day.toLowerCase();

switch (day) {
  case "monday":
    console.log("Your task for Monday is: Finish your assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Attend meetings.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: Study for exams.");
    break;
  case "thursday":
    console.log("Your task for Thursday is: Work on your project.");
    break;
  case "friday":
    console.log("Your task for Friday is: Review your lessons.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Do house chores.");
    break;
  case "sunday":
    console.log("Your task for Sunday is: Take a rest.");
    break;
  default:
    console.log("Invalid day entered.");
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== correctNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (guess > correctNumber) {
    console.log("Too high!");
  } else if (guess < correctNumber) {
    console.log("Too low!");
  } else {
    console.log("Correct!");
  }
}

const correctPassword = "password123";
let userInput;

do {
  userInput = prompt("Enter your password:");
  if (userInput !== correctPassword) {
    console.log("Incorrect, try again.");
  }
} while (userInput !== correctPassword);

console.log("Access granted.");