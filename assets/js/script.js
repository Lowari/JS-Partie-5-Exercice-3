var firstName = document.querySelector("#firstName");
var msgErrorName = document.querySelector('#errorName');

var mail = document.querySelector('#email');
var msgErrorMail = document.querySelector("#errorMail");

var age = document.querySelector("#age");
var msgErrorAge = document.querySelector("#errorAge");

var button = document.querySelector("#buttonPass");

// Fonction pour l'input : Nom

button.addEventListener("click", function () {
    if (firstName.value.match(/[a-z]/i)) {
        msgErrorName.setAttribute("hidden", "true");
    } else {
        msgErrorName.setAttribute("class", "error");
        msgErrorName.removeAttribute("hidden");
    }
})

// Fonction pour l'input : Mail

button.addEventListener("click", function () {
    if (age.value.match(/[0-9]/i)) {
        msgErrorAge.setAttribute("hidden", "true");
    } else {
        msgErrorAge.setAttribute("class", "error");
        msgErrorAge.removeAttribute("hidden");
    }
})

// Fonction pour l'input : Age

button.addEventListener("click", function () {
    if (mail.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
        msgErrorMail.setAttribute("hidden", "true");
    } else {
        msgErrorMail.setAttribute("class", "error");
        msgErrorMail.removeAttribute("hidden");
    }
})