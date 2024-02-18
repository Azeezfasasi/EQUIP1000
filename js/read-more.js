function toggleReadMore() {
  var moreText = document.getElementById("moreText");
  var btnText = document.querySelector(".read-togle");

  if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      btnText.style.display = "none";
  } else {
      moreText.classList.add("hidden");
  }
}

