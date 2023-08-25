let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
   const contactName = document.getElementById('contact-name').value;
   
   // Typo: It should be "length" instead of "lenght"
   if (contactName.length === 0) {
      nameError.innerHTML = 'Name is required';
      return false;
   }
   
   // Typo: It should be "matches" instead of "matche", and the regex needs some corrections
   if (!contactName.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
      nameError.innerHTML = 'Write full name';
      return false;
   }
   
   nameError.innerHTML = '<i class = "fas fa-check-circle"></i>';
   
   return true;
}

function validatePhone(){
    const contactPhone =document.getElementById("contact-phone").value

    if (contactPhone.length == 0) {
      phoneError.innerHTML = 'Phone no is required'  
      return false;
    }
    if (contactPhone.length !== 10) {
        phoneError.innerHTML ='phone no should be 10 digit'
        return false;
    }
    if (!contactPhone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'phone no is required'
        return false;
    }
phoneError.innerHTML = '<i class = "fas fa-check-circle"></i>'
return true;
}

function validateEmail(){
    const contactEmail =document.getElementById("contact-email").value

    if (contactEmail.length == 0) {
      emailError.innerHTML = 'email is required'  
      return false;
    }
    if (!contactEmail.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid'
        return false;
    }
emailError.innerHTML = '<i class = "fas fa-check-circle"></i>'
return true;
}

function validateMessage(){
    const contactMessage =document.getElementById("contact-message").value
    const required = 30;
    const left = required - contactMessage.length;
    if (left > 0) {
      messageError.innerHTML = left + 'email is required'  
      return false;
    }
messageError.innerHTML = '<i class = "fas fa-check-circle"></i>'
return true;
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display ="block"
        submitError.innerHTML = "Please fix error to submit"
        setTimeout(function(){submitError.style.display ="none"},3000)
        return false;
    }
}
