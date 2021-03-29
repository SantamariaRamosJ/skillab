

//define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

// language translations
var language = {
    eng: {
        welcome: "Welcome everyone",
        firstButton: "TELL ME MORE",
        navIt1: "HOM",
        navIt2: "ABOUT US",
        navIt3: "PROYECTS",
        navIt4: "SERVICES",
        navIt5: "TECH STACK",
        navIt6: "FAQS",
        navIt7: "CONTACT US"

    },
    es: {
        welcome: "Bienvenidos todos",
        firstButton: "CONOCER MÁS",
        navIt1: "INICIO",
        navIt2: "NOSOTROS",
        navIt3: "PROYECTOS",
        navIt4: "SERVICIOS",
        navIt5: "TECNOLOGÍAS",
        navIt6: "PREGUNTAS",
        navIt7: "CONTACTO"
    }
};
// set the variables
var hi = document.getElementById("hi");
var btnWel = document.getElementById("text-button");
var navItem1 = document.querySelector("#nav-link-1");




//define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
        hi.textContent = language.eng.welcome,
        btnWel.textContent = language.eng.firstButton;
    }
}

if (window.location.hash) {
    if (window.location.hash === "#es") {
        hi.textContent = language.es.welcome,
        btnWel.textContent = language.es.firstButton;
    }
}

//define language reaload onclic illiterarion
for (i = 0; i < dataReload.length; i++){
    dataReload[i].onclick = function timeFunction() {
        setTimeout(function(){ window.location.reload(); }, 100);
    }
}