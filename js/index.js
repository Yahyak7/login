function showSignUp() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("welcomePage").style.display = "none";
  }
  
  function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("welcomePage").style.display = "none";
  }
  
  function showWelcome(name) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
    document.getElementById("welcomeMessage").textContent = `Welcome ${name}`;
  }
  
  function signup() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const signupMessage = document.getElementById("signupMessage");
  
    if (!name || !email || !password) {
      signupMessage.textContent = "Please fill in all fields!";
      signupMessage.style.color = "red";
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.find((user) => user.email === email)) {
      signupMessage.textContent = "Email is already registered!";
      signupMessage.style.color = "red";
      return;
    }
  
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    signupMessage.textContent = "Account created successfully!";
    signupMessage.style.color = "green";

    setTimeout(() => {
      showLogin();
      document.getElementById("signupName").value = "";
      document.getElementById("signupEmail").value = "";
      document.getElementById("signupPassword").value = "";
      signupMessage.textContent = "";
    }, 2000);
  }
  
  
  
  function login() {
    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();
    const incorrectMessage = document.getElementById("incorrect");
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      incorrectMessage.textContent = "";
      showWelcome(user.name);
    } else {
      incorrectMessage.textContent = "Invalid email or password!";
      incorrectMessage.style.color = "red";
    }
  }
  
  
  function logout() {
    showLogin();
  }
  