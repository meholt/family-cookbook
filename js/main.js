// Mobile Navigation Open/Close

const navExpandBtn = document.querySelector('.open-nav');
const nav = document.querySelector('nav');
const dropdown = document.querySelector('.dropdown');
navExpandBtn.addEventListener('click', event => {
    nav.classList.toggle('open');
});