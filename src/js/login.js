document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userInput = document.getElementById("user").value.trim();
        const passwordInput = document.getElementById("password").value;

        const correctUser = "Estudiante_123";
        const correctPassword = "IALI-2015.";

        if (userInput === correctUser && passwordInput === correctPassword) {
            alert("Inicio de sesión exitoso ✅");
            return window.location.href = "../html/main.html";
        } else {
            alert("❌ Usuario o contraseña incorrectos");
        }
    });
});
