// target form input elements
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// target the form element
const formElement = document.querySelector("#sign-up-form");

const onSubmit = function (event) {
  event.preventDefault();
  console.log("submit");

  // get all data from in put elements
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // construct the object in JS to store in LS
  const userObject = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  console.log(userObject);

  // write data into LS
};

//add submit event listener
formElement.addEventListener("submit", onSubmit);
