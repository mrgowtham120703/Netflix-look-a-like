let db = [];

let userName = document.getElementById("yourName");
let userPass = document.getElementById("passWord");
let userPassverify = document.getElementById("confirmPassword");
let userPassbtn = document.getElementById("userSubmit");

userPassverify.addEventListener("input", ()=>{
    if(userPass.value == userPassverify.value){
        userPassverify.style.borderColor = "green";
        userPass.style.borderColor = "green";
    }else{
        userPassverify.style.borderColor = "red";
        userPass.style.borderColor = "red";
    }
})
userName.addEventListener("focusout", ()=>{
    if(userName.value.length == 0){
        userName.style.borderColor = "red";
    }else{
        userName.style.borderColor = "green"; 
    }
})
userPass.addEventListener("focusout", ()=>{
    if(userPass.value.length == 0){
        userPass.style.borderColor = "red";
    }else{
        userPass.style.borderColor = "green";
    }
})
userPassverify.addEventListener("focusout", ()=>{
    if(userPassverify.value.length == 0){
        userPassverify.style.borderColor = "red";

    }else{
        userPassverify.style.borderColor = "green";
    }
})
userPassbtn.addEventListener("click", ()=>{
    let userValue = userName.value;
    let pass = userPass.value;
    let repass = userPassverify.value;

    let userObj = {
        "user" : userValue,
        "password" : pass

    }
     if(userValue.length === 0 || pass.length === 0 || repass.length === 0){
        alert("Please Fill in all fields.")
    }else if(pass === repass){
        db.push(userObj)
        alert("Register Successfull!.")
    }else{
        alert("Invalid Password : Enter correct password.")
    }
})
let uName = document.getElementById("emailText");
let uPass = document.getElementById("pass");
let usignin = document.getElementById("userSignin");

uName.addEventListener("focusout", ()=>{
    if(uName.value.length == 0){
        uName.style.borderColor = "red";
    }else{
        uName.style.borderColor = "green";
    }
})
uPass.addEventListener("focus", ()=>{
    if(uPass.value.length == 0){
        uPass.style.borderColor = "red";
    }else{
        uPass.style.borderColor = "green";
    }
})
const userSignin = document.getElementById("userSignin");

userSignin.addEventListener("click", ()=>{
   const userId = document.getElementById("emailText").value.trim();
   const userPassword = document.getElementById("pass").value.trim();

   if(userId.length === 0 || userPassword.length === 0){
        alert("Please Fill in all fields.");
    }else if(userId == "gowtham" && userPassword == "12345"){
        alert("Login Sucessfull!.");
    }else{
        alert("Invalid Username or Password")
    }

})