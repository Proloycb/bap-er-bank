document.getElementById('login-submit').addEventListener('click', function(){
    // email field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;

    // password field

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value ;

    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
    
});