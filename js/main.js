// Mobile Navigation Open/Close

const navExpandBtn = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');
navExpandBtn.addEventListener('click', event => {
    nav.classList.toggle('open');
});