// Assignment code here
var password = document.getElementById("password");

// functions below initiate prompts confirm or denying the types of characters used in the password
function confirmLowerCase() {
  let confirmLowerCase = confirm("Did you want to include lower case letters?");
  if (confirmLowerCase) {
    alert("Lowercase lettering will be included in your password")
  } else alert("Lowercase lettering will NOT be included in your password")
}

function confirmUpperCase() {
  let confirmUpperCase = confirm("Did you want to include upper case letters?");
  if (confirmUpperCase) {
  alert("Uppercase lettering will be included in your password")
  } else alert("Uppercase lettering will NOT be included in your password")
}

function confirmSpecialCharacters() {
  let confirmSpecialCharacters = confirm("Did you want to include special characters?");
  if (confirmSpecialCharacters) {
  alert("Special characters will be included in your password")
  } else alert("Special characters will NOT be included in your password")
}

function confirmNumbers() {
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

confirmLowerCase();
confirmUpperCase();
confirmSpecialCharacters();
confirmNumbers();
passwordLength();

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
