// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    themeToggle.textContent = isDarkMode ? '🌙' : '☀️';
    document.body.style.background = isDarkMode 
        ? 'linear-gradient(135deg, #4338CA, #6366F1)'
        : 'linear-gradient(135deg, #60A5FA, #93C5FD)';
});

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

// News filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.dataset.category;

            newsCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}); 