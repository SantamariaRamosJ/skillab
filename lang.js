//define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

// language translations
var language = {
    eng: {
        firstButton: "Tell Me More",
        navIt1: "HOME",
        navIt2: "ABOUT US",
        navIt3: "PROYECTS",
        navIt4: "SERVICES",
        navIt5: "TECH STACK",
        navIt6: "FAQS",
        navIt7: "CONTACT US",
        aboutTitle: "Full-Service Web Development Company",
        aboutText: "SKILLAB is a creative software development company that builds everything from beautiful websites to innovative mobile applications. We pride ourselves in our engineering excellence and the work we do. While keeping current with the latest technologies, we are always looking for new interesting and challenging projects to take on. If you enjoy thinking outside of the box, we'd enjoy working with you.",
        slogan: "Making a Better World",
        ourTeam: "Our Team",
        flipBox1: "SKILLAB is made up of extremely dedicated people committed to making the world a better place through code.",
        ourWork: "Our Work",
        flipBox2: "SKILLAB is proud to work in several areas including everything from the entertainment industry to the learning sector.",
        objective: "Objective",
        flipBox3: "We are interested in help people through code, making solutions to let people's life easier.",
        ourProjects: "Our Projects",
        projectTitle: "Websites and web apps adjusted to your needs",
        projectText: "As an experienced web development company, we have successfully developed various projects, including a studio marketplace platform, an e-commerce startup with a subscription model, a content creation platform and custom learning management system. Various industries and business models, but all satisfied with our services.",
        carouselBtn: "View",
        author: "PagoLinea App",
        job: "Mobile App (iOS & Android)",
        info: "Buy, sell, send and charge from your cell phone, safely and without touching cash or cards. Manage your payments, shipments and your money in a single account.",
        surpriseBtn: "Surpise Me",
        services: "Services",
        servicesDes: "Coding everything from A to Z while never losing sight of your vision, and exceeding your expectations.",
        development: "Development",
        textService1: "Concept Development",
        textService2: "Web/Desktop Development",
        textService3: "Mobile Development",
        responsiveDesign: "Responsive Design",
        uxDesign: "UX/UI Design",
        softArc: "Software Architecture",
        productDesign: "Product Design",
        consulting: "Consulting",
        softwareConsulting: "Software Consulting",
        startup: "startup",
        saas: "saas",
        ourTechStack: "Our Technology Stack",
        happyClients: "OUR HAPPY CLIENTS",
        customerStories: "Customer Stories",
        test1: 'Your entire staff’s committed attitude has helped me tremendously and that says a lot about your company. The website does a great job… I would not hesitate to recommend the service to any other company.',
        position1: "CEO of Ecoluciones",
        test2: '“We believe so much in your product and think you have one of the most ethical, creative and responsive companies alive today….we will pledge you this….if and when anyone asks us about the best billing software and technical support out there, it is, without a doubt your company and staff…..thanks again for everything…”',
        position2: "Graphic designer",
        test3: '"I would like to thank you for your support during our recent project. As you know when we entered into this project we had no previous experience with this software. So, I say without hesitation that if not for your understanding and guidance the project would not have left the ground floor!"',
        position3: "CEO in Instituto Eleusis",
        faqs: "FAQS",
        question1: "Q: How much time-consuming it is to complete a website?",
        question1Text: "The time limit of any web assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client.",
        question2: "Q: Do you develop mobile app for all platforms?",
        question2Text: "Yes, we build mobile applications for all major mobile development platforms. You can hire our developers for developing app for iOS (iPhone and iPad), Android, BlackBerry, Symbian and Windows Mobile.",
        question3: "Q: Do you also upload the application to app store?",
        question3Text: "Yes, we do at free of cost! Nevertheless, you’ll have to pay the minimum amount of charge (fees) by the main company.",
        question4: "Q: What is your project development methodology?",
        question4Text:" Every project is unique and requires a fresh approach, but most projects pass through the following project development cycle:",
        li1: "Step 1: Requirement Gathering and Analysis",
        li2: "Step 2: Consulting for the Right Solution",
        li3: "Step 3: Wire framing and Designing",
        li4: "Step 4: Developmen",
        li5: "Step 5: Testing & QA",
        li6: "Step 6: Support",
        li7: "Step 7: Deployment",
        question5: "Q: How much time-consuming it is to complete a website?",
        question5Text:"The time limit of any web assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client.",
        question6: "Q: What do your websites cost?",
        question6Text:"To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we’ll be able to give you a ballpark figure. If you’re still interested, we’ll come to your place of business and come up with a firm quote.",
        contactUs: "Contact Us",
        textContact: "Send us a message and we will contact you",
        btnContact: "SEND MESSAGE",
        namePlaceholder: "Name and last name",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Message"
    },
    es: {
        firstButton: "Conocer Más",
        navIt1: "INICIO",
        navIt2: "NOSOTROS",
        navIt3: "PROYECTOS",
        navIt4: "SERVICIOS",
        navIt5: "TECNOLOGÍAS",
        navIt6: "PREGUNTAS",
        navIt7: "CONTACTO",
        aboutTitle: "Skillab: Compañía de Desarrollo Web",
        aboutText: "SKILLAB es una empresa de desarrollo de software creativo que crea de todo, desde hermosos sitios web hasta innovadoras aplicaciones móviles. Estamos orgullosos de nuestra excelencia en ingeniería y del trabajo que hacemos. Mientras nos mantenemos actualizados con las últimas tecnologías, siempre estamos buscando nuevos proyectos interesantes y desafiantes para emprender. Si le gusta pensar de manera innovadora, nos encantaría trabajar con usted.",
        slogan: "Haciendo un Mundo Mejor",
        ourTeam: "Nuestro Equipo",
        flipBox1: "SKILLAB está formado por personas dedicadas y comprometidas con hacer del mundo un lugar mejor a través de la programación.",
        ourWork: "Nuestro Trabajo",
        flipBox2: "SKILLAB se enorgullece de trabajar en varias áreas, desde la industria del entretenimiento hasta el sector educativo.",
        objective: "Objetivo",
        flipBox3: "Nos interesa ayudar a las personas a través de la programación, creando soluciones que faciliten la vida de las personas.",
        ourProjects: "Nuestros Proyectos",
        projectTitle: "Sitios web y aplicaciones ajustadas a sus necesidades",
        projectText: "Como empresa de desarrollo web con experiencia, hemos elaborado con éxito varios proyectos, incluida una plataforma de mercado de estudio, una startup de comercio electrónico con un modelo de suscripción, una plataforma de creación de contenido y un sistema de gestión de aprendizaje personalizado. Varias industrias y modelos de negocio, pero todos satisfechos con nuestros servicios.",
        carouselBtn: "Ver",
        author: "PagoLinea App",
        job: "Aplicación Móvil (iOS & Android)",
        info: "Compra, vende, envía y carga dinero desde tu celular, de forma segura y sin tocar dinero en efectivo ni tarjetas. Administre sus pagos, envíos y su dinero en una sola cuenta.",
        surpriseBtn: "Sorpréndeme",
        services: "Servicios",
        servicesDes: "Codificamos todo de la A a la Z sin perder nunca de vista tu visión y superando tus expectativas.",
        development: "Desarrollo",
        textService1: "Desarrollo de Conceptos",
        textService2: "Desarrollo Web",
        textService3: "Desarrollo Móvil",
        responsiveDesign: "Diseño Responsivo",
        uxDesign: "Diseño UX/UI",
        softArc: "Arquitectura de Software",
        productDesign: "Diseño de Productos",
        consulting: "Consultoría",
        softwareConsulting: "Consultoría de Software",
        startup: "Consultoría de StartUp",
        saas: "Consultoría de SaaS",
        ourTechStack: "Tecnologías",
        happyClients: "NUESTROS FELICES CLIENTES",
        customerStories: "Testimonios",
        test1: '"La actitud comprometida de todo su personal me ha ayudado enormemente y eso dice mucho sobre su empresa. El sitio web hace un gran trabajo ... No dudaría en recomendar el servicio a cualquier otra empresa."',
        position1: "CEO en Ecoluciones",
        test2: '“Creemos mucho en su producto y creemos que tiene una de las empresas más éticas, creativas y receptivas con vida en la actualidad ... le prometemos esto ... si alguien nos pregunta sobre el mejor software de facturación y soporte técnico que existe, es, sin duda, su empresa y su personal… .. gracias de nuevo por todo…"',
        position2: "Diseñadora Gráfico",
        test3: '“Me gustaría agradecerles su apoyo durante nuestro reciente proyecto. Como saben cuando entramos en este proyecto no teníamos experiencia previa con este software. Entonces, digo sin dudarlo que si no fuera por su comprensión y orientación, ¡el proyecto no habría salido de la planta baja!"',
        position3: "CEO en Instituto Eleusis",
        faqs: "Preguntas",
        question1: "P: ¿Cuánto tiempo lleva completar un sitio web?",
        question1Text: "El límite de tiempo de cualquier asignación web lo dicta normalmente el cliente. Si tiene algún límite de tiempo en mente, intentaremos ensamblarlo por usted. El principal retraso general en la realización de un sitio web es la espera de que el cliente nos envíe el contenido de las páginas.",
        question2: "P: ¿Desarrolla aplicaciones móviles para todas las plataformas?",
        question2Text: "Sí, creamos aplicaciones móviles para todas las principales plataformas de desarrollo móvil. Puede contratar a nuestros desarrolladores para desarrollar aplicaciones para iOS (iPhone y iPad), Android, BlackBerry, Symbian y Windows Mobile.",
        question3: "P: ¿Desarrolla aplicaciones móviles para todas las plataformas?",
        question3Text: "¡Sí, lo hacemos gratis! Sin embargo, tendrá que pagar la cantidad mínima de cargo (tarifas) por parte de la empresa principal.",
        question4: "P: ¿Cuál es su metodología de desarrollo de proyectos?",
        question4Text:"Cada proyecto es único y requiere un enfoque nuevo, pero la mayoría de los proyectos pasan por el siguiente ciclo de desarrollo de proyectos:",
        li1: "Paso 1: Recopilación y análisis de requisitos",
        li2: "Paso 2: Consultar para encontrar la solución adecuada",
        li3: "Paso 3: Estructura y diseño de cables",
        li4: "Paso 4: desarrollo",
        li5: "Paso 5: Prueba y control de calidad",
        li6: "Paso 6: soporte",
        li7: "Paso 7: implementación",
        question5: "P: ¿Cuánto tiempo lleva completar un sitio web?",
        question5Text: "El límite de tiempo de cualquier asignación web lo dicta normalmente el cliente. Si tiene algún límite de tiempo en mente, intentaremos ensamblarlo por usted. El principal retraso general en la realización de un sitio web es la espera de que el cliente nos envíe el contenido de las páginas.",
        question6: "P: ¿Cuánto cuestan sus sitios web?",
        question6Text:"Para tener una mejor idea del costo de lo que desea construir, llámenos rápidamente. Le haremos algunas preguntas sobre la naturaleza del sitio, qué tipo de interactividad tendrá, sus necesidades de diseño gráfico, etc. Luego, podremos darle una cifra aproximada. Si aún está interesado, iremos a su lugar de trabajo y le ofreceremos una cotización en firme.",
        contactUs: "Contáctanos",
        textContact: "Envíanos un mensaje y te contactaremos",
        btnContact: "ENVIAR",
        namePlaceholder: "Nombre y apellido",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Título",
        messagePlaceholder: "Mensaje"
    }
};

// set the variables
var btnWel = document.getElementById("text-button");
var navItem1 = document.querySelector(".nav-link-1");
var navItem2 = document.querySelector(".nav-link-2");
var navItem3 = document.querySelector(".nav-link-3");
var navItem4 = document.querySelector(".nav-link-4");
var navItem5 = document.querySelector(".nav-link-5");
var navItem6 = document.querySelector(".nav-link-6");
var navItem7 = document.querySelector(".nav-link-7");
var aboutTitle = document.querySelector("#aboutUs");
var aboutText = document.querySelector("#first-text-about");
// var slogan = document.querySelector("[data-type]");
var ourTeam = document.querySelector("#ourTeam");
var flipBox1 = document.querySelector(".flip-box1");
var ourWork = document.querySelector(".ourWork");
var flipBox2 = document.querySelector(".flip-box2");
var objective = document.querySelector(".objective");
var flipBox3 = document.querySelector(".flip-box3");
var ourProjects = document.querySelector("#ourProjects");
var projectTitle = document.querySelector("#projectsTitle");
var projectText = document.querySelector("#project-text");
var carouselBtn = document.querySelector("#link");
var author1 = document.querySelector("#author");
var job1 = document.querySelector("#job");
var info1 = document.querySelector("#info");
var surpriseBtn = document.querySelector("#surpriseMe");
var services = document.querySelector("#services");
var servicesDes = document.querySelector("#servicesDes");
var development = document.querySelector("#development");
var textService1 = document.querySelector("#text-services1");
var textService2 = document.querySelector("#text-services2");
var textService3 = document.querySelector("#text-services3");
var responsiveDesign = document.querySelector("#responsiveDesign");
var uxDesign = document.querySelector("#uxDesign");
var softArc = document.querySelector("#softArc");
var productDesign = document.querySelector("#productDesign");
var consulting = document.querySelector("#consulting");
var softwareConsulting = document.querySelector("#softwareConsulting");
var startup = document.querySelector("#startup");
var saas = document.querySelector("#saas");
var ourTechStack = document.querySelector("#ourTechStack");
var happyClients = document.querySelector("#happyClients");
var customerStories = document.querySelector("#customerStories");
var test1 = document.querySelector("#test1");
var position1 = document.querySelector("#position1");
var test2 = document.querySelector("#test2");
var position2 = document.querySelector("#position2");
var test3 = document.querySelector("#test3");
var position3 = document.querySelector("#position3");
var faqs = document.querySelector("#faqs");
var question1 = document.querySelector("#question1");
var question1Text = document.querySelector("#question1Text");
var question2 = document.querySelector("#question2");
var question2Text = document.querySelector("#question2Text");
var question3 = document.querySelector("#question3");
var question3Text = document.querySelector("#question3Text");
var question4 = document.querySelector("#question4");
var question4Text = document.querySelector("#question4Text");
var li1 = document.querySelector("#li1");
var li2 = document.querySelector("#li2");
var li3 = document.querySelector("#li3");
var li4 = document.querySelector("#li4");
var li5 = document.querySelector("#li5");
var li6 = document.querySelector("#li6");
var li7 = document.querySelector("#li7");
var question5 = document.querySelector("#question5");
var question5Text = document.querySelector("#question5Text");
var question6 = document.querySelector("#question6");
var question6Text = document.querySelector("#question6Text");
var contactUs = document.querySelector("#contactUs");
var textContact = document.querySelector("#textContact");
var btnContact = document.querySelector("#btnContact");
var namePlaceholder = document.querySelector("#contactName").placeholder;
var emailPlaceholder = document.querySelector("#contactEmail").placeholder;
var subjectPlaceholder = document.querySelector("#contactSubject").placeholder;
var messagePlaceholder = document.querySelector("#contactMessage").placeholder;

//define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
        btnWel.textContent = language.eng.firstButton;
        navItem1.textContent = language.eng.navIt1;
        navItem2.textContent = language.eng.navIt2;
        navItem3.textContent = language.eng.navIt3;
        navItem4.textContent = language.eng.navIt4;
        navItem5.textContent = language.eng.navIt5;
        navItem6.textContent = language.eng.navIt6;
        navItem7.textContent = language.eng.navIt7;
        aboutTitle.textContent = language.eng.aboutTitle;
        aboutText.textContent = language.eng.aboutText;
        // slogan.textContent = language.eng.slogan;
        ourTeam.textContent = language.eng.ourTeam;
        flipBox1.textContent = language.eng.flipBox1;
        ourWork.textContent = language.eng.ourWork;
        flipBox2.textContent = language.eng.flipBox2;
        objective.textContent = language.eng.objective;
        flipBox3.textContent = language.eng.flipBox3;
        ourProjects.textContent = language.eng.ourProjects;
        projectTitle.textContent = language.eng.projectTitle;
        projectText.textContent = language.eng.projectText;
        carouselBtn.textContent = language.eng.carouselBtn;
        author1.textContent = language.eng.author;
        job1.textContent = language.eng.job;
        info1.textContent = language.eng.info;
        surpriseBtn.textContent = language.eng.surpriseBtn;
        services.textContent = language.eng.services;
        servicesDes.textContent = language.eng.servicesDes;
        development.textContent = language.eng.development;
        textService1.textContent = language.eng.textService1;
        textService2.textContent = language.eng.textService2;
        textService3.textContent = language.eng.textService3;
        responsiveDesign.textContent = language.eng.responsiveDesign;
        uxDesign.textContent = language.eng.uxDesign;
        softArc.textContent = language.eng.softArc;
        productDesign.textContent = language.eng.productDesign;
        consulting.textContent = language.eng.consulting;
        softwareConsulting.textContent = language.eng.softwareConsulting;
        startup.textContent = language.eng.startup;
        saas.textContent = language.eng.saas;
        ourTechStack.textContent = language.eng.ourTechStack;
        happyClients.textContent = language.eng.happyClients;
        customerStories.textContent = language.eng.customerStories;
        test1.textContent = language.eng.test1;
        position1.textContent = language.eng.position1;
        test2.textContent = language.eng.test2;
        position2.textContent = language.eng.position2;
        test3.textContent = language.eng.test3;
        position3.textContent = language.eng.position3;
        faqs.textContent = language.eng.faqs;
        question1.textContent = language.eng.question1;
        question1Text.textContent = language.eng.question1Text;
        question2.textContent = language.eng.question2;
        question2Text.textContent = language.eng.question2Text;
        question3.textContent = language.eng.question3;
        question3Text.textContent = language.eng.question3Text;
        question4.textContent = language.eng.question4;
        question4Text.textContent = language.eng.question4Text;
        li1.textContent = language.eng.li1;
        li2.textContent = language.eng.li2;
        li3.textContent = language.eng.li3;
        li4.textContent = language.eng.li4;
        li5.textContent = language.eng.li5;
        li6.textContent = language.eng.li6;
        li7.textContent = language.eng.li7;
        question5.textContent = language.eng.question5;
        question5Text.textContent = language.eng.question5Text;
        question6.textContent = language.eng.question6;
        question6Text.textContent = language.eng.question6Text;
        contactUs.textContent = language.eng.contactUs;
        textContact.textContent = language.eng.textContact;
        btnContact.textContent = language.eng.btnContact;
        namePlaceholder.textContact = language.eng.namePlaceholder;
        emailPlaceholder.textContact = language.eng.emailPlaceholder;
        subjectPlaceholder.textContact = language.eng.subjectPlaceholder;
        messagePlaceholder.textContact = language.eng.messagePlaceholder;
    }
}

if (window.location.hash) {
    if (window.location.hash === "#es") {
        btnWel.textContent = language.es.firstButton;
        navItem1.textContent = language.es.navIt1,
        navItem2.textContent = language.es.navIt2;
        navItem3.textContent = language.es.navIt3;
        navItem4.textContent = language.es.navIt4;
        navItem5.textContent = language.es.navIt5;
        navItem6.textContent = language.es.navIt6;
        navItem7.textContent = language.es.navIt7;
        aboutTitle.textContent = language.es.aboutTitle;
        aboutText.textContent = language.es.aboutText;
        // slogan.textContent = language.es.slogan;
        ourTeam.textContent = language.es.ourTeam;
        flipBox1.textContent = language.es.flipBox1;
        ourWork.textContent = language.es.ourWork;
        flipBox2.textContent = language.es.flipBox2;
        objective.textContent = language.es.objective;
        flipBox3.textContent = language.es.flipBox3;
        ourProjects.textContent = language.es.ourProjects;
        projectTitle.textContent = language.es.projectTitle;
        projectText.textContent = language.es.projectText;
        carouselBtn.textContent = language.es.carouselBtn;
        author1.textContent = language.es.author;
        job1.textContent = language.es.job;
        info1.textContent = language.es.info;
        surpriseBtn.textContent = language.es.surpriseBtn;
        services.textContent = language.es.services;
        servicesDes.textContent = language.es.servicesDes;
        development.textContent = language.es.development;
        textService1.textContent = language.es.textService1;
        textService2.textContent = language.es.textService2;
        textService3.textContent = language.es.textService3;
        responsiveDesign.textContent = language.es.responsiveDesign;
        uxDesign.textContent = language.es.uxDesign;
        softArc.textContent = language.es.softArc;
        productDesign.textContent = language.es.productDesign;
        consulting.textContent = language.es.consulting;
        softwareConsulting.textContent = language.es.softwareConsulting;
        startup.textContent = language.es.startup;
        saas.textContent = language.es.saas;
        ourTechStack.textContent = language.es.ourTechStack;
        happyClients.textContent = language.es.happyClients;
        customerStories.textContent = language.es.customerStories;
        test1.textContent = language.es.test1;
        position1.textContent = language.es.position1;
        test2.textContent = language.es.test2;
        position2.textContent = language.es.position2;
        test3.textContent = language.es.test3;
        position3.textContent = language.es.position3;
        faqs.textContent = language.es.faqs;
        question1.textContent = language.es.question1;
        question1Text.textContent = language.es.question1Text;
        question2.textContent = language.es.question2;
        question2Text.textContent = language.es.question2Text;
        question3.textContent = language.es.question3;
        question3Text.textContent = language.es.question3Text;
        question4.textContent = language.es.question4;
        question4Text.textContent = language.es.question4Text;
        li1.textContent = language.es.li1;
        li2.textContent = language.es.li2;
        li3.textContent = language.es.li3;
        li4.textContent = language.es.li4;
        li5.textContent = language.es.li5;
        li6.textContent = language.es.li6;
        li7.textContent = language.es.li7;
        question5.textContent = language.es.question5;
        question5Text.textContent = language.es.question5Text;
        question6.textContent = language.es.question6;
        question6Text.textContent = language.es.question6Text;
        contactUs.textContent = language.es.contactUs;
        textContact.textContent = language.es.textContact;
        btnContact.textContent = language.es.btnContact;
        namePlaceholder.textContact = language.es.namePlaceholder;
        emailPlaceholder.textContact = language.es.emailPlaceholder;
        subjectPlaceholder.textContact = language.es.subjectPlaceholder;
        messagePlaceholder.textContact = language.es.messagePlaceholder;
    }
}

//define language reaload onclic illiterarion
for (i = 0; i < dataReload.length; i++){
    dataReload[i].onclick = function timeFunction() {
        setTimeout(function(){ window.location.reload(); }, 100);
    }
}