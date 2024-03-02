function togglePasswordVisibility(fieldId) {
    var passwordField = document.getElementById(fieldId);
    passwordField.type = (passwordField.type === "password") ? "text" : "password";
}

function validatePassword() {
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("c-pwd").value;

    if (password !== confirmPassword) {
        // alert("Passwords do not match");
        document.getElementById("passwordCheck").innerHTML = "Passwords do not match";
        return false;
    }

    return true;
}