// An array for a different choice of characters
var generateBtn = document.querySelector("#generate");
var confirmLength;
var confirmSymbol;
var confirmNumber;
var comfirmUpperCase;
var confirmLowerCase;
//An array for symbols, numbers, lowercase and uppercase characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbol = ["'", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var LowerCase = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var UpperCase = ["A", "B", "C", "D", "F", "G", ",H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//An event that allows user to click "Generate Password" 
document.querySelector("#generate").addEventListener("click", writePassword);

//This prompts user to confirm how many characters the user would like in their password
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to be? Please choose bewteen 8-128 cahracters."))
//If cancel is selceted and no parameters for confirmlength is provided, it will return to generate password and prompts will restart
    if (confirmLength == null) {
        return "";
    }
    //If answer is outside the parameters, user will receive the following alert
    if (confirmLength <= 7 || confirmLength >= 127) {
        alert("Password length must be between 8-128 characters. Please try again.");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }
    else {
        //If a length is selected, user will be prompted with to make character selections 
        confirmNumber = confirm("Will your password contain any numbers?");
        confirmSymbol = confirm("Will your password contain any symbols?");
        confirmUpperCase = confirm("Will your password contain any Uppercase letters?");
        confirmLowerCase = confirm("Will your password contain any Lowercase letters?");
    }
    //If the user does not select at least one parameter, they will get an alert and prompts will run again
    if (!confirmUpperCase && !confirmLowerCase && !confirmSymbol && !confirmNumber) {
        alert("You must choose at least ONE parameter!!!");
        var confirmSymbol = confirm("Will your password contain any symbols?");
        var confirmNumber = confirm("Will your password contain any numbers");
        var confirmLowerCase = confirm("Will your password contain any Lowercase letters");
        var confirmUpperCase = confirm("Will your password contain any Uppercase letters");
    } 
    console.log(confirmLength)
    //Identifies the types of characters that have been selected and combines the arrays
    var selectedCharacters = []

    if (confirmSymbol) {
        selectedCharacters = selectedCharacters.concat(symbol)
    }

    if (confirmNumber) {
        selectedCharacters = selectedCharacters.concat(number)
    }

    if (confirmLowerCase) {
        selectedCharacters = selectedCharacters.concat(LowerCase)
    }

    if (confirmUpperCase) {
        selectedCharacters = selectedCharacters.concat(UpperCase)
    }

    console.log(selectedCharacters)

    //Creates a password with selected types of characters at random at the selected length 
    var finalPassword = ""

    for (var i = 0; i < confirmLength; i++) {
        finalPassword = finalPassword + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
        console.log(finalPassword)
    }
    return finalPassword;
}
console.log(finalPassword)
//This Write password to the #password input
function writePassword() {
    var password = generatePassword("Generate Password");
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}