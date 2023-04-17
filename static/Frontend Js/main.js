// Toogle For Menu 
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    login.classList.remove('active');    
};

// Login Form Toggle
let login = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    
};

// On click On Menu Links Removed Menu
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
}

// Change Header Background color And Shadow On Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Scroll Top
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrolltop.classList.toggle('active', window.scrollY > 0);
});