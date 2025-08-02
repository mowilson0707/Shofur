// ./resources/js/main.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Typewriter effect for motto
const text = "Gaming on a Budget";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("motto").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Countdown timer
const targetDate = new Date("2025-08-02T20:00:00").getTime();
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Event Started!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Responsive menu toggle
document.getElementById("menuToggle").addEventListener("click", () => {
    document.querySelector(".navbar ul").classList.toggle("active");
});

