let userNameInput = document.getElementById("userNameSignUp")//input kolo
let userEmailInput = document.getElementById("userEmailSignUP")//input kolo
let userPasswordInput = document.getElementById("userPasswordSignUP")//input kolo
let signUpButton = document.getElementById("signUpButton")//input kolo
let success = document.getElementById("success")//input kolo
let checkInput = document.getElementById("checkInput")//input kolo
let signIn = document.getElementById("signIn")//input kolo

let checkExist = document.getElementById("checkExist")


let lists;
if (localStorage.keyInput != null) {
    lists = JSON.parse(localStorage.keyInput)
}
else {
    lists = [];
}

function signUp() {
    userInputsValidation();
    isExist();

    if (userInputsValidation() ==true &&isExist() ==false){
        success.classList.replace("d-none", "d-block")//not working
        signIn.classList.replace("d-none", "d-block")//not working
     }
  
     else{
        checkInput.classList.replace("d-none","d-block")
     }


    let users = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value,
    }
  
//    if (isExist() == true) {
//         // checkExist.innerHTML=`<p>email already exists</p>`
//         checkExist.classList.replace("d-none","d-block")

//     }
    lists.push(users)
    localStorage.setItem("keyInput", JSON.stringify(lists))
 
 
    



}

// function isExist() {
//     for (let i = 0; i < lists.length; i++) {
//         if (lists[i].email == userEmailInput.value) {
//             return false;
//         }



//     }

// }


function isExist(){
    var checkExist=document.getElementById("checkExist")

    for (let i = 0; i < lists.length; i++) {
        if(lists[i].email==userEmailInput.value){
            userEmailInput.classList.remove("is-valid")
            checkExist.classList.replace("d-none","d-block")
            return true;

        }
        else{
            return false;
        }
    }

}








function usernamevalidation() {
    var userNameAlert = document.getElementById("nameAlert")

    var regex = /^[A-Z][a-z/s]{2,10}$/;
    if (regex.test(userNameInput.value) == true && userNameInput.value != "") {

        userNameInput.classList.add("is-valid")
        userNameInput.classList.remove("is-invalid")

        userNameAlert.classList.replace("d-block", "d-none")
        return true;
    }
    else {
        userNameInput.classList.add("is-invalid")
        userNameInput.classList.remove("is-valid")
        userNameAlert.classList.replace("d-none", "d-block")
        return false;
    }

}

function userEmailValidation() {
    var userEmaiAlert = document.getElementById("emailAlert")
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regex.test(userEmailInput.value) == true && userEmailInput.value != "") {

        userEmailInput.classList.add("is-valid")
        userEmailInput.classList.remove("is-invalid")

        userEmaiAlert.classList.replace("d-block", "d-none")
        return true;
    }
    else {
        userEmailInput.classList.add("is-invalid")
        userEmailInput.classList.remove("is-valid")
        userEmaiAlert.classList.replace("d-none", "d-block")
        return false;
    }

}




function userPasswordValidation() {
    var userPasswordAlert = document.getElementById("passAlert")

    var regex = /.{5,15}?/
    if (regex.test(userPasswordInput.value) == true && userPasswordInput.value != false) {
        userPasswordInput.classList.add("is-valid")
        userPasswordInput.classList.remove("is-invalid")

        userPasswordAlert.classList.replace("d-block", "d-none")
        return true;
    }
    else {
        userPasswordInput.classList.add("is-invalid")
        userPasswordInput.classList.remove("is-valid")
        userPasswordAlert.classList.replace("d-none", "d-block")
        return false;
    }
}


function userInputsValidation() {
    usernamevalidation()
    userEmailValidation()
    userPasswordValidation()
    if (usernamevalidation == true && userEmailValidation == true && userPasswordValidation == true) {
        return true;
    }
    else {
        return false;
    }

}
