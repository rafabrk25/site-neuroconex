// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });  
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Capturar o envio do formulário
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do envio

        // Criar os dados do formulário
        const formData = new FormData(form);

        // Enviar os dados para o Google Forms
        fetch(form.action, {
            method: form.method,
            body: formData,
            mode: "no-cors", // Necessário para contornar CORS no Google Forms
        })
        .then(() => {
            // Após envio bem-sucedido, redirecionar o usuário para a seção inicial
            window.location.href = "#lar"; // Substitua "#lar" pelo ID desejado
        })
        .catch((error) => {
            console.error("Erro ao enviar o formulário:", error);
            alert("Erro ao enviar sua mensagem. Por favor, tente novamente.");
        });
    });
}
