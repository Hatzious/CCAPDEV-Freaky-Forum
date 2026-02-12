function updateNavbar() {
    const navbarRegistered = document.getElementById("navbar-registered");
    const navbarUnregistered = document.getElementById("navbar-unregistered");

    const isUserLoggedIn = localStorage.getItem("authToken") !== null;

    if (isUserLoggedIn) {
        navbarRegistered.style.display = "flex";
        navbarUnregistered.style.display = "none";
    } else {
        navbarRegistered.style.display = "none";
        navbarUnregistered.style.display = "flex";
    }
}

window.addEventListener('DOMContentLoaded', updateNavbar);

document.addEventListener("click", function(e) {
    if (e.target.closest('#logout-redirect')) {
        e.preventDefault();
        localStorage.removeItem("authToken");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        window.location.href = "../welcome/welcome.html";
    }
})