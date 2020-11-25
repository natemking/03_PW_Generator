// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// 6. At least one of the character types above must be selected to proceed
// 7. When all prompts are selected a password will be generated. 

function generatePassword() {
  //Prompt user for password length. Must be 8-128 characters. 
  let pwLength = prompt("Please choose a password length? Minimum 8, Maximum 128 characters");
  //if user chooses a number outside of the required range they are alerted and the function ceases running
  if (pwLength < 8 || pwLength > 128){
    alert("Please try again and choose a number between 8 and 128");
    return;
  }
  // 2. Confirm for lowercase characters in password
  let lower = confirm("Would you like you password to contain lowercase letters?");
  // 3. Confirm for uppercase characters in password
  let upper = confirm("Would you like you password to contain lowercase letters?");
  // 4. Confirm for numerical digits in password
  let nums = confirm("Would you like you password to contain numbers?");
  // 5. Confirm for special characters
  let spChars = confirm("Would you like you password to contain special character?");
  //if no valid character are selected the user is alerted and function ceases running
  if (!lower && !upper && !nums && !spChars){
    alert("Please choose at least on valid character type!");
    return;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
