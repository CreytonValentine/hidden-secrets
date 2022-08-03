// Assignment code here
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var characterList = ["!", "@", "#", "$", "%", "&", "*",];

function generatePassword() {
  var passwordLength = window.prompt("Enter length of password.");
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must contain 8-28 characters in length.");
  }
  // prompt criteria
  var numbers = window.confirm("Do you want to include numbers in your password?");
  
  var upperCase = window.confirm("Do you want to include upper case letters?");
  
  var lowerCase = window.confirm("Do you want to include lower case letters?");
  
  var characters = window.confirm("Do you want to include characters?");

  var criteriaChoices = [];

  if (numbers === true) {
    criteriaChoices.push(numberList);
  }

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
