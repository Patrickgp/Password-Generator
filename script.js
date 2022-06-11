// Assignment code here
var password = document.getElementById("password");
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
// Default password length
var confirmLength = 8;
// Empty array for password criteria prompts to assemble in
var choiceArray = [];

// functions below initiate prompts confirm or denying the types of characters used in the password
function getCriteria() {
//Reset choiceArray so that it is blank on every use
  choiceArray = [];
// Determine length of password via prompt
  confirmLength = parseInt(window.prompt("Password Length: Please enter a number between 8 - 128."));
  
  if (isNaN(confirmLength) || confirmLength > 128 || confirmLength < 8) {
    window.alert ("You need to provide a valid integer. Please try again.");
    return getCriteria();
  }
  else if (alert("Your password will be " + confirmLength + " digits long."));

// Determine if user wants lower case letters in password
  if (confirm("Did you want to include lower case letters?")) {
    choiceArray = choiceArray.concat(lowerCasedCharacters);
    alert("Lowercase lettering will be included in your password");
  }
  else if (alert("Lowercase lettering will NOT be included in your password"));

// Determine if user wants upper case letters in password
  if (confirm("Did you want to include upper case letters?")) {
    choiceArray = choiceArray.concat(upperCasedCharacters);
    alert("Uppercase lettering will be included in your password");
  }
  else if (alert("Uppercase lettering will NOT be included in your password"));

// Determine if user wants special characters in password
  if (confirm("Did you want to include special characters?")) {
    choiceArray = choiceArray.concat(specialCharacters);
    alert("Special characters will be included in your password");
  }
  else if (alert("Special characters will NOT be included in your password"));

// Determine if user wants numbers in password
  if (confirm("Did you want to include numbers?")) {
    choiceArray = choiceArray.concat(numericCharacters);
    alert("Numbers will be included in your password");
  }
  else if (alert("Numbers will NOT be included in your password"));

  return true;
}

//This function will start the prompts
function generatePassword() {
  var password = "";
  for (var i=0; i < confirmLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctCriteria = getCriteria();

  if (correctCriteria) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
    // run prompts function again
    getCriteria();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
