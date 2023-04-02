let submitButton = document.getElementById("submitButton");
let errors = {
  
};
submitButton.addEventListener("click",function(e){
    e.preventDefault();
    errors = {};
    let signupForm = document.forms["signupForm"];
    //console.log(signupForm);
  let fristNameInput =signupForm.fristName;
  let lastNameInput = signupForm.lastName;
  let emailAddressInput = signupForm.emailAddress;
  let passwordInput= signupForm.password;
 // console.log(fristNameInput.value);

if(fristNameInput.value == ""){
  errors.fristName = 'FristName should not be empty';
  
}
if(lastNameInput.value == ""){
  errors.lastName = 'lastName should not be empty';
  
}
if(emailAddressInput.value == ""){
  errors.email = 'Email should not be empty';
}
if(passwordInput.value <=5){
  errors.password = 'password should not be empty';
}

console.log(errors);
for (let error in errors) {  
let lastNameGroup = document.getElementById(`${error}Group`);
let lastNameMessage = document.querySelector(`#${error}Group .message`);
lastNameGroup.classList.add("error");
lastNameMessage.textContent =errors[error];

}
if(Object.keys(errors).length == 0 ){
signupForm.submit();
}
});


// let fristNameGroup = document.getElementById('fristNameGroup');
// let fristNameMessage = document.querySelector('#fristNameGroup .message');
// fristNameGroup.classList.add("error");
// fristNameMessage.textContent ="FristName should not be empty";

