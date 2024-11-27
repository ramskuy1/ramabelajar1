document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const percentage = skill.getAttribute('data-skill');
        skill.style.setProperty('--percentage', percentage + '%');
        skill.style.width = percentage + '%';
    });

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent. Thank you!');
    });
});
