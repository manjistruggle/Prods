// login.js

function login() {
    // Retrieve username and password from input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic validation (you may need more robust validation)
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Simulate login logic (replace with actual authentication logic)
    if (username === "example" && password === "password") {
        alert("Login successful!");
        // Redirect to the desired page or perform additional actions
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
