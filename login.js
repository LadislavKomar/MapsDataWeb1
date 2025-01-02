document.getElementById("signupBtn").addEventListener("click", function () {
    document.getElementById("signupPopup").style.display = "block";
  });
  
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var language = document.getElementById("language").value;
    var unit = document.getElementById("unit").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("language", language);
    localStorage.setItem("unit", unit);
  
    document.getElementById("signupPopup").style.display = "none";
  });
  
  function popupRegister() {
    const overlay = document.getElementById("popupRegister");
    overlay.classList.toggle("show");
  }

  function popupSignIn() {
    const overlay1 = document.getElementById("popupSignIn");
    overlay1.classList.toggle("show");
  }