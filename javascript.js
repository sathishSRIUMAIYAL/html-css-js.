const form=document.querySelector('#form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');


form.addEventListener('submit',(o)=>{
    o.preventDefault()
    validateInputes();
})

function validateInputes(){
    const usernameVal=username.value.trim();
    const emailVAl=email.value.trim();
    const passwordVAl=password.value.trim();
    const confirmpasswordVAl=confirmpassword.value.trim();

    if(usernameVal ===' '){
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    if(emailVAl ===''){
        seterror(email,'email is required')
    }
    else if (!ValidateEmail(emailVAl)){
        seterror(email,'please enter valid email')

    }
    else{
        setsuccess(email)
    }

    if (passwordVAl===''){
        seterror(password,'password is required')
    }
    else if(passwordVAl.length<8){
        seterror(password,'password must be 8 characters')
    }
    else{
        setsuccess(password)
    }
    if (confirmpasswordVAl ===''){
        seterror(confirmpassword,'confirm password is must')
    }
    else if (confirmpasswordVAl !==passwordVAl){
        seterror(confirmpassword,'confirm password is not match')
    }
    else{
        setsuccess
    }


}



function seterror(element,message){
    const input=element.parentElement;
    const errorElememt=input.querySelector('.error')

    errorElememt.innerText=message;
    input.classList.add('error')
    input.classList.remove('success')
}


function setsuccess(element){
    const input=element.parentElement;
    const errorElememt=input.querySelector('.error')

    errorElememt.innerText='';
    input.classList.remove('error')
    input.classList.add('success')
}



function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

