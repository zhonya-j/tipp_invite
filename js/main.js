//test

function checkPswd() { 
    var confirmPassword = "20"; 
    var password = document.getElementById("pswd").value; 
    if (password === confirmPassword) { 
        alert("Passwords matched");
        window.location.replace("./page.html");
    } 
    else{ 
        alert("Passwords do not match."); 
    } 
} 


