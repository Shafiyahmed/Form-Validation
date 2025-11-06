
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const repassword = document.getElementById("repassword").value.trim();
  const errorMsg = document.getElementById("errorMsg");


  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/;

  if (username === "" || email === "" || password === "" || repassword === "") {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (!usernameRegex.test(username)) {
    errorMsg.textContent = "Username must be 3-16 chars: letters, numbers, or underscore.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  if (!passwordRegex.test(password)) {
    errorMsg.textContent = "Password must be at least 8 chars and include uppercase, lowercase, number, and special character.";
    return;
  }

  if (password !== repassword) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  window.location.href = "curd.html";
});
