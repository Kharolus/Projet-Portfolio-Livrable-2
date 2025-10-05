var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

// Set the width of the side navigation to 250px
function openNav(){
    sidenav.classList.add("active");
}

// Set the width of the navigation to 0
function closeNav() {
    sidenav.classList.remove("active");
}


const form = document.getElementById("formContact");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // bloque l'envoi réel

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérifier que tous les champs sont remplis
    if (!email || !password || !message) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Vérification email
    if (!email.includes("@")) {
        alert("L'adresse email doit contenir un '@'.");
        return;
    }

    // Vérification mot de passe
    if (password.length < 8) {
        alert("Le mot de passe doit comporter au moins 8 caractères.");
        return;
    }

    alert("Formulaire validé ! (fictif, aucun envoi réel)");
    form.reset(); // vide le formulaire
});
