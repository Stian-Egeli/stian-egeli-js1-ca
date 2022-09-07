const form = document.querySelector("#formContainer");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adress-error");
const validationPass = document.querySelector(".validationPass")

function validateForm (event){
    event.preventDefault();

    
    
    if(checkLength(name.value, 0) === true){
        nameError.style.display = "none";
        var namePass = true;
    }
    else {
        nameError.style.display = "block";
        var namePass = false;
    }
    
    if (checkLength(subject.value,  9) === true){
        subjectError.style.display = "none";
        var subjectPass = true;
    }
    else {
        subjectError.style.display = "block";
        var subjectPass = false;
    }

    if (checkLength(adress.value,  24) === true){
        adressError.style.display = "none";
        var adressPass = true;
    }
    else {
        adressError.style.display = "block";
        var adressPass = false;
    }

    if (checkEmail(email.value) === true){
        emailError.style.display = "none";
        var emailPass = true;
    }
    else {
        emailError.style.display = "block";
        var emailPass = false;
    }

    if (namePass === true && subjectPass === true && adressPass === true && emailPass === true){
        validationPass.style.display = "block";
    }
    else {
        validationPass.style.display = "none";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, req){
    if (value.trim().length > req){
        return true;
    }
    else {
        return false;
    }
}

function checkEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailMatch = regEx.test(email);
    return emailMatch;
}

// form.onsubmit = function(){
    
//     event.preventDefault();

//     console.log(event);

//     const name = document.querySelector("#name");

//     console.log(name.value);
// }