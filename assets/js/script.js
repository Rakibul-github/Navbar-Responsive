// navbar javascript code == active toggle == //

const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
toggle.addEventListener('click', () => {
navbar.classList.toggle('active')
})