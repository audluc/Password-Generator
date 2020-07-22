//special chars array
const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//numeric chars array
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//lower case chars array
const lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function passwordOptions() {
    let passwordLength = prompt("How many characters?");
    let numericCharacters = confirm("Do you want numeric?");
    let lowerCaseCharacters = confirm("Do you want lowercase characters?");
    let upperCaseCharacters = confirm("DO you want uppercase characters?");
    let specialCharacters = confirm("Do you want special characters?");
    let options = {
        lengthPwd: passwordLength,
        numeric: numericCharacters,
        lower: lowerCaseCharacters,
        upper: upperCaseCharacters,
        special: specialCharacters,
    }
    return options;
}
function generatePassword() {
    let options = passwordOptions();
    console.log(options)
    let temp = []
    let final = []
    if (options.numeric === true) {
        temp = temp.concat(numericChars)
    }
    if (options.lower === true) {
        temp = temp.concat(lowerCasedChars)
    }
    if (options.upper === true) {
        temp = temp.concat(upperCasedChars)

        if (options.special === true) {
            temp = temp.concat(specialChars)
        }
        for (let index = 0; index < parseInt(options.lengthPwd); index++) {
            final.push(random(temp))
        }
        console.log(temp)
        console.log(final)
    }
    return final.join("")
}


function random(array) {
    let index = Math.floor(Math.random() * array.length)
    return array[index]
}

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
