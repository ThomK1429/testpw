var generateBtn = document.querySelector("#generate");
          var specialCharacters = ["@","%","+","\\","/","'", "!","#","$","^", "?",":", ",",")","(","}","{", "]","[","~","-","_", ".",];
          var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          var lowerCasedCharacters = ["a","b","c","d","e","f","g","h", "j","k","l","m","n","o","p","q","r", "s", "t","u","v","w","x", "y","z"];        
          var upperCasedCharacters = ["A","B", "C","D","E","F", "G","H", "I","J","K","L","M", "N","O","P","Q","R","S","T", "U","V","W","X","Y","Z",];            
          var generateBtn=document.getElementById("#generate");
          var generateBtn = document.querySelector("#generate");

           //  generate button event listener
          generateBtn.addEventListener("click", Password);
          
          function Password() {
            var password = generatepassword();
            var passwordtext = document.querySelector("#password");
            passwordtext.value = password;
          }
          // Function to generate password 
          function generatepassword() {
            
            //Varialable to store user input object by calling yourFuncForUserInput
            var userChar = yourFuncForUserInput();
          
            var finalPassword = [];
          
            var possibleCharacters = [];
          
            var guaranteedCharacters = [];
          
            var randomGuaranteedChar;
          
            if (userChar.specialChar){
              possibleCharacters.push(specialCharacters);
          
              randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);
          
              guaranteedCharacters.push(randomGuaranteedChar);
            }
          
          
            if (userChar.numChar){
              possibleCharacters.push(numericCharacters);
          
             randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);
          
              guaranteedCharacters.push(randomGuaranteedChar);
            }
          
            if (userChar.lowerChar){
              possibleCharacters.push(lowerCasedCharacters);
          
          
              randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);
          
              guaranteedCharacters.push(randomGuaranteedChar);
            }
              
          
            if (userChar.upperChar){
              possibleCharacters.push(upperCasedCharacters);
          
          
              randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);
          
              guaranteedCharacters.push(randomGuaranteedChar);
            }
                  
            for (i = 0; i < ((userChar.password) - (possibleCharacters.length)); i++){
          
              var randomArray = yourFuncForRandomChar(possibleCharacters);
            
          
              var randomIndexVal = yourFuncForRandomChar(randomArray);
          
              finalPassword.push(randomIndexVal);
            }
          
            finalPassword = finalPassword.concat(guaranteedCharacters);
          
            return finalPassword.join('');
          }
          
          function yourFuncForUserInput() {
            var Length = prompt("How many characters would you like to include?");
          
            if (!(Length >= 8 && Length <= 128)){
              alert("That is not a valid input. Please enter between 8 and 128 characters.");
              return;
            }
          
            var specialCharacter = confirm ("Do you want to include special characters?");
          
            var numeric = confirm ("Do you want to include numeric values?");
          
            var lowercase = confirm ("Do you want to include lowercase characters?");
          
            var uppercase = confirm ("Do you want to include uppercase characters?");
          
            if(!lowercase && !uppercase && !numeric && !specialCharacter){
              alert ("You must choose at least one data type for your password. Please try again.")
              return;
            }
          
            // Store userinput using object
            var userInput = {specialChar: specialCharacter, numChar: numeric, lowerChar: lowercase, upperChar: uppercase, password:  Length};
          
            //  Return userinput using object
            return userInput;
          }
          function yourFuncForRandomChar(arr) {
          
            var randomNumber = Math.floor(Math.random() * arr.length);
          
            
            var randomElement = arr[randomNumber];
          
            // returning random elment 
            return randomElement;
          }
          