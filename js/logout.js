function confirmLogout() {
    // Display a confirmation prompt
    var confirmLogout = window.confirm("Are you sure you want to logout?");

    // Check the user's choice
    if (confirmLogout) {
        // If the user clicked OK, perform the logout action
        alert("Logout successful!");
        
        // Redirect to the index page
        window.location.href = "../index.html"; // Replace "index.html" with your actual index page

    } else {
        // If the user clicked Cancel, do nothing or handle accordingly
        alert("Logout canceled.");
    }
}