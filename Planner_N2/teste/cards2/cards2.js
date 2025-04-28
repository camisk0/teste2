const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');
const desafiosLink = document.querySelector('.has-submenu > a');

menuToggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    submenu.style.display = 'none';
});

desafiosLink.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Fechar menu e submenu ao clicar fora
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.style.display = 'none';
        submenu.style.display = 'none';
    }
});