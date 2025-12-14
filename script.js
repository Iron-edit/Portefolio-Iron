document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.querySelector(".msg").innerText = 
        "Merci ! Votre message a été envoyé ✔️";

    this.reset();
});

document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    btn.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(0.9)' },
    { transform: 'scale(1)' }
    ], {
    duration: 200,
    easing: 'ease-in-out'
    });
    });
    });