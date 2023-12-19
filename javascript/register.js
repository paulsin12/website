function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    var repeatPassword = document.getElementById('psw-repeat').value;

    if (email === '' || password === '' || repeatPassword === '') {
        alert('All fields must be filled out');
        return false;
    }

    if (password !== repeatPassword) {
        alert('Passwords do not match');
        return false;
    }
    
    console.log('Email:', email);
    console.log('Password:', password);

    return true;
}