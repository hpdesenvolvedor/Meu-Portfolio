const translations = {
  en: {
    "translate-button": "PT - BR", 
    "lang-code": "PT - BR", 
    "logo-text": "Henrique's<span> Portifolio</span>",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-services": "Services",
    "nav-contact": "Contact",
    "contact-me": "Contact Me",
    "home-title": "Hi, It's <span>Henrique</span>",
    "home-subtitle": "I'm a <span>Web Developer</span>",
    "home-description":
      "Software Developer, I develop projects with (Java, Spring Boot, Spring Data JPA, Maven), consuming API's for registration, inclusion, modifications and deletions, through JSON requests through (Postman), accessing relational databases with (MySql, Postgree).",
    hire: "Hire",
    contact: "Contact",
    "about-title": "About <span>Me</span>",
    "about-description":
      "I'm studying my last semester in Software Engineering (06/2025), majoring in Systems Analysis and Development. Interning at Vivo's Data Core Engineering, where I am responsible for Ram Sharing connectivity tests (MME, SGW), Diagnostics trace, sending reports to Deloitte, opening OS through the ABR Telecom system, Sigitm, updating IP Address Pool spreadsheets through the Huawei system, releasing Physical ATP accesses, as required by the POP, among others. Skills/Technologies: Java | SpringBoot | Spring Data JPA | MySQL | Rest API | Git | GitHub | JavaScript | CSS | HTML",
    "read-less-btn": "Read Less",
    "read-more-btn": "Read More",
    "services-title": "Services",    
    "backend-development": "Backend Development",
    "backend-description":
      "Experience in the Java language and Spring Boot framework, I interact with APIs, solving problems, bringing solutions to the business in an objective and safe way. I have carried out personal API consumption projects including products, and registering people with logins and passwords, ensuring efficient communication between parts of the system. Focus on maintaining stable, optimized applications and ready to deal with the demands of robust and dynamic projects.",
    "footer-faq": "FAQ",
    "footer-services": "Services",
    "footer-about-me": "About Me",
    "footer-contact": "Contact",
    "footer-copyright": "© Henrique Nunes | All Rights Reserved",
    "contact-heading": "Contact <span>Me</span>",
    "send-message-btn": "Send Message",
    "full-name": "Full Name",
    email: "Email",
    "phone-number": "Phone Number",
    subject: "Subject",
    message: "Your Message",
    "email-copied-text": "Email Copied!",
  },
  pt: {
    "translate-button": "EN - US",
    "lang-code": "EN - US",
    "logo-text": "Henrique's<span> Portfólio</span>",
    "nav-home": "Tela Inicial",
    "nav-about": "Sobre",
    "nav-services": "Serviços",
    "nav-contact": "Contato",
    "contact-me": "Contate-me",
    "home-title": "Olá, me chamo <span>Henrique</span>",
    "home-subtitle": "Sou <span>Desenvolvedor Backend</span>",
    "home-description":
      "Desenvolvedor de Software, Desenvolvo projetos com (Java, Spring Boot, Spring Data JPA, Maven), consumindo API's para cadastramentos, inclusão, modificações e exclusão, através de requisições JSON pelo (Postman), acessando banco de dados relacionais com (MySql, Postgree)."
    ,hire: "Contratar",
    contact: "Contato",
    "about-title": "Sobre <span>Mim</span>",
    "about-description":
      "Estou cursando último semestre em Engenharia de Software (06/2025), formado em Análise e Desenvolvimento de Sistemas. Estagiando na Engenharia de Core de Dados da Vivo, onde fico responsável pelos testes de conectividades Ram Sharing (MME, SGW), Trace de diagnósticos, envio de relatórios para Deloitte, abertura de OS através do sistema ABR Telecom, Sigitm, atualização de planilhas Pool IP de Endereçamento pelo sistema Huawei, liberações de acessos ATP Físico, conforme necessidade do POP, entre outros. Habilidades/ Tecnologias: Java | Spring Boot | Spring Data JPA | MySQL | API Rest | Git | GitHub | Javascript | CSS | HTML",
    "read-less-btn": "Leia Menos",
    "read-more-btn": "Leia Mais",
    "services-title": "Serviços",
    "backend-development": "Desenvolvimento Backend",
    "backend-description":
      "Experiência na linguagem Java e framework Spring Boot, faço interação de API's solucionando problemas, trazendo soluções para o negócio de forma objetiva e segura. Tenho feitos projetos pessoais de consumo de API's com inclusão de produtos, e cadastro de pessoas com login e senhas, assegurando a comunicação eficiente entre as partes do sistema. Foco em manter aplicações estáveis, otimizadas e prontas para lidar com as demandas de projetos robustos e dinâmicos.",
    "footer-faq": "Perguntas Frequentes",
    "footer-services": "Serviços",
    "footer-about-me": "Sobre Mim",
    "footer-contact": "Contato",
    "footer-copyright": "© Henrique Nunes | Todos os Direitos Reservados",
    "contact-heading": "Contate <span>Me</span>",
    "send-message-btn": "Enviar Mensagem",
    "full-name": "Nome Completo",
    email: "Email",
    "phone-number": "Número de Telefone",
    subject: "Assunto",
    message: "Sua Mensagem",
    "email-copied-text": "Email Copiado!",
  },
};
const flagImages = {
  en: "brazil.svg",
  pt: "united-states.svg",
};

function translatePage(lang) {
  const elementsToTranslate = document.querySelectorAll("[data-translate-key]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate-key");
    if (translations[lang] && translations[lang][key]) {
      if (element.placeholder !== undefined) {
        element.placeholder = translations[lang][key];
      } else if (element.tagName === "INPUT" && element.type === "submit") {
        element.value = translations[lang][key];
      } else if (element.id === "email-copied-tooltip") {
        element.textContent = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("translate-btn");
  const langCode = document.querySelector(".lang-text");
  const flagImage = document.getElementById("flag-image");

  let currentLang = localStorage.getItem("lang") || "en";
  document.documentElement.lang = currentLang;
  translatePage(currentLang);

  langCode.textContent = translations[currentLang]["translate-button"];
  flagImage.src = flagImages[currentLang];
  flagImage.alt = `Bandeira ${
    currentLang === "pt" ? "do Brasil" : "dos Estados Unidos"
  }`;
  btn.dataset.lang = currentLang;

  btn.addEventListener("click", () => {
    const currentLang = btn.dataset.lang;
    const newLang = currentLang === "pt" ? "en" : "pt";

    btn.dataset.lang = newLang;
    langCode.textContent = translations[newLang]["translate-button"];
    flagImage.src = flagImages[newLang];
    flagImage.alt = `Bandeira ${
      newLang === "pt" ? "do Brasil" : "dos Estados Unidos"
    }`;
    document.documentElement.lang = newLang;
    localStorage.setItem("lang", newLang);
    translatePage(newLang);
  });
});

document.documentElement.lang = "en";

document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById("read-more-btn");
  const aboutText = document.getElementById("about-text");

  if (readMoreBtn && aboutText) {
    let isExpanded = false;
    let originalTextHeight = aboutText.scrollHeight;

    // Set initial height to 30%
    aboutText.style.maxHeight = `${originalTextHeight * 0.5}px`;
    aboutText.style.overflow = "hidden";

    readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault();

      if (isExpanded) {
        aboutText.style.maxHeight = `${originalTextHeight * 0.5}px`; // Set back to 30%
        readMoreBtn.textContent =
          translations[document.documentElement.lang]["read-more-btn"];
      } else {
        aboutText.style.maxHeight = originalTextHeight + "px"; // Show full height
        readMoreBtn.textContent =
          translations[document.documentElement.lang]["read-less-btn"];
      }

      isExpanded = !isExpanded;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  } else {
    console.error("Elementos menu-icon ou navbar não encontrados!");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const copyEmailButtons = document.querySelectorAll(".copy-email-btn");
  const emailCopiedTooltips = document.querySelectorAll(
    ".email-copied-tooltip"
  );
  const emailToCopy = "nuneshp2@gmail.com";

  copyEmailButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      navigator.clipboard
        .writeText(emailToCopy)
        .then(() => {
          emailCopiedTooltips[index].classList.add("show"); // Tooltip correto
          setTimeout(() => {
            emailCopiedTooltips[index].classList.remove("show");
          }, 3000);
        })
        .catch((err) => {
          console.error("Falha ao copiar: ", err);
          alert("A cópia para a área de transferência não é suportada.");
        });
    });
  });
});
