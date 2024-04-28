function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var user = localStorage.getItem(email.value);
    if(user != null){
        
        var user = JSON.parse(user);
        if(user.password == password.value){
            alert("login sucessfully");
        }
        else{
            alert("password not found");
        }
    }
    else{
        alert("User not found");
    }
}