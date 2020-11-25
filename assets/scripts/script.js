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

  //variable to store the random results in
  var password = []; 
  // loop to generate the password in accordance to selected lengths. 
  for (let i = 0; i < pwLength; i++){

    //variables for character options]
    let lowAlpha = "abcdefghijklmnopqrstuvwxyz"
    let upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "0123456789"
    let sym = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" ;
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


    //variables options based on user choices
    let onlyLow = !upper && !nums && !spChars;
    let onlyUp = !lower && !nums && !spChars;
    let onlyNums = !lower && !upper && !spChars;
    let onlyChars = !lower && !upper && !nums;

    //if only lowercase letters are chosen
    if (lower && onlyLow){
      //select a random lowercase letter and push it to storage variable
      password.push(lowAlpha[Math.floor(Math.random()*lowAlpha.length)]);
    //if only lowercase & uppercase letters are chosen
    }else if (lower && upper && !nums && !spChars) {
      //select a random character and push it to storage variable
     password.push(lowUp[Math.floor(Math.random()*lowUp.length)]);
     //if only lowercase & numbers are chosen
    }else if (lower && !upper && nums && !spChars) {
      //select a random character and push it to storage variable
     password.push(lowNum[Math.floor(Math.random()*lowNum.length)]);
     //if only lowercase & special characters are chosen
    }else if (lower && !upper && !nums && spChars) {
      //select a random character and push it to storage variable
     password.push(lowChar[Math.floor(Math.random()*lowChar.length)]);
     //if only lowercase & uppercase & numbers are chosen
    }else if (lower && upper && nums && !spChars) {
      //select a random character  and push it to storage variable
     password.push(lowUpNum[Math.floor(Math.random()*lowUpNum.length)]);
    //if only lowercase & uppercase & special characters are chosen
    }else if (lower && upper && !nums && spChars) {
      //select a random character  and push it to storage variable
     password.push(lowUpChar[Math.floor(Math.random()*lowUpChar.length)]);
    //if only lowercase & numbers & special characters are chosen
    }else if (lower && !upper && nums && spChars) {
      //select a random character  and push it to storage variable
     password.push(lowNumChar[Math.floor(Math.random()*lowNumChar.length)]);
    //if all options are chose
    }else if (lower && upper && nums && spChars) {
      //select a random character  and push it to storage variable
     password.push(all[Math.floor(Math.random()*all.length)]);
     //if only uppercase letters are chosen
    }else if (upper && onlyUp){
      //select a random uppercase letter and push it to storage variable
      password.push(upAlpha[Math.floor(Math.random()*upAlpha.length)]);
    //if only numbers are chosen
    }else if (nums & onlyNums){
      //select a random number and push it to storage variable
      password.push(numbers[Math.floor(Math.random()*numbers.length)]);
    //if only special characters are chosen 
    }else if (spChars && onlyChars) {
      //select a random character and push it to storage variable
     password.push(sym[Math.floor(Math.random()*sym.length)]);
    }
  //returns the password variable then returns array as a string 
  }return password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
