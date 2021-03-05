// local reviews data
const reviews = [
    {
        id: 1,
        name: "Pollster",
        job: "Web App (in development)",
        img:
            "./images/pollster.png",
        text:
            "Pollster is a Django App to conduct Web-based polls. For each question, visitors can choose between a fixed number of answers.",
        url: "https://pollsterwtp.herokuapp.com/"
    },
    {
        id: 2,
        name: "Instituto Eleusis",
        job: "Website",
        img:
            "./images/eleusis.png",
        text:
            "INSTITUTO ELEUSIS is an academic and psychotherapeutic institute based in Lima, Peru, aimed at promoting Depth Psychology in order to help all people interested in: Expand your level of consciousness.",
        url: "https://santamariaramosj.github.io/eleusis-landing-page/#intro"
    },
    {
        id: 3,
        name: "Alquimia Personal",
        job: "Website",
        img:
            "./images/alquimia.png",
        text:
            "It is an institute based on the contributions of Carl Gustav Jung, James Hillmann, Hermetic Wisdom, Existentialism, Buddhism, Gurdjieff's Fourth Way, focused on the study and transformation of the soul.",
        url: "https://santamariaramosj.github.io/alquimia-web/landing-page.html"
    },
    {
        id: 4,
        name: "PagoLinea App",
        job: "Mobile App (iOS & Android)",
        img:
            "./images/pagolinea.jpg",
        text:
            "Buy, sell, send and charge from your cell phone, safely and without touching cash or cards. Manage your payments, shipments and your money in a single account.",
        url: "https://play.google.com/store/apps/details?id=com.pagolineaapp&hl=es_419"
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const link = document.getElementById("link");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    link.href = item.url;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    link.href = item.url;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});