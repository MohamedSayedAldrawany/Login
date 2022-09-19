let userNameInput=document.getElementById("userNameSignUp")//input kolo
let userEmailInput=document.getElementById("userEmailSignUP")//input kolo
let userPasswordInput=document.getElementById("userPasswordSignUP")//input kolo
let signUpButton=document.getElementById("signUpButton")//input kolo
let success=document.getElementById("success")//input kolo
let signIn=document.getElementById("signIn")//input kolo
let checkInput=document.getElementById("checkInput")//input kolo

// events
// userNameInput.addEventListener("keyup",usernamevalidation)
// userEmailInput.addEventListener("keyup",userEmailValidation)
// userPasswordInput.addEventListener("keyup",userPasswordValidation)
// signUpButton.addEventListener("click",signUp)




//the main problem when i look at the local storage it give my undefiend
let userInfo;
if(localStorage.getItem("users")==null){
    userInfo=[]
}
else{
    userInfo=JSON.parse(localStorage.getItem("users"))

}



function signUp(){
    userInputsValidation()
    isExist()
    if(userInputsValidation()==true&& isExist()==false){
        var users={
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value,
            }
    
            userInfo.push(users)  //array of object json
            localStorage.setItem("users",JSON.stringify(userInfo))
            success.classList.add("d-block")//not working
            signIn.classList.replace("d-none","d-block")//not working

    }
    else{
        checkInput.classList.replace("d-none","d-block")
        success.classList.remove("d-block")//not working


    }
  


    }

function usernamevalidation(){
    var userNameAlert=document.getElementById("nameAlert")

    var regex= /^[A-Z][a-z/s]{2,10}$/;
    if(regex.test(userNameInput.value)==true && userNameInput.value!=""){

        userNameInput.classList.add("is-valid")
        userNameInput.classList.remove("is-invalid")
        
        userNameAlert.classList.replace("d-block","d-none")
        return true;
    }
    else{
        userNameInput.classList.add("is-invalid")
        userNameInput.classList.remove("is-valid")
        userNameAlert.classList.replace("d-none","d-block")
        return false;
    }

}

function userEmailValidation(){
    var userEmaiAlert=document.getElementById("emailAlert")
    var regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(regex.test(userEmailInput.value)==true && userEmailInput.value!=""){

        userEmailInput.classList.add("is-valid")
        userEmailInput.classList.remove("is-invalid")
        
        userEmaiAlert.classList.replace("d-block","d-none")
        return true;
    }
    else{
        userEmailInput.classList.add("is-invalid")
        userEmailInput.classList.remove("is-valid")
        userEmaiAlert.classList.replace("d-none","d-block")
        return false;
    }

}

    
    

    function userPasswordValidation(){
        var userPasswordAlert=document.getElementById("passAlert")

        var regex=/.{5,15}?/
        if(regex.test(userPasswordInput.value)==true&&userPasswordInput.value !=""){
            userPasswordInput.classList.add("is-valid")
            userPasswordInput.classList.remove("is-invalid")
            
            userPasswordAlert.classList.replace("d-block","d-none")
            return true;
        }
        else{
            userPasswordInput.classList.add("is-invalid")
            userPasswordInput.classList.remove("is-valid")
            userPasswordAlert.classList.replace("d-none","d-block")
            return false;
        }
    }

   









function userInputsValidation(){
    usernamevalidation()
    userEmailValidation()
    userPasswordValidation()
    if(usernamevalidation==true&&userEmailValidation==true&&userPasswordValidation==true){
        return true;
    }
    else{
        return false;
    }

}
function isExist(){
    var checkExist=document.getElementById("checkExist")

    for (let i = 0; i < userInfo.length; i++) {
        if(userInfo[i].email==userEmailInput.value){
            userEmailInput.classList.remove("is-valid")
            checkExist.classList.replace("d-none","d-block")
            return true;

        }
        else{
            return false;
        }
    }

}

function login(){
var userName=localStorage.getItem("sessionUserName")

    var loginEmail=document.getElementById("logInEmail")
    var logInPass=document.getElementById("logInPass")
    var fillMsg=document.getElementById("fillMsg")
    var loginBtn=document.getElementById("loginBtn")
    var checkLogin=document.getElementById("checkLogin")
    if(loginEmail.value==""||logInPass.value==""){
        fillMsg.classList.replace("d-none","d-block")
        return false;

    }
for (let i = 0; i < userInfo.length; i++) {
    if(userInfo[i].email.toLoweCase()==loginEmail.value.toLoweCase()
    && userInfo[i].password.toLoweCase()==logInPass.value.toLoweCase()){
        localStorage.setItem("sessionUserName",userInfo[i].name)//msh fahmha
        loginBtn.setAttribute("href","welcome.html")
        

    } 
    else{

        checkLogin.classList.replace("d-none","d-block")
    } 
    
}
    

}
function displaywelcome()
{

    document.getElementById("message").innerHTML="welcome"+userName
}
function logout(){
    localStorage.removeItem("sessionUserName")
}

