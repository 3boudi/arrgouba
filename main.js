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
const propertyImage = document.getElementById('propertyImage');
const fullScreenOverlay = document.getElementById('fullScreenOverlay');
const closeFullscreen = document.querySelector('.close-fullscreen');

// Show Full-Screen Image when clicking on property diagram
propertyImage.addEventListener('click', () => {
    fullScreenOverlay.classList.add('active');
});

// Hide Full-Screen Image when clicking close button
closeFullscreen.addEventListener('click', () => {
    fullScreenOverlay.classList.remove('active');
});

// Hide Full-Screen Image when clicking on overlay background
fullScreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullScreenOverlay) {
        fullScreenOverlay.classList.remove('active');
    }
});

// Hide popups on Esc Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        popup.classList.remove('active');
        fullScreenOverlay.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add animation to feature cards on scroll
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all feature cards and location items
document.querySelectorAll('.feature-card, .location-item').forEach((el) => {
    observer.observe(el);
});

// Add click tracking for contact buttons (optional analytics)
document.querySelectorAll('.contact-btn, .contact-option').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log(`Contact button clicked: ${buttonText}`);
        // Here you can add analytics tracking code if needed
    });
});

// Add hover effects for better UX
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener
