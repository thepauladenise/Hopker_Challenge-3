// Assignment Code - Define password's needs: characters, length, 
var generateBtn = document.querySelector("#generate");

//Define password characters
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var generatePassword;
var yesUppercase;
var yesLowercase;
var yesSpecialChar;
var yesNums;
var pwLength;
var writePassword;
var generatePassword;
var passwordText;
var password;

// Write password to the #password input
function writePassword() {
  //prompt and constraints for pasword length
  function generatePassword () {
    var pwLength = prompt("How many characters would like your new password to have?");
    if (!pwLength) {
    alert("Oops, did you forget to add a number?");
    }

    else if (pwLength < 8 || pwLength > 128) {
      passwordLength = generate.onclick(prompt("Sorry, love. You must choose between 8 and 128"));
    }

    else {
      //prompts for character types
      yesUppercase = confirm("Would you like a dash of uppercase letters? Hit \"Okay\" for Yes and \"Cancel\" for No.");
      yesLowercase = confirm("How about those lowercase letters? Hit \"Okay\" for Yes and \"Cancel\" for No.");
      yesSpecialChar = confirm("Make it spicy and add a sprinkle of special characters? Hit \"Okay\" for Yes and \"Cancel\" for No.");
      yesNums = confirm("Counting on some numbers? Hit \"Okay\" for Yes and \"Cancel\" for No.");
    };
    
    //If user selects no on all four
    function pwLength() {
      if (!yesUppercase && !yesLowercase && !yesSpecialChar && !yesNums) {
      result = alert("Sorry, ya gotta choose at least one of these fellas.");
      }
    
    //If user selects yes on all four
    else if (yesUppercase && yesLowercase && yesSpecialChar && yesNums) {
          result = lowCase.concat(upCase, specialChar, nums);
      } 
        
    //If user selects yes for 3 options
    else if (yesUppercase && yesLowercase && yesSpecialChar) {
          result = upCase.concat(lowCase, specialChar);
      }
    
    else if (yesUppercase && yesLowercase && yesNums) {
          result = upCase.concat(lowCase, nums);
      }

    else if (yesUppercase && yesSpecialChar && yesNums) {
          result = upCase.concat(specialChar, nums);
      }

    else if (yesLowercase && yesSpecialChar && yesNums) {
          result = lowCase.concat(specialChar, nums);
      }

    //If user selects yes for 2 options
    else if (yesUppercase && yesLowercase) {
          result = upCase.concat(lowCase);
      }

    else if (yesUppercase && yesSpecialChar) {
          result = upCase.concat(specialChar);
      }

    else if (yesUppercase && yesNums) {
          result = upCase.concat(nums);
      }

    else if (yesLowercase && yesSpecialChar) {
          result = lowCase.concat(specialChar);
      }

    else if (yesLowercase && yesNums) {
          result = lowCase.concat(nums);
      }

    else if (yesSpecialChar && yesNums) {
          result = specialChar.concat(nums);
      }
    
    //If user selects yes for 1 option
    else if (yesUppercase) {
          result = upCase;
    }

    else if (yesLowercase) {
          result = lowCase;
    }

    else if (yesSpecialChar) {
          result = specialChar;
    }

    else {
          result = nums;
    };
  }
    
  //Generating password
  //Array from user
  var password = [];

  //let's randomize these things
  for (i=0; i<pwLength; i++) {
    passwordMix = pwLength(Math.floor(Math.random * pwLength.length));
  }
    
  // Converts password array to a string
    password = passwordMix.join("");
    UserInput(password);
    return (password);
  }

  // This puts the generated password into the html textbox
    passwordText = generatePassword(password);
    passwordText.value = password;

    passwordText = document.querySelector("#password");
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

