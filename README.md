# Password Generator
Homework Assignment #03 - Javascript: Password Generator

![html badge](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![css badge](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![bootstrap badge](https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white)
![js badge](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

https://www.natemking.dev/pw_generator/

---

## Table of Contents
 * [Description](#description)
    + [Scope of Work](#scope-of-work)
    + [Javascript functionality](#javascript-functionality)
    + [HTML and CSS](#html-and-css)
    + [Reactive Elements](#reactive-elements)
    + [In Summary](#in-summary)
  * [Screenshots](#screenshots)
  * [Credits](#credits)

## Description
---
### Scope of Work
An already constructed webpage fully coded with HTML and CSS was provided. The challenge at hand was to write a JavaScript app that would generate a password based on criteria provided by user input. A small bit of JavaScript was provided but the majority of the app is the developers responsibility. The limited functionality of code that is provided is an event listener for the click of the HTML generate password button. Once that button is clicked the function `writePassword()` is called. This function was also provided. Within this function, another function, `generatePassword()`, is called then that function outputs the value and is sent to the screen via a few short already coded lines. The developers responsibility is to write the `generatePassword()`function to do the the password generation.

### Javascript Functionality
Initially, the `generatePassword()` function starts with a set of prompts for the user to select the criteria of the password that they would like. Five variables are setup to store all of the users selected criteria. The first variable prompts the user to chose a password length within a range of eight to one-hundred twenty-eight characters then stores that chosen number. If the user picks a number outside of that range or a letter, an alert is posted instructing them to choose a number then the script is returned with a message to try again. If the user picks a number within the correct range a series of four `confirm()`'s follows. Each `confirm()` is its own variable requesting what kind of characters the user would like their password to consist of. First lowercase, then uppercase, then numbers, and finally special characters. If all four of the `confirm()`'s are chosen as false, the user gets an alert that they need to choose a least one valid character type and the script is stopped with a return that prompts them to try again. If the user has chosen at least one of the character options the function goes to the next step. 

Next there is a storage variable that is a blank array. This is to hold the output for the randomized characters. Then a for loop is set up with its number of iterations being set to the password length variable provided by the user in the first prompt. Within the for loop, a variable is initialized for each configuration of choices that the user could pick. The first four variables are strings that consist, respectively, of all lowercase, uppercase, numbers, and special characters. Then there are eleven more variables that have all the possible combinations that the user could choose. This is achieved by just concatenating the original four variables in different combinations giving me a total of fifteen combinations. The sixteenth would be choosing no combinations and that possible outcome is covered in the initial users choices. 

Next in the function is a very large if/else conditional. Each if statement looks for the conditionals that have been setup based upon all options in combinations that are available to choose. If the conditional resolves to true then a random letter is chosen based on the previously set combination variables. That letter is then pushed to the storage array variable in the function and the loop repeats until its specified condition is met. Once the loop finishes its iterations the function is returned with the password storage array being converted into a string with the `.join()` method. The rest of the provided script outputs the results to the screen. 

### HTML and CSS
I was lucky in that I figured out a workable solution for the entire app within a few hours of starting the script. I decided to take the pre-constructed design of the provided code and see if I could spice things up a bit. While the given design was practical, it did not feel engaging enough.

At first, I began by looking for a background image. I stumbled upon a simple looking free cybersecurity background image on Pexels. A moment of inspiration came to me while looking at that image. Why not turn the output card of the generator into a computer screen itself? I challenged myself to see if I could use CSS and create an actual laptop on the screen with my generator being that laptops screen. I found the design and result to not take long to code. Soon I realized that the CSS laptop I designed looked terrible on mobile. I had to figure out how to make it appear properly on mobile. Another idea struck! Why not have the laptop turn into a tablet at a certain breakpoint? This was easily achieved by making the body of the laptop invisible at a certain breakpoint via media queries. I even have a home button appear in the bezel of the tablet at that breakpoint. 

I was happy with the aesthetics yet it needed more...

### Reactive Elements
I added an icon of an open lock to the header but that was not enough. I thought it would be more interesting that if when the password was generated the icon changed to a closed lock. I was able to accomplish this by adding a `.classList.toggle()` method within the main `writePassword()` function executing immediately after the password is displayed. This all proved to be extremely challenging to get right due to the nature of how the toggle was working. After a while of struggling, I realized that the toggle was not working due to the order the FontAwesome classes were ordering themselves in the icon tag when `.classList.toggle()` was called. I ended up writing a function called `checkIcon()` that contains an if statement that is called before the `writePassword()` function when the generate button is clicked. `checkIcon()` says "if the icon class does not have the open lock then remove the closed lock and add the opened and closed lock, in that order." Then when the app is finished running, the icon changes from an open lock to a closed one. Thanks to the `checkIcon()` function the lock will return to an open icon every button click. Unfortunately, the generated password would appear before the icons could change. I had to add a timeout of 1ms to the calling of the `writePassword()` function to resolve this issue. Lastly, the icons will not toggle to a closed lock if the users criteria returns 'Try Again'. 

I then decided it would be a benefit to the user if they had a button that would copy the output of the password to their clipboard. I was able to find a simple function on W3 schools that allowed for the output to be copied then posts an alert to let the user know the data is copied. I designed a simple button that is hidden until the password is generated. I added to the generate button click event listener the command to hide the copy button if the user decides to generate a different password without refreshing the page, giving a cleaner look to the app.

After all of this, I still saw an issue in the experience. If the user-generated a password but decided to generate a new password, the original password stayed up in the screen during the next run of prompts. That bothered me. I would rather see the original password clear the screen when the generate button is clicked. What I thought would be a simple solution actually turned out to be more difficult than I expected. In the end, I had to write a function that changes the value of the password box to " " that is called in the generate button click event listener. By changing it to blank the initial placeholder text set in the HTML.


## In summary
The app works as follows...
1. The generate button is clicked and all the following happens:<br>
    a. If there is a previously generated password in the screen, it is cleared<br>
    b. If there is a previously generated password in the screen, the copy to clipboard button is hidden<br>
    c. If there is a previously generated password in the screen, the closed lock icon is reset to an open lock<br>
    d. The function that controls the password generation is called<br>
2. The user is prompted to pick the criteria of which the password is to consist of
3. The criteria is then used by a function to generate a random password based on that criteria
4. The password is then displayed on the screen<br>
    a. The open-lock icon changes to a closed lock to signify a generated password<br>
    b. A copy to clipboard button appears giving the user a convenient way to copy the new password<br>
    
---

## Screenshots


<summary><strong>Large screens:</strong></summary>
<br>

![before password generated](./assets/images/screenshots/desktop-before.jpg?raw=true)
<br>
_before password generated_
<br>

![after password generated](./assets/images/screenshots/desktop-after.jpg?raw=true)
<br>
_after password generated_
<br>



<summary><strong>Mobile screens:</strong></summary>
<br>

![before password generated](./assets/images/screenshots/mobile-before.jpg?raw=true)
<br>
_before password generated_
<br>

![after password generated](./assets/images/screenshots/mobile-after.jpg?raw=true)
<br>
_after password generated_
<br>

---

## Credits
* [Coder Rocket Fuel post on creating a password generator](https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript)

* [Stack Overflow post on how to convert array into a string without commas](https://stackoverflow.com/questions/28007949/how-to-convert-array-into-string-without-comma-and-separated-by-space-in-javascr/28007965)

* [W3 schools tutorial on the `.join()` method](https://www.w3schools.com/jsref/jsref_join.asp)

* [W3 schools tutorial on randomizing in JavaScript](https://www.w3schools.com/js/js_random.asp)

* [Stack Overflow post on how to stop a function early](https://stackoverflow.com/questions/3330193/early-exit-from-function)


* [W3 Schools tutorial on `.isInteger()` method](https://www.w3schools.com/jsref/jsref_isinteger.asp#:~:text=The%20Number.,Otherwise%20it%20returns%20false)


* [Stack Overflow post on hw to create a box with angled sides in CSS.](https://stackoverflow.com/questions/12699210/background-square-with-one-side-at-an-angle)

* [W3 schools tutorial on how to Toggle Class](https://www.w3schools.com/howto/howto_js_toggle_class.asp)

* [Blog post by Atta Comsian on adding, removing, & toggling CSS classes in JavaScript](https://attacomsian.com/blog/javascript-add-remove-toggle-css-classes)

* [Stack overflow post on how to make CSS elements hidden and visible with JavaScript](https://stackoverflow.com/questions/8557119/making-a-button-invisible-by-clicking-another-button-in-html)

* [W3 Schools tutorial on how to get JavaScript to copy to users clipboard](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)

* [Stack Oveflow post on how to clear a `<textarea>` on button clic](https://stackoverflow.com/questions/15968911/how-to-clear-text-area-with-a-button-in-html-using-javascript)

---

GitHub: [@natemking](https://github.com/natemking/)

Email: [natmeking@gmail.com](mailto:natmeking@gmail.com)