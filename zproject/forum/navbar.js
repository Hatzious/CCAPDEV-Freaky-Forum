// const isUserLoggedIn = localStorage.getItem("authToken") !== null;
const isUserLoggedIn = true;

window.addEventListener('DOMContentLoaded', function() {
    const navbarRegistered = document.getElementById("navbar-registered");
    const navbarUnregistered = document.getElementById("navbar-unregistered");

    if (isUserLoggedIn) {
        navbarRegistered.style.display = "flex";
        navbarUnregistered.style.display = "none";
    } else {
        navbarRegistered.style.display = "none";
        navbarUnregistered.style.display = "flex";
    }
});