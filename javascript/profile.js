function getUserData() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        return JSON.parse(userData);
    }
    return null;
}


function displayProfile() {
    const userData = getUserData();
    if (userData) {
        const profileDataDiv = document.getElementById('profileData');
        profileDataDiv.innerHTML = `
            <p><strong>Email:</strong> ${userData.email}</p>
            <!-- Add other profile information here -->
        `;
    } else {
        alert('User not logged in. Redirecting to login page.');
        window.location.href = 'login.html';
    }
}


window.onload = displayProfile;