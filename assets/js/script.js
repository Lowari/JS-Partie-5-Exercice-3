const firstName = document.querySelector("#firstName");
const msgErrorName = document.querySelector('#errorName');
const regexFirstName = /[a-z]/i;

const mail = document.querySelector('#email');
const msgErrorMail = document.querySelector("#errorMail");
const regexMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const age = document.querySelector("#age");
const msgErrorAge = document.querySelector("#errorAge");
const regexAge = /[0-9]/i;

const button = document.querySelector("#buttonPass");

const test = document.querySelector("#errorNamee")

// Fonction sur au click du bouton

button.addEventListener("click", function () {
    if (regexFirstName.test(firstName.value) == true) {
        msgErrorName.textContent = "";
    } else {
         msgErrorName.setAttribute("class", "error");
         msgErrorName.textContent = "Erreur saisie ! Ex : Dupont";
    } if (regexAge.test(age.value) == true) {
        msgErrorAge.textContent = "";
    } else {
        msgErrorAge.setAttribute("class", "error");
        msgErrorAge.textContent = "Erreur saisie, veuillez saisir des chiffres";
    } if (regexFirstName.test(mail.value) == true) {
        msgErrorMail.textContent = "";
    } else {
        msgErrorMail.setAttribute("class", "error");
        msgErrorMail.textContent = "Veuillez Respecter le bon format ! Ex : Exemple@mail.fr";
    }
})