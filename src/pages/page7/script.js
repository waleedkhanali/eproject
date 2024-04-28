function submit(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpassword = document.getElementById("cpassword");
    if(password.value == cpassword.value){
        var user = {
                        email: email.value,
                        password: password.value
                    }
        var json = JSON.stringify(user);
        localStorage.setItem(email.value, json);
        alert("User Created");
        window.location.href = "";
    }
    else{
        alert("Passwords do not match");

    }
}