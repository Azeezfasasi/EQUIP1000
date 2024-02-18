// Add event listeners to each input field
document.getElementById('digit1').addEventListener('input', moveToNextInput);
document.getElementById('digit2').addEventListener('input', moveToNextInput);
document.getElementById('digit3').addEventListener('input', moveToNextInput);

// Function to move to the next input field
function moveToNextInput() {
    const currentInput = this;
    const maxLength = parseInt(currentInput.getAttribute('maxlength'), 10);
    const nextInputId = 'digit' + (parseInt(currentInput.id.charAt(5)) + 1);

    if (currentInput.value.length === maxLength) {
        const nextInput = document.getElementById(nextInputId);
        if (nextInput) {
            nextInput.focus();
        }
    }
}

// Function to handle the confirmation (you can replace this with your actual confirmation logic)
function confirmCode() {
    // alert('Code confirmed!');
    document.getElementById("codeConfirmation").innerHTML = "Code confirmed!",
    // You can uncomment the line below to submit the form to "confirm.html"
    document.getElementById('verificationForm').submit();
}