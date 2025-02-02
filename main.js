// JavaScript for Popup
const popup = document.getElementById('popup');
const contactButton = document.getElementById('contactButton');
const closeButton = document.getElementById('closeButton');

// Show Popup
contactButton.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
});

// Hide Popup
closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Hide Popup when clicking outside
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});

// JavaScript for Full-Screen Image
const bodyImage = document.getElementById('bodyImage');
const fullScreenOverlay = document.getElementById('fullScreenOverlay');
const fullScreenImage = document.querySelector('.full-screen-image');

// Show Full-Screen Image
bodyImage.addEventListener('click', () => {
    fullScreenOverlay.classList.add('active');
});

// Hide Full-Screen Image
fullScreenOverlay.addEventListener('click', () => {
    fullScreenOverlay.classList.remove('active');
});

// Hide Full-Screen Image on Esc Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        fullScreenOverlay.classList.remove('active');
    }
});