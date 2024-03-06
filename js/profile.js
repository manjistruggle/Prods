// profile_script.js

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve username from localStorage
    var username = localStorage.getItem('username');
    
    // Display welcome message with the username
    if (username) {
        var welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent = "Welcome to our platform, " + username + "! We are currently under construction.";
    }
});
