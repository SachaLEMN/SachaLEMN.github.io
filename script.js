// =============================
// MENU MOBILE
// =============================

const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Ferme le menu après avoir cliqué sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =============================
// ANNÉE DU FOOTER
// =============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();