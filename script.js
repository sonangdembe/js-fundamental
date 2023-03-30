let submitButton = document.getElementById("submitButton");
let errors = {
  
};
submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupForm = document.forms["signupForm"];
    //console.log(signupForm);
  let fristNameInput =signupForm.fristName;
  let lastNameInput = signupForm.lastName
 // console.log(fristNameInput.value);

if(fristNameInput.value == ""){
  errors.fristName = 'FristName should not be empty';
  
}
if(lastNameInput.value == ""){
  errors.lastName = 'lastName should not be empty';
  
}
console.log(errors);
for (let error in errors){

}
});


// let fristNameGroup = document.getElementById('fristNameGroup');
// let fristNameMessage = document.querySelector('#fristNameGroup .message');
// fristNameGroup.classList.add("error");
// fristNameMessage.textContent ="FristName should not be empty";

// let lastNameGroup = document.getElementById('lastNameGroup');
//   let lastNameMessage = document.querySelector('#lastNameGroup .message');
//   lastNameGroup.classList.add("error");
//   lastNameMessage.textContent ="lastName should not be empty";