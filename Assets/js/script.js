var generateBtn = document.querySelector("#generate");
    function getPassword() {
    
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "0123456789"
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var multiSelect = "";
    var randomKey = "";
    var keyLength = prompt(
        "Your password must be between 8 to 128 characters long, enter your desired number."
    );
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("Your password does not meet the critia. Password must be between 8 and 128 characters in length. Enter another number.");        
        return;

    } else {
    var upperAlpha = confirm("Your password will contain a variety of uppercase letters, click ok to continue");
    var lowerAlpha = confirm("Your password will contain a variety of lowercase letters, click ok to continue");
    var numericOptions = confirm("Your password will contain numbers, click ok to continue");
    var specialSymbols = confirm("Your password will contain a variety of symbols, click ok to continue");
    }

    if (upperAlpha) {multiSelect += uppercaseABC;}
    if (lowerAlpha) {multiSelect += lowercaseABC;}
    if (numericOptions) {multiSelect += numeric;}
    if (specialSymbols) {multiSelect += symbols;}

    for (i = 0; i < keyLength; i++) {

        randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
    }
    return(randomKey);
}
    var passwordText = document.querySelector("#password");
    function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
}
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

    