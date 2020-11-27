// Assignment Code
var generateBtn = document.querySelector("#generate");
var closeLock = document.getElementById("icon");

//*** checkIcon function added by Nate King ***//
//Check to see is the icon is a closed lock. If it is closed, it is changed to an open lock right before the writePassword function is called.
function checkIcon() {
  if (!closeLock.classList.contains("fa-unlock-alt")) {
    closeLock.classList.remove("fa-lock");
    closeLock.classList.add("fa-unlock-alt", "fa-lock");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //*** ALL CODE BELOW ADDED BY NATE KING ***//
  //-----------------------------------------//

  //Toggles FontAwesome icon to a closed lock in card header after the password is generated.
  closeLock.classList.toggle("fa-unlock-alt");
}


function generatePassword() {
  //Prompt user for password length. Must be 8-128 characters. 
  let pwLength = parseInt(prompt("Please choose a password length between 8 and 128 characters?"));
  //if user chooses a number outside of the required range they are alerted and the function ceases running
  if (pwLength < 8 || pwLength > 128) {
    alert("Please try again and choose a number between 8 and 128");
    return "Try again";
    //if user chooses a letter they are alerted and the function ceases running.
  } else if (!Number.isInteger(pwLength)) {
    alert("Please choose a number");
    return "Try Again";
  }

  //Confirm for lowercase characters in password
  let lower = confirm("Would you like your password to contain lowercase letters?");
  //Confirm for uppercase characters in password
  let upper = confirm("Would you like your password to contain uppercase letters?");
  //Confirm for numerical digits in password
  let nums = confirm("Would you like your password to contain numbers?");
  //Confirm for special characters
  let spChars = confirm("Would you like your password to contain special characters?");
  //if no valid character are selected the user is alerted and function ceases running
  if (!lower && !upper && !nums && !spChars) {
    alert("Please choose at least one valid character type!");
    return "Try again";
  }

  //variable to store the random results in
  var password = [];
  // for loop to generate the password in accordance to defined user length 
  for (let i = 0; i < pwLength; i++) {

    //variables for character options]
    let lowAlpha = "abcdefghijklmnopqrstuvwxyz"
    let upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "0123456789"
    let sym = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let lowUp = lowAlpha + upAlpha;
    let lowNum = lowAlpha + numbers;
    let lowChar = lowAlpha + sym;
    let lowUpNum = lowAlpha + upAlpha + numbers;
    let lowUpChar = lowAlpha + upAlpha + sym;
    let lowNumChar = lowAlpha + numbers + sym;
    let all = lowAlpha + upAlpha + numbers + sym;
    let upNum = upAlpha + numbers;
    let upChar = upAlpha + sym;
    let upNumChar = upAlpha + numbers + sym;
    let numChar = numbers + sym;

    //if only lowercase letters are chosen
    if (lower && !upper && !nums && !spChars) {
      //select a random lowercase letter and push it to storage variable
      password.push(lowAlpha[Math.floor(Math.random() * lowAlpha.length)]);
      //if only lowercase & uppercase letters are chosen
    } else if (lower && upper && !nums && !spChars) {
      //select a random character and push it to storage variable
      password.push(lowUp[Math.floor(Math.random() * lowUp.length)]);
      //if only lowercase & numbers are chosen
    } else if (lower && !upper && nums && !spChars) {
      //select a random character and push it to storage variable
      password.push(lowNum[Math.floor(Math.random() * lowNum.length)]);
      //if only lowercase & special characters are chosen
    } else if (lower && !upper && !nums && spChars) {
      //select a random character and push it to storage variable
      password.push(lowChar[Math.floor(Math.random() * lowChar.length)]);
      //if only lowercase & uppercase & numbers are chosen
    } else if (lower && upper && nums && !spChars) {
      //select a random character  and push it to storage variable
      password.push(lowUpNum[Math.floor(Math.random() * lowUpNum.length)]);
      //if only lowercase & uppercase & special characters are chosen
    } else if (lower && upper && !nums && spChars) {
      //select a random character  and push it to storage variable
      password.push(lowUpChar[Math.floor(Math.random() * lowUpChar.length)]);
      //if only lowercase & numbers & special characters are chosen
    } else if (lower && !upper && nums && spChars) {
      //select a random character  and push it to storage variable
      password.push(lowNumChar[Math.floor(Math.random() * lowNumChar.length)]);
      //if all options are chose
    } else if (lower && upper && nums && spChars) {
      //select a random character  and push it to storage variable
      password.push(all[Math.floor(Math.random() * all.length)]);
      //if only uppercase letters are chosen
    } else if (!lower && upper && !nums && !spChars) {
      //select a random uppercase letter and push it to storage variable
      password.push(upAlpha[Math.floor(Math.random() * upAlpha.length)]);
      //if only uppercase & numbers are chosen
    } else if (!lower && upper && nums && !spChars) {
      //select a random character  and push it to storage variable
      password.push(upNum[Math.floor(Math.random() * upNum.length)]);
      //if only uppercase & special characters are chosen
    } else if (!lower && upper && !nums && spChars) {
      //select a random character  and push it to storage variable
      password.push(upChar[Math.floor(Math.random() * upChar.length)]);
      //if only uppercase & numbers & special characters are chosen
    } else if (!lower && upper && nums && spChars) {
      //select a random character  and push it to storage variable
      password.push(upNumChar[Math.floor(Math.random() * upNumChar.length)]);
      //if only numbers are chosen
    } else if (!lower && !upper && nums && !spChars) {
      //select a random number and push it to storage variable
      password.push(numbers[Math.floor(Math.random() * numbers.length)]);
      //if only numbers & special characters are chosen
    } else if (!lower && !upper && nums && spChars) {
      //select a random character and push it to storage variable
      password.push(numChar[Math.floor(Math.random() * numChar.length)]);
      //if only special characters are chosen 
    } else if (!lower && !upper && !nums && spChars) {
      //select a random character and push it to storage variable
      password.push(sym[Math.floor(Math.random() * sym.length)]);
    }
    //returns the password variable and converts array into a string 
  } return password.join('');
}

// Add event listener to generate button. Checks for icon status then pauses before running the writePassword function. Timeout had to be added because the writePassword function was running before the icon could change on the dom. 
generateBtn.addEventListener("click", function () {
  checkIcon();
  setTimeout(() => { writePassword() }, 1);
})
