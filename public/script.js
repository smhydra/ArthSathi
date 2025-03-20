// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect to navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Chat button click handler
const chatBtn = document.querySelector('.chat-btn');
chatBtn.addEventListener('click', () => {
    alert('Chat feature coming soon!');
});

// Share button click handler
const shareBtn = document.querySelector('.share-btn');
shareBtn.addEventListener('click', () => {
    alert('Share your experience feature coming soon!');
});

// Add scroll animation for hero section
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.scrollY;

    heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
}); 