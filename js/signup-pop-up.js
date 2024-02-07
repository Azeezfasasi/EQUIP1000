function togglePopup(type) {
  var popupLogin = document.getElementById('popup-login');
  var popupSignup = document.getElementById('popup-signup');

  if (type === 'login') {
    popupLogin.classList.toggle('active');
    popupSignup.classList.remove('active');
  } else if (type === 'signup') {
    popupSignup.classList.toggle('active');
    popupLogin.classList.remove('active');
  }
}