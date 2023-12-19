function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const userData = JSON.parse(localStorage.getItem(username));

    if (userData && userData.password === password) {
        alert("Login successful!");
       
        alert("Invalid username or password. Please try again.");
    }
}
