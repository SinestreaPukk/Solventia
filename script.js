document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.navbar_toggle');
    const menu = document.querySelector('.navbar_menu');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggle.classList.toggle('open');
    });
});

