//pretty checkboxes
$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_minimal-red',
    radioClass: 'iradio_minimal-red',
    increaseArea: '100%' // optional
  });
});

//e-mail en form stuff
let popPage = document.querySelector(".pop");
let form = document.querySelector("#buy_form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  // avoid default behavior
  event.preventDefault();
  
// store variables
let emailGroup = document.querySelector(".form__group--email");
let emailInput = document.querySelector("#email");
let email = emailInput.value;
let passwordGroup = document.querySelector(".form__group--password");
let passwordInput = document.querySelector("#password");
let password = passwordInput.value;
let CardGroup = document.querySelector(".form__group--card");
let cardInput = document.querySelector("#Card_Number");
let card = cardInput.value;


// reset parameters
let emailHasError = false;
let passwordHasError = false;
let CardHasError = false;
emailGroup.classList.remove("error");
passwordGroup.classList.remove("error");
CardGroup.classList.remove("error");

//check the e-mail
if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
  emailHasError = true;
  emailGroup.classList.add("error");
}
// check for min length 4 for password
if (password.length < 4) {
  passwordHasError = true;
  passwordGroup.classList.add("error");
}
// check the card number
if (card.length < 5) {
  CardHasError = true;
  CardGroup.classList.add("error");
}
// check all groups
if (
  card === "11231963" &&
  password === "Password" &&
  emailHasError === false &&
  passwordHasError === false &&
  CardHasError === false

) {
  doPop();
}
}
function doPop() {
  // pop in the congrats screen
  popPage.classList.remove("hidden");    
}