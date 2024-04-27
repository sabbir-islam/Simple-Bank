document.getElementById('btn-login').addEventListener('click', function(){
    
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;
    
    const passField = document.getElementById('user-pass')
    const password = passField.value
    
    if(email == 'sabbir3921@gmail.com' && password == 'khulja'){
        window.location.href = "bank.html"
    }
    else{
        alert("Incorrect username or password. Please try again.");
    }
})
