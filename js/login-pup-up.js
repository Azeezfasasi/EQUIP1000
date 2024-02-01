document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
  });
  document
    .querySelector(".popup .close-btn")
    .addEventListener("click", function () {
      document.querySelector(".popup").classList.remove("active");
    });
  
  function toggle() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  }

// var popup = document.getElementById("popup");
//       var popupTitle = document.getElementById("popup-title");
//       var loginForm = document.getElementById("login-form");
//       var signupForm = document.getElementById("signup-form");

//       document.querySelector("#show-login").addEventListener("click", function () {
//         popup.classList.add("active");
//         popupTitle.innerText = "Login";
//         loginForm.style.display = "block";
//         signupForm.style.display = "none";
//       });

//       function togglePopup(formType) {
//         var blur = document.getElementById("blur");
//         blur.classList.toggle("active");

//         if (formType === 'signup') {
//           popupTitle.innerText = "Sign Up";
//           loginForm.style.display = "none";
//           signupForm.style.display = "block";
//         } else {
//           popupTitle.innerText = "Login";
//           loginForm.style.display = "block";
//           signupForm.style.display = "none";
//         }

//         popup.classList.toggle("active");
//       }