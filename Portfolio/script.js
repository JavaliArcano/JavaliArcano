const menuButton = document.getElementById('menu-btn'); 
const menuMobile = document.querySelector('.menu-mobile ul');
const menuLinks = document.querySelectorAll('.menu-mobile ul a'); 

menuButton.addEventListener('click', () => {
    if (menuMobile.style.display === 'none' || menuMobile.style.display === '') {
        menuMobile.style.display = 'flex';
    } else {
        menuMobile.style.display = 'none';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.style.display = 'none'; 
    });
});
