// Assignment code here
var password = document.getElementById("password");
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// This is console logging randomly selected characters from their arrays
const randomSC = Math.floor(Math.random() * specialCharacters.length);
console.log(randomSC, specialCharacters[randomSC]);

const randomNC = Math.floor(Math.random() * numericCharacters.length);
console.log(randomNC, numericCharacters[randomNC]);

const randomLC = Math.floor(Math.random() * lowerCasedCharacters.length);
console.log(randomLC, lowerCasedCharacters[randomLC]);

const randomUC = Math.floor(Math.random() * upperCasedCharacters.length);
console.log(randomUC, upperCasedCharacters[randomUC]);

// functions below initiate prompts confirm or denying the types of characters used in the password
function confirmLowerCase(lowerCasedCharacters) {
  let confirmLowerCase = confirm("Did you want to include lower case letters?");
  if (confirmLowerCase) {
    alert("Lowercase lettering will be included in your password")
  } else alert("Lowercase lettering will NOT be included in your password")
}

function confirmUpperCase(upperCasedCharacters) {
  let confirmUpperCase = confirm("Did you want to include upper case letters?");
  if (confirmUpperCase) {
  alert("Uppercase lettering will be included in your password")
  } else alert("Uppercase lettering will NOT be included in your password")
}

function confirmSpecialCharacters(specialCharacters) {
  let confirmSpecialCharacters = confirm("Did you want to include special characters?");
  if (confirmSpecialCharacters) {
  alert("Special characters will be included in your password")
  } else alert("Special characters will NOT be included in your password")
}

function confirmNumbers(numericCharacters) {
  let confirmNumbers = confirm("Did you want to include numbers?");
  if (confirmNumbers) {
  alert("Numbers will be included in your password")
  } else alert("Numbers will NOT be included in your password")
}

function passwordLength() {
 var confirmlength = parseInt(window.prompt("Password Length: Please enter a number between 1 - 128."));
  while (confirmlength > 128 || confirmlength < 1) {
    window.alert ("You need to provide a valid integer. Please try again.");
    return passwordLength();
  }
}

//This function will generate the password
function generatePassword() {
  confirmLowerCase(randomLC);
  confirmUpperCase(randomUC);
  confirmSpecialCharacters(randomSC);
  confirmNumbers(randomNC);
  passwordLength();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
