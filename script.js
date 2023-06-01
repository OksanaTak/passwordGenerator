// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordLength= parseInt(prompt("Enter password length(8-128)"))
  if (passwordLength<8|| passwordLength>128 || isNaN(passwordLength)) {
    alert("Your Password must be at least 8 characters and maximum 128 characters long. " + passwordLength + " is invalid.")
    return ;
  }
  var yesUpperCase = confirm("Do you want  to include uppercase alphabets in your password?");
  var lowerCase = confirm("Do you want to include lowercase alphabets in your password?");
  var number = confirm ("Do you want to include numbers in your password?");
  var symbols = confirm ("Do you want to include symbols in your password?");

 var userchoiceCharacters = "";
 if(yesUpperCase) {
  userchoiceCharacters+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 }
 if(lowerCase) {
  userchoiceCharacters+= "abcdefghijklmnopqrstuvwxyz"
 }
 if(number) {
  userchoiceCharacters+= "0123456789"
 }
 if(symbols){
  userchoiceCharacters+= "!@#$%^&*_"
 }
 if(userchoiceCharacters.length<=0){
  alert ("Choose one of the options: Upper Case, Lower Case, Numbers, Symbols");
  return ;

 }
 var password= "";
 for(let i=0; i<passwordLength; i++){
  var index=Math.floor (Math.random() * userchoiceCharacters.length)
  password+=userchoiceCharacters[index]
 }
 return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
