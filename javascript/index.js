function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    
    localStorage.setItem(username, JSON.stringify({ username, password }));

    alert("Registration successful! You can now log in.");
}