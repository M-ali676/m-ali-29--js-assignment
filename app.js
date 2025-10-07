 let isLogin = true;

function toggleForm() {
  const title = document.getElementById("form-title");
  const btn = document.getElementById("submit-btn");
  const switchText = document.querySelector(".switch");

  isLogin = !isLogin;

  if (isLogin) {
    title.innerText = "Login";
    btn.innerText = "Login";
    // switchText.innerHTML = Don’t have an account? <span onclick="toggleForm()">Signup</span>;
  } else {
    title.innerText = "Signup";
    btn.innerText = "Signup";
    // switchText.innerHTML = Already have an account? <span onclick="toggleForm()">Login</span>;
  }
}
 
function togglePassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
