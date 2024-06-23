document.addEventListener('DOMContentLoaded',function(){

    const form = document.getElementById('contactForm');

    form.addEventListener('submit',function(event){

 event.preventDefault();
 if(validateForm()){
    form.submit();
 }

    });

function validateForm(){
 
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
   
    clearErrors();


   if (name == ''){
    showError("nameError", "Name is required","name");
    isValid = false;
   }
    if(email == ''){
        showError("emailError", "Email is required","email");
        isValid = false;
    }
    else if(!validateEmail(email)){
        showError("emailError", "Invalid email format","email");
        isValid = false;
    }
   if(subject == ''){
    showError("subjectError", "Subject is required","subject");
    isValid = false;
   }

   if(message == ''){
    showError("messageError", "Message is required","message");
    isValid = false;
   }


   return isValid;




}

function validateEmail(email){
    const re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function showError(elementId,message, inputId){
    const errorElement = document.getElementById(elementId);
    const inputElement = document.getElementById(inputId);
    errorElement.textContent=message;
    errorElement.style.color = 'red';
    inputElement.style.border = '1px solid red';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputs = document.querySelectorAll('.input');
    errorMessages.forEach(error => error.textContent = '');
    inputs.forEach(input => input.style.border = '1px solid rgb(53, 53, 53)');
}


});

$(document).ready(function() {
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });
    });
    