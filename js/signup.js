// signup_script.js

function redirectToProfile() {
    // Simulate sign-up logic (replace with actual registration logic)
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    
    if (username.trim() === "" || email.trim() === "") {
        alert("Please fill out the required fields.");
        return;
    }

    // Store username in localStorage
    localStorage.setItem('username', username);

    // Redirect to the profile page after successful sign-up
    window.location.href = "profile.html";
}
