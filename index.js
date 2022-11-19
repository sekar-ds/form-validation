const form = document.getElementById("form");
const username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("Password");
const password2 = document.getElementById("Password check");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkinputs();
})

function checkinputs(){
   //get the value for the inputs
   const usernamevalue = username.value.trim();
   const emailvalue = email.value.trim();
   const passwordvalue = password.value.trim();
   const password2value = password2.value.trim();

   if(usernamevalue === ""){
      //show error
      //add error class
      setErrorFor(username, 'user name cannot be blank')

   }
   else{
      //add success class
      setSuccessFor(username)
   }

   if (emailvalue===''){
      setErrorFor(email , "Email cannot be blank")
   }
   else if(!isEmail(emailvalue)){
      setErrorFor(email, "Email cannot be blank")
   }
   else{
      setSuccessFor(email)
   }
   if(passwordvalue ===''){
      setErrorFor(password,'password cannot be blank ')
   }
   else{
      setSuccessFor(password)
   }
   if(password2value ===''){
      setErrorFor(password2,'password cannot be blank ')
   }
   else if(passwordvalue!==password2value){
      setErrorFor(password2,"password does not match")
   }
   else{
      setSuccessFor(password2)
   }
   
}
function setErrorFor(input,message){
   const formcontrol = input.parentElement;
   const small = formcontrol.querySelector('small');

   //add error message inside small
   small.innerText=message;

   //add error class
   formcontrol.className = 'form-control error'
}

function setSuccessFor(input){
   const formcontrol = input.parentElement;
   formcontrol.className = 'form-control success';
}

