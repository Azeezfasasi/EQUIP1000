function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var buttonText = document.querySelector("button");
  
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      buttonText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      buttonText.innerHTML = "Read More";
    }
  }