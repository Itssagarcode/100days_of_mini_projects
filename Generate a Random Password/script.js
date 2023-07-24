const passwordBox = document.getElementById("password");
const button = document.getElementById('btn')
const copyButton = document.getElementById("copy")
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+}{|\/><=-`~[]";
 
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
   let password = ""
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += number[Math.floor(Math.random() * number.length)];
   password += symbol[Math.floor(Math.random() * symbol.length)];

   while(length > password.length){
    password += allChars[Math.floor(Math.random() * upperCase.length)];
   }
   
      passwordBox.value =password;
}
button.addEventListener('click',createPassword)



copyButton.addEventListener('click', () => {
    passwordBox.select();
    if (!navigator.clipboard) {
      // Clipboard API not supported, handle the error or use a fallback method.
      return;
    }
  
    const passwordToCopy = passwordBox.value;
  
    navigator.clipboard.writeText(passwordToCopy)
      .then(() => {
        console.log('Text copied to clipboard successfully.');
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard: ', error);
      });
  });

