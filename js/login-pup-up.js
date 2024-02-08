function togglePopup(type) {
  var overlay = document.getElementById('overlay');
  var popupLogin = document.getElementById('popup-login');
  var popupSignup = document.getElementById('popup-signup');

  if (type === 'login') {
    popupLogin.classList.toggle('active');
    overlay.classList.toggle('active');
    popupSignup.classList.remove('active');
  } else if (type === 'signup') {
    popupSignup.classList.toggle('active');
    overlay.classList.toggle('active');
    popupLogin.classList.remove('active');
  }
}

// Code to close pop up
function closePopupAndOverlay() {
  var overlay = document.getElementById('overlay');
  var popups = document.querySelectorAll('.popup.active');

  overlay.classList.remove('active');

  popups.forEach(function (popup) {
    popup.classList.remove('active');
  });
}

// Call this function when your link is clicked
document.getElementById('close-popup-link').addEventListener('click', function () {
  closePopupAndOverlay();
});
