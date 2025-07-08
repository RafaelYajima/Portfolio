const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }
    navLinks.classList.remove('nav-active');
    burger.classList.remove('toggle');
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
        return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert('Por favor, insira um email válido.');
        event.preventDefault();
        return;
    }
});

const skillCards = document.querySelectorAll('.skill-card');

function checkSkillCards() {
    const triggerBottom = window.innerHeight * 0.85;

    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkSkillCards);
window.addEventListener('load', checkSkillCards);
