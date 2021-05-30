var password = document.querySelector('#password');
var confirmpassword = document.querySelector('#confirmation');

function myfunction(){
    var password_value = password.value;
    var confirmpassword_value = confirmpassword.value;
    if(password_value !== confirmpassword_value){
        document.querySelector('#password').style.border = "3px solid red";
        document.querySelector('#confirmation').style.border = "3px solid red";
    }
}


  