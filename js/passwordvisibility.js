function togglePasswordVisibility(inputId) {
    var inputField = document.getElementById(inputId);
    var icon = document.querySelector(`[onclick="togglePasswordVisibility('${inputId}')"]`);

    if (inputField.type === "password") {
        inputField.type = "text";
        icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        inputField.type = "password";
        icon.innerHTML = '<i class="fas fa-eye"></i>';
    }
}