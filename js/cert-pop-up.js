// Function to open the modal
function openModal() {
    var modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    var modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.style.display = 'none';
}

// Trigger openModal function when the page loads
window.onload = function() {
    openModal();
};