// Selectors
const header = document.querySelector('header');
const mainNav = document.querySelector('.main-nav');
const subNav = document.querySelector('.sub-nav');
const logo = document.querySelector('.netflixLogo');
const mainContainer = document.querySelector('.main-container');
const box = document.querySelectorAll('.box');
const logos = document.querySelectorAll('.logos');
const subLinks = document.querySelectorAll('.sub-links');

// Functions
function toggleNav() {
  mainNav.classList.toggle('active');
  subNav.classList.toggle('active');
}

function handleLogoClick() {
  window.location.href = '/';
}

function handleBoxHover(event) {
  event.target.style.transform = 'scale(1.4)';
}

function handleBoxLeave(event) {
  event.target.style.transform = 'scale(1)';
}

function handleLogoHover(event) {
  event.target.style.transform = 'scale(1.2)';
}

function handleLogoLeave(event) {
  event.target.style.transform = 'scale(1)';
}

// Event Listeners
logo.addEventListener('click', handleLogoClick);
mainNav.addEventListener('click', toggleNav);
subNav.addEventListener('click', toggleNav);

box.forEach((boxItem) => {
  boxItem.addEventListener('mouseover', handleBoxHover);
  boxItem.addEventListener('mouseleave', handleBoxLeave);
});

logos.forEach((logoItem) => {
  logoItem.addEventListener('mouseover', handleLogoHover);
  logoItem.addEventListener('mouseleave', handleLogoLeave);
});

// Initialize
toggleNav();