// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var longitud = 0;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '@', '#', '$', '&', '*', '-', '_', '+'];
var password = '';
var combined = [];

function writePassword() {
  password = '';
  combined = [];
  var longitudPrompt = prompt('Select Password length between 8-128 characters: ');
  
    if (longitudPrompt < 8 || longitudPrompt > 128) {
      alert('Password should be 8-128 characters long');
      writePassword();
    } else if (isNaN(longitudPrompt) == true) {
      alert('Input a numeric value');
      writePassword();
    } else {
      longitud = longitudPrompt;
      alert(`You choose :` + longitudPrompt);

      var lowerCaseLetters = confirm('Does the password includes lower case letters?');
      if (lowerCaseLetters) {
        add(lowercase);
        combined = combined.concat(lowercase);
      }

      var upperCaseLetters = confirm('Does the password includes upper case letters?');
      if (upperCaseLetters) {
        add(uppercase);
        combined = combined.concat(uppercase);
      }

      var numericChar = confirm('Does the password includes numbers?');
      if (numericChar) {
        add(numeric);
        combined = combined.concat(numeric);
      }

      var special = confirm('Does the password includes special characters?');
      if (special) {
        add(specialChar);
        combined = combined.concat(specialChar);
      }

      if (combined.length != 0) {
        generate(longitud);
      } else {
        alert('Your password should include numbers, letters or special characters');
        passwordGenerator();
      }

    }
  

}

function add(arr) {
  longitud--;
  for (var i = 0; i < 1; i++) {
    password += arr[Math.floor(Math.random() * arr.length)];
  }
}

function generate(longitud) {
  var passwordText = document.querySelector('#password');
  var i = 0;
  while (i < longitud) {
    password += combined[Math.floor(Math.random() * combined.length)];
    i++;
  }
  passwordText.value = password;
}



