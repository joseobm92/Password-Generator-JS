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

let longitud = 0;
let letrasArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let letrasMayusArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numericoArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let especialesArr = ['!', '@', '#', '$', '&', '*', '-', '_', '+'];
var password = '';
let combinado = [];

function writePassword() {
  password = '';
  let index;
  combinado = [];
  let longitudPrompt = prompt('Input the Length of your password');
  
    if (longitudPrompt < 8 || longitudPrompt > 128) {
      alert('Password should be 8-128 characters long');
      writePassword();
    } else if (isNaN(longitudPrompt) == true) {
      alert('Input a numeric value');
      writePassword();
    } else {
      longitud = longitudPrompt;
      alert(`You choose :` + longitudPrompt);

      let letrasMinusculas = confirm('Does the password includes lower case letters?');
      if (letrasMinusculas) {
        agregar(letrasArr);
        combinado = combinado.concat(letrasArr);
      }

      let letrasMayusculas = confirm('Does the password includes upper case letters?');
      if (letrasMayusculas) {
        agregar(letrasMayusArr);
        combinado = combinado.concat(letrasMayusArr);
      }

      let numerico = confirm('Does the password includes numbers?');
      if (numerico) {
        agregar(numericoArr);
        combinado = combinado.concat(numericoArr);
      }

      let especiales = confirm('Does the password includes special characters?');
      if (especiales) {
        agregar(especialesArr);
        combinado = combinado.concat(especialesArr);
      }

      if (combinado.length != 0) {
        generar(longitud);
      } else {
        alert('Your password should include numbers, letters or special characters');
        passwordGenerator();
      }

    }
  

}

function agregar(arr) {
  longitud--;
  for (var i = 0; i < 1; i++) {
    password += arr[Math.floor(Math.random() * arr.length)];
  }
}

function generar(longitud) {
  let passwordText = document.querySelector('#password');
  var i = 0;
  while (i < longitud) {
    password += combinado[Math.floor(Math.random() * combinado.length)];
    i++;
  }
  passwordText.value = password;
}



