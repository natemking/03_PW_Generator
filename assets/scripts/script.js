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
  //Confirm for lowercase characters in password
  let lower = confirm("Would you like you password to contain lowercase letters?");
  //Confirm for uppercase characters in password
  let upper = confirm("Would you like you password to contain uppercase letters?");
  //Confirm for numerical digits in password
  let nums = confirm("Would you like you password to contain numbers?");
  //Confirm for special characters
  let spChars = confirm("Would you like you password to contain special characters?");
  //if no valid character are selected the user is alerted and function ceases running
  if (!lower && !upper && !nums && !spChars){
    alert("Please choose at least on valid character type!");
    return;
    }
  // loop to generate the password in accordance to selected lengths. 
  for (let i = 0; i < pwLength; i++){

    //variables for character options
    let sym= " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" ;
    //variables options based on user choices
    let onlyLow = !upper && !nums && !spChars;
    let onlyUp = !lower && !nums && !spChars;
    let onlyNums = !lower && !upper && !spChars;
    let onlyChars = !lower && !upper && !nums;
    

    //if only lowercase letters are chosen
    if (lower && onlyLow){
      //select a random lowercase letter
      console.log(String.fromCharCode(Math.floor(Math.random()*26)+97));
    //if only uppercase letters are chosen
    }else if (upper && onlyUp){
      //select a random uppercase letter
      console.log(String.fromCharCode(Math.floor(Math.random()*26)+65));
     //if only numbers are chosen
    }else if (nums & onlyNums){
      //select a random number
      console.log(String.fromCharCode(Math.floor(Math.random()*10)+48));
      //if only special characters are chosen 
    }else if (spChars && onlyChars) {
      //select a random
      console.log(sym[Math.floor(Math.random()*sym.length)]);
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
